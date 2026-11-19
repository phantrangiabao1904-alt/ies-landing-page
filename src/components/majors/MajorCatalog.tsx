'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export interface Major {
  id: string;
  code: string;
  title: string;
  enTitle: string;
  desc: string;
  skills: string[];
  salary: string;
  img: string;
  category: 'cong-nghe' | 'kinh-te';
}

const filters = [
  { value: 'all', label: 'Tất cả ngành' },
  { value: 'cong-nghe', label: 'Công nghệ' },
  { value: 'kinh-te', label: 'Kinh tế' },
] as const;

export default function MajorCatalog({ majors }: { majors: Major[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]['value']>('all');
  const [query, setQuery] = useState('');
  const visibleMajors = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('vi-VN');
    return majors.filter((major) => {
      const matchesCategory = activeFilter === 'all' || major.category === activeFilter;
      const searchableText = [major.title, major.desc, ...major.skills]
        .join(' ')
        .toLocaleLowerCase('vi-VN');
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeFilter, majors, query]);

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl" aria-labelledby="major-catalog-title">
      <div className="mx-auto max-w-[1240px] px-margin-sm md:px-margin">
        <div className="mb-space-xl flex flex-col gap-space-md md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-1 block font-label-md text-label-md font-bold uppercase tracking-wider text-primary">
              CHƯƠNG TRÌNH ĐÀO TẠO TIÊN TIẾN CHUẨN NGHỀ
            </span>
            <h2 id="major-catalog-title" className="font-display text-display-sm font-bold text-primary">
              Danh Mục 06 Chuyên Ngành Trọng Điểm
            </h2>
          </div>
          <p className="max-w-md font-body-md text-on-surface-variant">
            Chọn lĩnh vực hoặc nhập từ khóa để tìm hiểu các ngành đào tạo.
          </p>
        </div>

        <label className="major-search">
          <Icon name="search" className="text-[20px] text-primary" />
          <span className="sr-only">Tìm ngành đào tạo</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            placeholder="Tìm theo tên ngành hoặc kỹ năng"
          />
        </label>

        <div role="group" aria-label="Lọc theo lĩnh vực" className="my-5 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={activeFilter === filter.value}
              className="major-filter-chip"
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">Có {visibleMajors.length} ngành phù hợp</p>
        {visibleMajors.length > 0 ? (
          <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-3">
            {visibleMajors.map((major) => (
              <article key={major.id} className="major-catalog-card">
                <div className="major-catalog-card__image">
                  <Image
                    src={major.img}
                    alt={`Minh họa ngành ${major.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                  <span>{major.code} · NGÀNH {major.id}</span>
                </div>
                <div className="flex flex-1 flex-col p-space-lg">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">{major.enTitle}</p>
                  <h3 className="mt-1 text-xl font-extrabold leading-snug text-primary">{major.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-on-surface-variant">{major.desc}</p>
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Kỹ năng được giới thiệu</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {major.skills.map((skill) => <span className="major-skill-chip" key={skill}>{skill}</span>)}
                    </div>
                  </div>
                  <p className="mt-4 rounded-lg bg-[#F5F8FA] p-3 text-xs leading-relaxed text-[#5D6B78]">
                    Thời lượng và đầu ra theo từng ngành: [CẦN XÁC NHẬN]
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-[#F58232]/20 bg-[#F6EEE5]/60 p-3">
                    <span className="text-xs font-bold text-on-surface">Thu nhập tham khảo:</span>
                    <span className="text-sm font-bold text-[#A84300]">{major.salary}</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link href="/chuong-trinh-hoc" className="major-catalog-card__secondary">Xem chương trình</Link>
                    <Link
                      href={`/dang-ky?major=${encodeURIComponent(major.title)}#application-primary-major`}
                      className="major-catalog-card__primary"
                    >
                      Đăng ký ngành này
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-[#D9E2EA] bg-white p-6 text-center text-[#5D6B78]">
            Chưa tìm thấy ngành phù hợp. Hãy thử từ khóa khác hoặc xóa bộ lọc.
          </p>
        )}

        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-extrabold text-primary">So sánh nhanh các ngành</h3>
          <div className="major-comparison-scroll">
            <table className="major-comparison-table">
              <thead>
                <tr><th>Ngành</th><th>Lĩnh vực</th><th>Kỹ năng tiêu biểu</th><th>Đầu ra</th></tr>
              </thead>
              <tbody>
                {majors.map((major) => (
                  <tr key={major.id}>
                    <th scope="row">{major.title}</th>
                    <td>{major.category === 'cong-nghe' ? 'Công nghệ' : 'Kinh tế'}</td>
                    <td>{major.skills.slice(0, 2).join(' · ')}</td>
                    <td>[CẦN XÁC NHẬN]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
