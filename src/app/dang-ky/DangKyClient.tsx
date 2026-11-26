'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { submitLeadAction } from '@/actions/lead-submit';
import { schoolContact } from '@/lib/school-info';
import { admissionMajors, resolveAdmissionMajor } from '@/lib/majors';
import type { SiteMediaSlot } from '@/lib/media/slots';

const PHONE_PATTERN = /^(0|\+84)[0-9]{9}$/;

const pathways = [
  { value: 'Tốt nghiệp THCS', title: 'Tốt nghiệp THCS (lớp 9)', detail: 'Hệ 9+: học nghề 1.5 - 2 năm, song song văn hóa THPT. Hỗ trợ học phí theo NĐ 81.' },
  { value: 'Tốt nghiệp THPT', title: 'Tốt nghiệp THPT (lớp 12)', detail: 'Đào tạo nghề chuyên sâu 1.5 - 2 năm, nhận bằng Trung cấp chính quy.' },
] as const;

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#0F5587] focus:outline-none focus:ring-2 focus:ring-[#0F5587]/30';
const labelClass = 'mb-1.5 block text-sm font-semibold text-slate-700';

export default function DangKyClient({ media }: { media: Record<SiteMediaSlot, string> }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMsg, setFormMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedMajor = resolveAdmissionMajor(params.get('major') ?? params.get('nganh'));
    const majorSelect = formRef.current?.querySelector<HTMLSelectElement>('#application-primary-major');
    if (requestedMajor && majorSelect) majorSelect.value = requestedMajor;
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMsg('');
    const formData = new FormData(e.currentTarget);
    try {
      const res = await submitLeadAction(formData);
      setFormMsg(res.message);
      setIsSuccess(res.success);
      if (res.success) {
        formRef.current?.reset();
        setPhoneValue('');
        setPhoneError('');
      }
    } catch {
      setIsSuccess(false);
      setFormMsg('Không thể gửi đăng ký lúc này. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-[#0F5587] py-6 text-white">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 md:px-8">
            <p className="text-sm">
              <strong>Đợt 1 Tuyển sinh 2026:</strong> Nhận hồ sơ xét tuyển học bạ THCS &amp; THPT đến hết ngày 30/08/2026.
            </p>
            <span className="rounded-full bg-[#F58232] px-3 py-1 text-xs font-bold">Ưu tiên 500 suất đầu tiên</span>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-4 md:px-8 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
                <Link href="/" className="hover:text-[#0F5587]">Trang chủ</Link>
                <Icon name="chevron_right" className="text-[13px]" />
                <span className="font-semibold text-[#0F5587]">Đăng ký xét tuyển</span>
              </nav>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Xét tuyển học bạ</span>
              <h1 className="font-[var(--font-montserrat)] text-3xl font-extrabold leading-tight text-[#0F5587] sm:text-4xl">
                Khởi đầu vững chắc từ tuổi 15
              </h1>
              <p className="leading-relaxed text-slate-600">
                Mô hình đào tạo nghề 9+: học song song văn hóa THPT và nghề chuyên sâu, tự tin việc làm và liên thông thẳng Đại học.
              </p>

              <div className="rounded-xl border border-[#F58232]/30 bg-[#F6EEE5] p-6">
                <span className="inline-block rounded bg-[#0F5587] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  Chính sách Nhà nước
                </span>
                <h2 className="mt-2 font-[var(--font-montserrat)] text-lg font-bold text-[#0F5587]">
                  Hỗ trợ học phí nghề theo Nghị định 81/2021/NĐ-CP
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Áp dụng cho học sinh tốt nghiệp THCS đăng ký học nghề tại IES Sài Gòn, theo quy định hiện hành.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: '10+', l: 'Năm kinh nghiệm' },
                  { v: '5.000+', l: 'Học viên' },
                  { v: '92%', l: 'Việc làm 6 tháng' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-slate-200 bg-[#F5F8FA] p-3 text-center">
                    <p className="font-[var(--font-montserrat)] text-lg font-extrabold text-[#0F5587]">{s.v}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200">
                <Image src={media['registration-visual']} alt="Tư vấn tuyển sinh tại IES" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>

              <p className="text-sm text-slate-600">
                Cần tư vấn trực tiếp? Phòng Tuyển sinh hỗ trợ Thứ 2 - Thứ 7, 7h30 - 17h00.{' '}
                <a href={schoolContact.phoneNumbers[0].href} className="font-bold text-[#0F5587]">{schoolContact.phoneNumbers[0].number}</a>
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
                <div className="mb-6 border-b border-slate-100 pb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Đăng ký trực tuyến 2026</span>
                  <h2 className="mt-1 font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Phiếu đăng ký xét tuyển</h2>
                  <p className="mt-1 text-sm text-slate-500">Điền thông tin trong 1 phút. Cán bộ tuyển sinh sẽ liên hệ hỗ trợ hồ sơ trong ngày.</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="application-full-name" className={labelClass}>
                      Họ và tên thí sinh <span className="text-red-500">*</span>
                    </label>
                    <input id="application-full-name" type="text" name="fullName" required minLength={2} autoComplete="name" placeholder="Ví dụ: Nguyễn Văn An" className={inputClass} />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="application-phone" className={labelClass}>
                        Số điện thoại / Zalo <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="application-phone"
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="Ví dụ: 0912345678"
                        value={phoneValue}
                        aria-invalid={Boolean(phoneError)}
                        aria-describedby={phoneError ? 'application-phone-error' : undefined}
                        onChange={(event) => {
                          const value = event.currentTarget.value.trim();
                          setPhoneValue(event.currentTarget.value);
                          setPhoneError(value.length >= 10 && !PHONE_PATTERN.test(value) ? 'Số điện thoại cần có 10 số, bắt đầu bằng 0 hoặc +84.' : '');
                        }}
                        onBlur={() => {
                          const value = phoneValue.trim();
                          setPhoneError(value && !PHONE_PATTERN.test(value) ? 'Vui lòng nhập số điện thoại Việt Nam hợp lệ.' : '');
                        }}
                        className={inputClass}
                      />
                      {phoneError && (
                        <p id="application-phone-error" role="alert" className="mt-1.5 text-sm font-semibold text-rose-700">
                          {phoneError}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="application-parent-name" className={labelClass}>Họ tên phụ huynh (không bắt buộc)</label>
                      <input id="application-parent-name" type="text" name="parentName" placeholder="Ví dụ: Nguyễn Văn Nam" className={inputClass} />
                    </div>
                  </div>

                  <div role="radiogroup" aria-labelledby="application-pathway-label">
                    <p id="application-pathway-label" className={labelClass}>
                      Đối tượng xét tuyển <span className="text-red-500">*</span>
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {pathways.map((pathway, index) => (
                        <label
                          key={pathway.value}
                          className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-slate-200 bg-white p-3.5 hover:border-[#0F5587] has-[:checked]:border-[#F58232] has-[:checked]:bg-orange-50/40"
                        >
                          <input type="radio" name="educationLevel" value={pathway.value} required defaultChecked={index === 0} className="mt-1" />
                          <span className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-[#0F5587]">{pathway.title}</span>
                            <span className="text-xs leading-relaxed text-slate-500">{pathway.detail}</span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="application-primary-major" className={labelClass}>
                      Ngành đào tạo mong muốn <span className="text-red-500">*</span>
                    </label>
                    <select id="application-primary-major" name="major" required defaultValue="" className={`${inputClass} cursor-pointer`}>
                      <option value="" disabled>-- Chọn 1 trong 6 ngành --</option>
                      {admissionMajors.map((major, index) => (
                        <option key={major} value={major}>
                          {String(index + 1).padStart(2, '0')}. {major}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-slate-500">Được chuyển đổi ngành miễn phí trong 30 ngày đầu sau khi nhập học.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="application-province" className={labelClass}>
                        Khu vực sinh sống hiện tại <span className="text-red-500">*</span>
                      </label>
                      <input id="application-province" type="text" name="province" required placeholder="Ví dụ: TP. Hồ Chí Minh" className={inputClass} />
                    </div>
                    <div>
                      <span className={labelClass}>Nhu cầu ký túc xá</span>
                      <label className="flex h-[46px] cursor-pointer items-center gap-2.5 rounded-lg border border-slate-300 bg-slate-50 px-3 hover:bg-white">
                        <input type="checkbox" name="dormitory" className="h-4 w-4 rounded border-slate-300" />
                        <span className="text-sm text-slate-700">Đăng ký giữ chỗ ký túc xá</span>
                      </label>
                    </div>
                  </div>

                  <div role="radiogroup" aria-labelledby="application-campus-label">
                    <p id="application-campus-label" className={labelClass}>Cơ sở học thuận tiện</p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {schoolContact.campuses.map((campus, index) => (
                        <label
                          key={campus.value}
                          className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-slate-200 bg-white p-3.5 hover:border-[#0F5587] has-[:checked]:border-[#0F5587] has-[:checked]:bg-[#e3efff]"
                        >
                          <input type="radio" name="campus" value={campus.value} defaultChecked={index === 0} className="mt-1" />
                          <span className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-[#0F5587]">{campus.name}</span>
                            <span className="text-xs leading-relaxed text-slate-500">{campus.address}</span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between text-sm font-bold text-[#0F5587]">
                      Thêm thông tin (không bắt buộc)
                      <Icon name="chevron_right" className="text-[20px] transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="application-email" className={labelClass}>Email</label>
                        <input id="application-email" type="email" name="email" autoComplete="email" placeholder="example@gmail.com" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="application-parent-phone" className={labelClass}>Số điện thoại phụ huynh</label>
                        <input id="application-parent-phone" type="tel" name="parentPhone" autoComplete="tel" inputMode="tel" placeholder="Ví dụ: 0912345678" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="application-school-name" className={labelClass}>Trường THCS / THPT đã học</label>
                        <input id="application-school-name" type="text" name="schoolName" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="application-secondary-major" className={labelClass}>Ngành dự phòng</label>
                        <select id="application-secondary-major" name="secondaryMajor" defaultValue="" className={inputClass}>
                          <option value="">Không chọn</option>
                          {admissionMajors.map((major) => (
                            <option key={major} value={major}>{major}</option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="application-address" className={labelClass}>Địa chỉ thường trú</label>
                        <input id="application-address" type="text" name="address" autoComplete="street-address" className={inputClass} />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="application-id-card" className={labelClass}>Số CCCD</label>
                        <input id="application-id-card" type="text" name="idCard" placeholder="Nhập nếu đã có" className={inputClass} />
                      </div>
                    </div>
                  </details>

                  <input type="hidden" name="source" value="page_dang_ky_truc_tuyen" />

                  <label className="flex cursor-pointer items-start gap-2.5">
                    <input type="checkbox" name="consent" required defaultChecked className="mt-0.5 h-4 w-4 rounded border-slate-300" />
                    <span className="text-xs leading-normal text-slate-600">
                      Tôi đồng ý để Ban tuyển sinh Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) liên hệ hướng dẫn lộ trình học tập và thủ tục hồ sơ qua số điện thoại/Zalo đã cung cấp.
                    </span>
                  </label>

                  {formMsg && (
                    <div
                      role={isSuccess ? 'status' : 'alert'}
                      aria-live="polite"
                      className={`rounded-lg border p-3.5 text-sm font-semibold ${isSuccess ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-rose-200 bg-rose-50 text-rose-800'}`}
                    >
                      {formMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#F58232] px-6 py-4 font-bold uppercase tracking-wide text-white shadow-md hover:brightness-105 disabled:opacity-60"
                  >
                    {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi hồ sơ xét tuyển ngay'}
                  </button>

                  <p className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-500">
                    <Icon name="lock" className="text-[15px]" />
                    Cam kết bảo mật thông tin cá nhân theo quy định pháp luật.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
