'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type MajorId =
  | 'course-it'
  | 'course-design'
  | 'course-network'
  | 'course-accounting'
  | 'course-business'
  | 'course-ecommerce';

interface QuizOption {
  label: string;
  major: MajorId;
}

interface QuizQuestion {
  prompt: string;
  options: readonly QuizOption[];
}

const majorDetails: Record<MajorId, { name: string; svg: string; image: string }> = {
  'course-it': {
    name: 'Công nghệ thông tin',
    svg: '/images/majors/cong-nghe-thong-tin.svg',
    image: '/images/majors/information-technology.png',
  },
  'course-design': {
    name: 'Thiết kế đồ họa',
    svg: '/images/majors/thiet-ke-do-hoa.svg',
    image: '/images/majors/graphic-design.png',
  },
  'course-network': {
    name: 'Quản trị mạng',
    svg: '/images/majors/quan-tri-mang.svg',
    image: '/images/majors/network-administration.png',
  },
  'course-accounting': {
    name: 'Kế toán',
    svg: '/images/majors/ke-toan.svg',
    image: '/images/majors/accounting.png',
  },
  'course-business': {
    name: 'Quản trị kinh doanh',
    svg: '/images/majors/quan-tri-kinh-doanh.svg',
    image: '/images/majors/business-administration.png',
  },
  'course-ecommerce': {
    name: 'Thương mại điện tử',
    svg: '/images/majors/thuong-mai-dien-tu.svg',
    image: '/images/majors/ecommerce.png',
  },
};

const questions: readonly QuizQuestion[] = [
  {
    prompt: 'Bạn thích bắt đầu một dự án bằng việc gì?',
    options: [
      { label: 'Tìm hiểu cách máy tính và phần mềm hoạt động', major: 'course-it' },
      { label: 'Phác thảo ý tưởng bằng hình ảnh và màu sắc', major: 'course-design' },
      { label: 'Kết nối thiết bị để mọi thứ vận hành ổn định', major: 'course-network' },
      { label: 'Sắp xếp số liệu cho rõ ràng, chính xác', major: 'course-accounting' },
      { label: 'Lên kế hoạch để cả nhóm cùng thực hiện', major: 'course-business' },
      { label: 'Nghĩ cách giới thiệu sản phẩm trên mạng', major: 'course-ecommerce' },
    ],
  },
  {
    prompt: 'Hoạt động nào khiến bạn thấy hào hứng nhất?',
    options: [
      { label: 'Tìm cách giải quyết một vấn đề bằng công nghệ', major: 'course-it' },
      { label: 'Tạo poster, hình ảnh hoặc video bắt mắt', major: 'course-design' },
      { label: 'Khám phá cách Internet và mạng máy tính kết nối', major: 'course-network' },
      { label: 'Theo dõi thu chi và tìm điểm chưa hợp lý', major: 'course-accounting' },
      { label: 'Thuyết phục và phối hợp mọi người trong nhóm', major: 'course-business' },
      { label: 'Bán hàng, sáng tạo nội dung trên nền tảng số', major: 'course-ecommerce' },
    ],
  },
  {
    prompt: 'Nếu được chọn một sản phẩm để tự tay làm, bạn chọn gì?',
    options: [
      { label: 'Một ứng dụng nhỏ giúp việc học thuận tiện hơn', major: 'course-it' },
      { label: 'Bộ nhận diện hình ảnh cho một thương hiệu', major: 'course-design' },
      { label: 'Một hệ thống Wi-Fi hoạt động tốt trong trường', major: 'course-network' },
      { label: 'Bảng theo dõi ngân sách cho một hoạt động', major: 'course-accounting' },
      { label: 'Kế hoạch vận hành cho một cửa hàng mới', major: 'course-business' },
      { label: 'Một gian hàng trực tuyến dễ tìm và dễ mua', major: 'course-ecommerce' },
    ],
  },
  {
    prompt: 'Trong một nhóm, bạn thường muốn đảm nhận vai trò nào?',
    options: [
      { label: 'Tìm công cụ và xử lý phần kỹ thuật', major: 'course-it' },
      { label: 'Làm cho phần trình bày sinh động hơn', major: 'course-design' },
      { label: 'Kiểm tra thiết bị và đường truyền', major: 'course-network' },
      { label: 'Ghi chép và kiểm tra các khoản chi', major: 'course-accounting' },
      { label: 'Chia việc và theo sát tiến độ', major: 'course-business' },
      { label: 'Quảng bá sản phẩm đến nhiều người hơn', major: 'course-ecommerce' },
    ],
  },
  {
    prompt: 'Bạn muốn phát triển kỹ năng nào trong thời gian tới?',
    options: [
      { label: 'Lập trình và tạo ra sản phẩm công nghệ', major: 'course-it' },
      { label: 'Thiết kế hình ảnh và truyền tải ý tưởng', major: 'course-design' },
      { label: 'Quản lý hệ thống máy tính và mạng', major: 'course-network' },
      { label: 'Phân tích số liệu và làm việc cẩn thận', major: 'course-accounting' },
      { label: 'Tổ chức công việc và quản lý kinh doanh', major: 'course-business' },
      { label: 'Kinh doanh và truyền thông trên nền tảng số', major: 'course-ecommerce' },
    ],
  },
];

export default function MajorQuiz() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [answers, setAnswers] = useState<(MajorId | null)[]>(
    () => Array.from({ length: questions.length }, () => null),
  );
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const [hasResult, setHasResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const recommendedMajor = useMemo(() => {
    const scores = new Map<MajorId, number>();
    answers.forEach((answer) => {
      if (answer) scores.set(answer, (scores.get(answer) ?? 0) + 1);
    });

    const maxScore = Math.max(0, ...scores.values());
    const tiedMajors = Array.from(scores.entries())
      .filter(([, score]) => score === maxScore)
      .map(([major]) => major);
    const lastAnswerInTie = [...answers].reverse().find(
      (answer): answer is MajorId => Boolean(answer && tiedMajors.includes(answer)),
    );

    return lastAnswerInTie ?? tiedMajors[0] ?? 'course-it';
  }, [answers]);

  const selectAnswer = (major: MajorId) => {
    setAnswers((current) => current.map((answer, index) => (index === step ? major : answer)));
    setDirection('next');

    if (step === questions.length - 1) {
      setHasResult(true);
      window.requestAnimationFrame(() => resultRef.current?.focus());
    } else {
      setStep((current) => current + 1);
    }
  };

  const goBack = () => {
    if (hasResult) {
      setHasResult(false);
      setDirection('previous');
      setStep(questions.length - 1);
      return;
    }

    if (step > 0) {
      setDirection('previous');
      setStep((current) => current - 1);
    }
  };

  const resetQuiz = () => {
    setAnswers(Array.from({ length: questions.length }, () => null));
    setStep(0);
    setHasResult(false);
    setDirection('next');
  };

  const result = majorDetails[recommendedMajor];
  const imageSrc =
    hasResult && isInView && !prefersReducedMotion ? result.svg : result.image;

  return (
    <section
      ref={ref}
      aria-labelledby="major-quiz-title"
      className="major-quiz-section w-full overflow-hidden bg-[#0E1830] py-space-2xl text-white"
      data-motion-in-view={isInView}
    >
      <div className="mx-auto max-w-[920px] px-margin-sm md:px-margin">
        <div className="mb-space-xl text-center">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#E0AF68]">
            <Icon name="stars" className="text-[20px]" />
            Khám phá sở thích
          </p>
          <h2
            id="major-quiz-title"
            className="font-headline-lg text-headline-lg font-bold text-white"
          >
            Ngành nào hợp với bạn?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/75">
            Trả lời 5 câu hỏi ngắn để nhận gợi ý ngành học theo sở thích của bạn.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm font-bold text-white/75" aria-live="polite">
              {hasResult ? 'Hoàn thành' : `Câu ${step + 1} / ${questions.length}`}
            </p>
            <div
              className="major-quiz-progress"
              role="progressbar"
              aria-label="Tiến độ câu hỏi"
              aria-valuemin={0}
              aria-valuemax={questions.length}
              aria-valuenow={hasResult ? questions.length : step}
            >
              <span
                className="major-quiz-progress__fill"
                style={{
                  transform: `scaleX(${hasResult ? 1 : step / questions.length})`,
                }}
              />
            </div>
          </div>

          {hasResult ? (
            <div
              key="result"
              ref={resultRef}
              tabIndex={-1}
              className="major-quiz-result grid items-center gap-6 outline-none sm:grid-cols-[180px_1fr]"
              data-direction={direction}
            >
              <Image
                src={imageSrc}
                alt={`Minh họa ngành ${result.name}`}
                width={180}
                height={180}
                unoptimized
                className="mx-auto h-40 w-40 rounded-2xl bg-[#1D2D4F] object-contain p-2 sm:h-44 sm:w-44"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[#9ECE6A]">
                  Gợi ý dành cho bạn
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  {result.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  Đây là gợi ý tham khảo dựa trên câu trả lời của bạn. Tìm hiểu thêm về ngành học
                  và trao đổi với Ban tư vấn để chọn lộ trình phù hợp.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/nganh-dao-tao"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 px-5 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white/10"
                  >
                    Tìm hiểu ngành học
                  </Link>
                  <a
                    href="#home-sticky-lead-form"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#F58232] px-5 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-[#df6f22]"
                  >
                    Đăng ký xét tuyển
                    <Icon name="arrow_forward" className="text-[18px]" />
                  </a>
                  <button
                    type="button"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl px-4 font-semibold text-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white"
                    onClick={resetQuiz}
                  >
                    Làm lại
                  </button>
                </div>
                <button
                  type="button"
                  className="mt-3 inline-flex min-h-11 items-center font-semibold text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white"
                  onClick={goBack}
                >
                  <Icon name="arrow_forward" className="mr-2 rotate-180 text-[18px]" />
                  Sửa câu trả lời cuối
                </button>
              </div>
            </div>
          ) : (
            <div
              key={step}
              className="major-quiz-question"
              data-direction={direction}
              aria-labelledby={`major-quiz-question-${step}`}
            >
              <h3
                id={`major-quiz-question-${step}`}
                className="mb-5 text-lg font-bold leading-snug text-white sm:text-xl"
              >
                {questions[step].prompt}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {questions[step].options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    aria-pressed={answers[step] === option.major}
                    className="major-quiz-option flex min-h-14 items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-left text-base font-semibold leading-snug text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E0AF68] hover:border-[#7AA2F7]/60 hover:bg-white/10"
                    onClick={() => selectAnswer(option.major)}
                  >
                    <span>{option.label}</span>
                    <Icon name="chevron_right" className="text-[20px] text-[#7AA2F7]" />
                  </button>
                ))}
              </div>
              <div className="mt-5 flex min-h-11 items-center justify-between">
                <button
                  type="button"
                  disabled={step === 0}
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white disabled:invisible"
                  onClick={goBack}
                >
                  <Icon name="arrow_forward" className="rotate-180 text-[18px]" />
                  Câu trước
                </button>
                <p className="text-xs text-white/55">Bài trắc nghiệm chỉ dùng tại trình duyệt này</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
