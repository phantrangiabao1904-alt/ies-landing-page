'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import SectionTitle from '@/components/ui/SectionTitle';
import { admissionMajors } from '@/lib/majors';

const majorVisuals = [
  { interest: 'Công nghệ và lập trình', image: '/images/majors/cong-nghe-thong-tin.svg' },
  { interest: 'Thiết kế và sáng tạo', image: '/images/majors/thiet-ke-do-hoa.svg' },
  { interest: 'Máy tính và hệ thống mạng', image: '/images/majors/quan-tri-mang.svg' },
  { interest: 'Con số và sự chính xác', image: '/images/majors/ke-toan.svg' },
  { interest: 'Tổ chức và vận hành kinh doanh', image: '/images/majors/quan-tri-kinh-doanh.svg' },
  { interest: 'Bán hàng trên nền tảng số', image: '/images/majors/thuong-mai-dien-tu.svg' },
] as const;

export default function MajorFinder() {
  const [selectedMajor, setSelectedMajor] = useState<(typeof admissionMajors)[number] | null>(null);
  const selectedIndex = selectedMajor ? admissionMajors.indexOf(selectedMajor) : -1;

  return (
    <section className="major-finder-section" aria-labelledby="major-finder-title">
      <div className="mx-auto max-w-[1240px] px-margin-sm py-space-xl md:px-margin">
        <SectionTitle
          eyebrow="Bắt đầu từ điều bạn thích"
          title="Tìm ngành phù hợp với mình"
          description="Chọn một sở thích để xem ngành học tham khảo; kết quả không thay thế tư vấn hướng nghiệp."
        />
        <div className="major-finder-grid" role="group" aria-label="Chọn sở thích">
          {majorVisuals.map((visual, index) => {
            const major = admissionMajors[index];
            const isSelected = selectedMajor === major;
            return (
              <button
                key={major}
                type="button"
                aria-pressed={isSelected}
                className="major-finder-option"
                onClick={() => setSelectedMajor(isSelected ? null : major)}
              >
                <Image src={visual.image} alt="" width={40} height={40} />
                <span>{visual.interest}</span>
                <Icon name={isSelected ? 'check_circle' : 'arrow_forward'} className="text-[18px]" />
              </button>
            );
          })}
        </div>
        {selectedMajor && selectedIndex >= 0 && (
          <div className="major-finder-result" aria-live="polite">
            <div className="major-finder-result__visual">
              <Image
                src={majorVisuals[selectedIndex].image}
                alt=""
                width={64}
                height={64}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold uppercase tracking-wide text-[#3764AF]">Gợi ý tham khảo</p>
              <h3 className="mt-1 text-xl font-extrabold text-[#0F5587]">{selectedMajor}</h3>
            </div>
            <Link
              href={`/dang-ky?major=${encodeURIComponent(selectedMajor)}#application-primary-major`}
              className="major-finder-result__cta"
            >
              Đăng ký ngành này <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        )}
        <p className="mt-5 text-center text-sm text-[#5D6B78]">
          Chưa chắc mình hợp ngành nào?
          {' '}
          <a href="#major-quiz" className="font-bold text-[#0F5587] underline underline-offset-2">
            Làm trắc nghiệm 5 câu
          </a>
        </p>
      </div>
    </section>
  );
}
