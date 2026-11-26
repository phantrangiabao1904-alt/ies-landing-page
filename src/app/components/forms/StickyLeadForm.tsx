'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import { submitLeadAction } from '@/actions/lead-submit';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { resolveAdmissionMajor } from '@/lib/majors';

type FormFieldName = 'fullName' | 'phone' | 'major' | 'consent';

interface ConfettiStyle extends CSSProperties {
  '--confetti-x': string;
  '--confetti-y': string;
  '--confetti-rotation': string;
  '--confetti-color': string;
}

const confettiParticles: ConfettiStyle[] = [
  { '--confetti-x': '-142px', '--confetti-y': '-110px', '--confetti-rotation': '190deg', '--confetti-color': '#F58232' },
  { '--confetti-x': '-108px', '--confetti-y': '-164px', '--confetti-rotation': '280deg', '--confetti-color': '#7AA2F7' },
  { '--confetti-x': '-66px', '--confetti-y': '-126px', '--confetti-rotation': '230deg', '--confetti-color': '#9ECE6A' },
  { '--confetti-x': '-28px', '--confetti-y': '-176px', '--confetti-rotation': '160deg', '--confetti-color': '#E0AF68' },
  { '--confetti-x': '22px', '--confetti-y': '-150px', '--confetti-rotation': '300deg', '--confetti-color': '#BB9AF7' },
  { '--confetti-x': '70px', '--confetti-y': '-178px', '--confetti-rotation': '200deg', '--confetti-color': '#F58232' },
  { '--confetti-x': '116px', '--confetti-y': '-136px', '--confetti-rotation': '330deg', '--confetti-color': '#7AA2F7' },
  { '--confetti-x': '158px', '--confetti-y': '-96px', '--confetti-rotation': '250deg', '--confetti-color': '#9ECE6A' },
  { '--confetti-x': '-156px', '--confetti-y': '18px', '--confetti-rotation': '310deg', '--confetti-color': '#E0AF68' },
  { '--confetti-x': '-112px', '--confetti-y': '42px', '--confetti-rotation': '210deg', '--confetti-color': '#BB9AF7' },
  { '--confetti-x': '-62px', '--confetti-y': '18px', '--confetti-rotation': '290deg', '--confetti-color': '#F58232' },
  { '--confetti-x': '56px', '--confetti-y': '30px', '--confetti-rotation': '180deg', '--confetti-color': '#7AA2F7' },
  { '--confetti-x': '104px', '--confetti-y': '10px', '--confetti-rotation': '270deg', '--confetti-color': '#9ECE6A' },
  { '--confetti-x': '152px', '--confetti-y': '38px', '--confetti-rotation': '220deg', '--confetti-color': '#E0AF68' },
];

function isFormFieldName(name: string): name is FormFieldName {
  return name === 'fullName' || name === 'phone' || name === 'major' || name === 'consent';
}

function getValidationMessage(field: HTMLInputElement | HTMLSelectElement) {
  if (field.validity.valueMissing) {
    return field.name === 'consent'
      ? 'Vui lòng đồng ý để IES liên hệ tư vấn.'
      : 'Vui lòng điền thông tin này.';
  }

  if (field.validity.patternMismatch || field.validity.typeMismatch) {
    return 'Số điện thoại chưa đúng định dạng.';
  }

  return field.validationMessage || 'Vui lòng kiểm tra lại thông tin này.';
}

interface StickyLeadFormProps {
  id?: string;
  isSticky?: boolean;
}

export default function StickyLeadForm({
  id = 'lead-form',
  isSticky = true,
}: StickyLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FormFieldName, string>>>({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiRun, setConfettiRun] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const confettiTimerRef = useRef<number | null>(null);
  const { ref: cardRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const majorSelectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedMajor = resolveAdmissionMajor(params.get('major') ?? params.get('nganh'));
    if (requestedMajor && majorSelectRef.current) {
      majorSelectRef.current.value = requestedMajor;
    }
  }, []);

  useEffect(
    () => () => {
      if (confettiTimerRef.current !== null) {
        window.clearTimeout(confettiTimerRef.current);
      }
    },
    [],
  );

  function handleInvalidCapture(e: FormEvent<HTMLFormElement>) {
    const field = e.target;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement)) return;
    if (!isFormFieldName(field.name)) return;

    field.dataset.invalid = 'true';
    setFieldErrors((current) => ({
      ...current,
      [field.name]: getValidationMessage(field),
    }));
  }

  function clearResolvedError(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const field = e.currentTarget;
    const fieldName = field.name;
    if (!isFormFieldName(fieldName) || !field.validity.valid) return;

    delete field.dataset.invalid;
    setFieldErrors((current) => {
      if (!current[fieldName]) return current;
      const next = { ...current };
      delete next[fieldName];
      return next;
    });
  }

  function validatePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const phone = e.currentTarget.value.trim();
    if (phone && phone.length >= 10 && !/^(0|\+84)[0-9]{9}$/.test(phone)) {
      setFieldErrors((current) => ({ ...current, phone: 'Số điện thoại cần có 10 số hoặc đầu số +84.' }));
      return;
    }
    clearResolvedError(e);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    try {
      const response = await submitLeadAction(formData);
      setMessage(response.message);
      setIsSuccess(response.success);

      if (response.success) {
        formRef.current?.reset();
        setFieldErrors({});

        if (!prefersReducedMotion) {
          setShowConfetti(true);
          setConfettiRun((run) => run + 1);
          if (confettiTimerRef.current !== null) {
            window.clearTimeout(confettiTimerRef.current);
          }
          confettiTimerRef.current = window.setTimeout(() => {
            setShowConfetti(false);
            confettiTimerRef.current = null;
          }, 1900);
        }
      }
    } catch {
      setIsSuccess(false);
      setMessage('Không thể gửi đăng ký lúc này. Vui lòng thử lại hoặc gọi hotline tư vấn.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      ref={cardRef}
      data-motion-in-view={isInView}
      className={`lead-form-card site-card relative overflow-hidden bg-white rounded-2xl shadow-xl p-6 sm:p-7 border border-[#D9E2EA] ring-1 ring-black/5 ${
        isSticky ? 'lg:sticky lg:top-24 lg:z-30' : ''
      }`}
    >
      {showConfetti && isInView && !prefersReducedMotion && (
        <div key={confettiRun} className="lead-form-confetti" aria-hidden="true">
          {confettiParticles.map((particle, index) => (
            <span key={index} className="lead-form-confetti__particle" style={particle} />
          ))}
        </div>
      )}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6EEE5] text-[#A84300] font-black text-xs uppercase tracking-wider mb-2 border border-[#F58232]/20">
          <span className="w-2 h-2 rounded-full bg-[#F58232] animate-ping" />
          ƯU ĐÃI NGHỊ ĐỊNH 81/CP
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#0F5587] tracking-tight">
          ĐĂNG KÝ XÉT TUYỂN 2026
        </h3>
        <p className="text-xs sm:text-sm text-[#3764AF] font-bold mt-1">
          Tài trợ 100% học phí nghề cho học sinh tốt nghiệp THCS
        </p>
      </div>

      <form
        id={id}
        ref={formRef}
        onSubmit={handleSubmit}
        onInvalidCapture={handleInvalidCapture}
        className="scroll-mt-28 space-y-4"
      >
        <div className="lead-form-field" data-invalid={Boolean(fieldErrors.fullName)}>
          <label htmlFor={`${id}-full-name`} className="lead-form-label block text-base font-semibold text-[#263849] mb-1">
            Họ và tên thí sinh <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${id}-full-name`}
            type="text"
            name="fullName"
            required
            autoComplete="name"
            autoCapitalize="words"
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={fieldErrors.fullName ? `${id}-full-name-error` : undefined}
            onChange={clearResolvedError}
            placeholder="Ví dụ: Nguyễn Văn An"
            className="lead-form-control min-h-[48px] w-full px-3.5 py-2.5 text-base bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] focus:border-[#0F5587] outline-none placeholder:text-[#5D6B78]/60 text-[#263849]"
          />
          {fieldErrors.fullName && (
            <p id={`${id}-full-name-error`} className="lead-form-error" role="alert">
              {fieldErrors.fullName}
            </p>
          )}
        </div>

        <div className="lead-form-field" data-invalid={Boolean(fieldErrors.phone)}>
          <label htmlFor={`${id}-phone`} className="lead-form-label block text-base font-semibold text-[#263849] mb-1">
            Số điện thoại / Zalo <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="^(0|\+84)[0-9]{9}$"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? `${id}-phone-error` : undefined}
            onChange={validatePhoneChange}
            onBlur={(event) => {
              const phone = event.currentTarget.value.trim();
              if (phone && !/^(0|\+84)[0-9]{9}$/.test(phone)) {
                setFieldErrors((current) => ({
                  ...current,
                  phone: 'Vui lòng nhập số điện thoại Việt Nam hợp lệ.',
                }));
              }
            }}
            placeholder="Ví dụ: 0912345678"
            className="lead-form-control min-h-[48px] w-full px-3.5 py-2.5 text-base bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] focus:border-[#0F5587] outline-none placeholder:text-[#5D6B78]/60 text-[#263849]"
          />
          {fieldErrors.phone && (
            <p id={`${id}-phone-error`} className="lead-form-error" role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div className="lead-form-field" data-invalid={Boolean(fieldErrors.major)}>
          <label htmlFor={`${id}-major`} className="lead-form-label block text-base font-semibold text-[#263849] mb-1">
            Ngành học quan tâm <span className="text-rose-500">*</span>
          </label>
          <select
            ref={majorSelectRef}
            id={`${id}-major`}
            name="major"
            required
            aria-invalid={Boolean(fieldErrors.major)}
            aria-describedby={fieldErrors.major ? `${id}-major-error` : undefined}
            onChange={(event) => {
              clearResolvedError(event);
            }}
            className="lead-form-control min-h-[48px] w-full px-3.5 py-2.5 text-base bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] focus:border-[#0F5587] outline-none text-[#263849]"
          >
            <option value="" disabled>
              -- Chọn ngành học của bạn --
            </option>
            <option value="Công nghệ thông tin">Công nghệ thông tin</option>
            <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
            <option value="Quản trị mạng">Quản trị mạng</option>
            <option value="Kế toán">Kế toán</option>
            <option value="Quản trị kinh doanh">Quản trị kinh doanh</option>
            <option value="Thương mại điện tử">Thương mại điện tử</option>
          </select>
          {fieldErrors.major && (
            <p id={`${id}-major-error`} className="lead-form-error" role="alert">
              {fieldErrors.major}
            </p>
          )}
        </div>

        <input type="hidden" name="source" value="landing_sticky_brand" />
        <div className="lead-form-field" data-invalid={Boolean(fieldErrors.consent)}>
          <label className="flex min-h-11 items-start gap-2 text-base text-[#5D6B78]">
            <input
              type="checkbox"
              name="consent"
              required
              aria-invalid={Boolean(fieldErrors.consent)}
              aria-describedby={fieldErrors.consent ? `${id}-consent-error` : undefined}
              onChange={clearResolvedError}
              className="mt-1 h-5 w-5 shrink-0 accent-[#0F5587]"
            />
            Tôi đồng ý để IES liên hệ tư vấn về chương trình tuyển sinh.
          </label>
          {fieldErrors.consent && (
            <p id={`${id}-consent-error`} className="lead-form-error" role="alert">
              {fieldErrors.consent}
            </p>
          )}
        </div>

        {message && (
          <div
            role={isSuccess ? 'status' : 'alert'}
            aria-live="polite"
            data-success={isSuccess}
            className={`lead-form-status p-3.5 rounded-xl text-base font-semibold leading-relaxed border ${
              isSuccess
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}
          >
            {message}
          </div>
        )}
        {isSuccess && (
          <p className="text-center text-base font-semibold text-[#0F5587]">
            Cảm ơn bạn đã quan tâm đến IES.
          </p>
        )}

        {/* Nút hành động chính theo Brand Guideline: màu cam Learning Orange #F58232 */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative group overflow-hidden bg-[#F58232] hover:bg-[#E06F20] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-[#F58232]/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide uppercase text-base">
            {isSubmitting ? (
              <>
                <svg
                  className="lead-form-spinner animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                ĐANG XỬ LÝ...
              </>
            ) : (
              'NHẬN TƯ VẤN & HỌC BỔNG 100%'
            )}
          </span>
        </button>

        <p className="text-center text-sm text-[#5D6B78] font-medium">
          🔒 Bảo mật thông tin thí sinh 100% theo quy chuẩn Bộ GD&ĐT
        </p>
      </form>
    </div>
  );
}

