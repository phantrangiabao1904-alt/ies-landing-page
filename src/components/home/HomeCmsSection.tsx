'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getHomepageCmsContent } from '@/actions/cms-content';
import { DEFAULT_CMS_CONTENT, type CmsContentItem } from '@/lib/cms/content';

export default function HomeCmsSection() {
  const [items, setItems] = useState(DEFAULT_CMS_CONTENT.filter((item) => item.is_active));

  useEffect(() => {
    getHomepageCmsContent()
      .then(setItems)
      .catch((error: unknown) => {
        console.error('Unable to refresh published homepage content:', error);
      });
  }, []);

  return (
    <section
      aria-label="Ưu đãi và ngành đào tạo nổi bật"
      className="w-full bg-surface-container-lowest py-space-xl"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4 px-margin-sm sm:grid-cols-2 md:grid-cols-3 md:px-margin">
        {items.map((item: CmsContentItem) =>
          item.kind === 'banner' ? (
            <article
              key={item.id}
              className="col-span-full flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#0F5587] p-6 text-white shadow-lg sm:flex-row sm:items-center sm:p-8"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#FFC18F]">
                  Ưu đãi tuyển sinh IES
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-2 max-w-3xl leading-relaxed text-white/90">{item.body}</p>
              </div>
              <Link
                href="/dang-ky"
                className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-[#F58232] px-5 font-bold text-white transition-colors hover:bg-[#df6f22]"
              >
                Nhận tư vấn
              </Link>
            </article>
          ) : (
            <article
              key={item.id}
              className="flex min-h-48 flex-col rounded-xl border border-slate-200 border-t-4 border-t-[#F58232] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0F5587]/30 hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#F58232]">
                Ngành đào tạo
              </p>
              <h3 className="mt-2 text-lg font-extrabold text-[#0F5587]">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
              <Link
                href="/nganh-dao-tao"
                className="mt-4 inline-flex min-h-[44px] items-center font-bold text-[#0F5587] hover:underline"
              >
                Xem ngành học <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
