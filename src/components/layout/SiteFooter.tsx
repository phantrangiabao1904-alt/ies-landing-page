import Link from 'next/link';
import IESLogo from '@/components/brand/IESLogo';
import { schoolContact } from '@/lib/school-info';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#0F5587] text-white pt-16 pb-8">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/15">
          {/* Col 1: Logo + Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white/10 p-2 rounded-xl w-fit">
              <IESLogo variant="icon" theme="white" className="h-12 w-auto" />
            </div>
            <p className="font-['Inter',sans-serif] text-[13px] text-white/70 leading-relaxed">
              Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) — Đào tạo thực hành chuẩn nghề nghiệp,
              hỗ trợ thực hành nghề nghiệp và giới thiệu việc làm theo chính sách của trường.
            </p>
            <div className="flex items-center gap-1 text-[#acedff] font-['Montserrat',sans-serif] text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Chứng nhận kiểm định chất lượng giáo dục nghề nghiệp</span>
            </div>
          </div>

          {/* Col 2: Addresses */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="font-['Montserrat',sans-serif] text-[16px] text-white uppercase tracking-wider font-semibold">
              Hệ Thống Cơ Sở Đào Tạo
            </h3>
            <ul className="space-y-3 font-['Inter',sans-serif] text-[13px] text-white/70">
              {schoolContact.campuses.map((campus) => (
                <li key={campus.value} className="flex items-start gap-1">
                  <span className="material-symbols-outlined text-[#84aefe] mt-0.5 text-[18px]">location_on</span>
                  <span>{campus.name}: {campus.address}</span>
                </li>
              ))}
              <li className="flex items-start gap-1">
                <span className="material-symbols-outlined text-[#84aefe] mt-0.5 text-[18px]">call</span>
                <span className="flex flex-wrap gap-x-2">
                  <strong>Hotline Tuyển sinh:</strong>
                  {schoolContact.phoneNumbers.map((phone) => (
                    <a key={phone.number} href={phone.href} className="hover:text-white">
                      {phone.number}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-1">
                <span className="material-symbols-outlined text-[#84aefe] mt-0.5 text-[18px]">mail</span>
                <a href={`mailto:${schoolContact.email}`} className="hover:text-white">
                  Email tiếp nhận hồ sơ: {schoolContact.email}
                </a>
              </li>
              <li className="flex items-start gap-1">
                <span className="material-symbols-outlined text-[#84aefe] mt-0.5 text-[18px]">language</span>
                <a href={schoolContact.websiteUrl} className="hover:text-white">
                  Website: {schoolContact.website}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-['Montserrat',sans-serif] text-[16px] text-white uppercase tracking-wider font-semibold">
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-1 font-['Inter',sans-serif] text-[13px]">
              {[
                { label: 'Giới thiệu', href: '/gioi-thieu' },
                { label: 'Chương trình học', href: '/chuong-trinh-hoc' },
                { label: 'Ngành đào tạo', href: '/nganh-dao-tao' },
                { label: 'Thông tin tuyển sinh', href: '/tuyen-sinh' },
                { label: 'Đăng Ký', href: '/tuyen-sinh#form-xet-tuyen' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-['Montserrat',sans-serif] text-[12px] text-white/50 font-semibold">
          <p>© 2026 {schoolContact.name}. All rights reserved.</p>
          <p>Giấy phép hoạt động GDNN số 12/GCN-SLĐTBXH do Sở LĐ-TB&XH TP.HCM cấp.</p>
        </div>
        <p className="mt-4 text-center text-xs leading-relaxed text-white/60">
          Website ghi nhận lượt xem và tương tác ở dạng tổng hợp để cải thiện trải nghiệm; không lưu địa chỉ IP thô.
        </p>
      </div>
    </footer>
  );
}
