'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { getHomepageCmsContent } from '@/actions/cms-content';
import { DEFAULT_CMS_CONTENT, type CmsContentItem } from '@/lib/cms/content';
import Reveal from '@/components/home/Reveal';
import { useInView } from '@/hooks/useInView';
import { useIsTouch } from '@/hooks/useIsTouch';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type MajorFilter = 'all' | 'technology' | 'economy';

const courseIllustrations: Record<string, { svg: string; static: string }> = {
  'course-it': {
    svg: '/images/majors/cong-nghe-thong-tin.svg',
    static: '/images/majors/information-technology.png',
  },
  'course-design': {
    svg: '/images/majors/thiet-ke-do-hoa.svg',
    static: '/images/majors/graphic-design.png',
  },
  'course-network': {
    svg: '/images/majors/quan-tri-mang.svg',
    static: '/images/majors/network-administration.png',
  },
  'course-accounting': {
    svg: '/images/majors/ke-toan.svg',
    static: '/images/majors/accounting.png',
  },
  'course-business': {
    svg: '/images/majors/quan-tri-kinh-doanh.svg',
    static: '/images/majors/business-administration.png',
  },
  'course-ecommerce': {
    svg: '/images/majors/thuong-mai-dien-tu.svg',
    static: '/images/majors/ecommerce.png',
  },
};

const technologyCourseIds = new Set(['course-it', 'course-design', 'course-network']);
const economyCourseIds = new Set([
  'course-accounting',
  'course-business',
  'course-ecommerce',
]);

const filters: { id: MajorFilter; label: string }[] = [
  { id: 'all', label: 'Tất cả ngành' },
  { id: 'technology', label: 'Công nghệ' },
  { id: 'economy', label: 'Kinh tế' },
];

function CourseCard({ item, index }: { item: CmsContentItem; index: number }) {
  const { ref, isInView } = useInView<HTMLElement>({
    rootMargin: '80px',
    threshold: 0.1,
  });
  const isTouch = useIsTouch();
  const prefersReducedMotion = usePrefersReducedMotion();
  const tiltFrame = useRef<number | null>(null);
  const illustration = courseIllustrations[item.id];
  const imageSrc =
    illustration && isInView && !prefersReducedMotion ? illustration.svg : illustration?.static;
  const canTilt =
    !isTouch &&
    !prefersReducedMotion &&
    typeof navigator !== 'undefined' &&
    navigator.hardwareConcurrency >= 6;

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!canTilt || event.pointerType !== 'mouse' || tiltFrame.current !== null) return;

    const target = event.currentTarget;
    const clientX = event.clientX;
    const clientY = event.clientY;
    tiltFrame.current = window.requestAnimationFrame(() => {
      tiltFrame.current = null;
      if (!target.isConnected) return;

      const rect = target.getBoundingClientRect();
      const horizontal = (clientX - rect.left) / rect.width - 0.5;
      const vertical = (clientY - rect.top) / rect.height - 0.5;
      target.style.setProperty('--tilt-x', `${vertical * -7}deg`);
      target.style.setProperty('--tilt-y', `${horizontal * 7}deg`);
      target.dataset.tilting = 'true';
    });
  };

  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    if (tiltFrame.current !== null) {
      window.cancelAnimationFrame(tiltFrame.current);
      tiltFrame.current = null;
    }

    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
    delete event.currentTarget.dataset.tilting;
  };

  return (
    <Reveal
      variant="up"
      delayMs={index * 80}
      className="home-major-reveal"
    >
      <article
        ref={ref}
        className="site-card home-major-card flex min-h-56 flex-col rounded-2xl border border-slate-200 border-t-4 border-t-[#F58232] bg-white p-5 shadow-sm"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        onPointerCancel={resetTilt}
      >
        <div className="flex items-center gap-3">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={`Minh họa ngành ${item.title}`}
              width={120}
              height={120}
              unoptimized
              className="h-16 w-16 shrink-0 rounded-xl bg-[#0E1830] object-contain p-1"
            />
          )}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#F58232]">
              Ngành đào tạo
            </p>
            <h3 className="mt-1 text-lg font-extrabold text-[#0F5587]">{item.title}</h3>
          </div>
        </div>
        <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">{item.body}</p>
        <Link
          href="/nganh-dao-tao"
          className="mt-4 inline-flex min-h-11 items-center font-bold text-[#0F5587] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:underline"
        >
          Xem ngành học <span aria-hidden="true" className="ml-1">→</span>
        </Link>
      </article>
    </Reveal>
  );
}

export default function HomeCmsSection() {
  const [items, setItems] = useState(DEFAULT_CMS_CONTENT.filter((item) => item.is_active));
  const [activeFilter, setActiveFilter] = useState<MajorFilter>('all');

  useEffect(() => {
    getHomepageCmsContent()
      .then(setItems)
      .catch((error: unknown) => {
        console.error('Unable to refresh published homepage content:', error);
      });
  }, []);

  const promoBanner = items.find((item) => item.kind === 'banner');
  const courses = items.filter((item) => {
    if (item.kind !== 'course') return false;
    if (activeFilter === 'technology') return technologyCourseIds.has(item.id);
    if (activeFilter === 'economy') return economyCourseIds.has(item.id);
    return true;
  });

  return (
    <section
      aria-label="Ưu đãi và ngành đào tạo nổi bật"
      className="w-full bg-surface-container-lowest py-space-xl"
    >
      <div className="mx-auto max-w-[1240px] px-margin-sm md:px-margin">
        {promoBanner && (
          <Reveal variant="up" className="mb-5">
            <article className="site-card home-hover-card flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#0F5587] p-6 text-white shadow-lg sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#FFC18F]">
                  Ưu đãi tuyển sinh IES
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
                  {promoBanner.title}
                </h2>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-white/90">
                  {promoBanner.body}
                </p>
              </div>
              <Link
                href="/dang-ky"
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-[#F58232] px-5 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-[#df6f22]"
              >
                Nhận tư vấn
              </Link>
            </article>
          </Reveal>
        )}

        <div
          role="group"
          aria-label="Lọc ngành đào tạo"
          className="mb-5 flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                activeFilter === filter.id
                  ? 'border-[#0F5587] bg-[#0F5587] text-white'
                  : 'border-[#D9E2EA] bg-white text-[#0F5587]'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div
          id="home-major-results"
          aria-live="polite"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {courses.map((item, index) => (
            <CourseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
