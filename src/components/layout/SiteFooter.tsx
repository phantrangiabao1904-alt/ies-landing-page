import Link from 'next/link';
import IESLogo from '@/components/brand/IESLogo';
import { schoolContact } from '@/lib/school-info';

const quickLinks = [
  { label: 'Chọn lộ trình', href: '/chuong-trinh-hoc' },
  { label: 'Ngành đào tạo', href: '/nganh-dao-tao' },
  { label: 'Học phí & chính sách', href: '/tuyen-sinh' },
  { label: 'Đời sống & thực tập', href: '/gioi-thieu' },
  { label: 'Đăng ký tư vấn', href: '/dang-ky' },
  { label: 'Dành cho giảng viên', href: '/giang-vien' },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#0B3F66] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-xl bg-white p-2">
            <IESLogo variant="icon" theme="white" className="h-10 w-auto" />
          </div>
          <p className="text-sm leading-relaxed text-white/75">{schoolContact.name}</p>
          <p className="text-sm text-white/75">Giấy phép hoạt động GDNN số 12/GCN-SLĐTBXH do Sở LĐ-TB&amp;XH TP.HCM cấp.</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/80">
          <h2 className="text-base font-bold text-white">Cơ sở đào tạo</h2>
          {schoolContact.campuses.map((campus) => (
            <p key={campus.value}>
              <strong className="text-white">{campus.name}:</strong> {campus.address}
            </p>
          ))}
          {schoolContact.phoneNumbers.map((phone) => (
            <a key={phone.number} href={phone.href} className="hover:text-white">
              Hotline: {phone.number}
            </a>
          ))}
          <a href={`mailto:${schoolContact.email}`} className="hover:text-white">
            {schoolContact.email}
          </a>
        </div>

        <nav aria-label="Liên kết nhanh" className="flex flex-col gap-3 text-sm">
          <h2 className="text-base font-bold text-white">Liên kết nhanh</h2>
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs leading-relaxed text-white/60 sm:px-6">
          © 2026 {schoolContact.name}. Website ghi nhận lượt xem và tương tác ở dạng tổng hợp; không lưu địa chỉ IP thô.
        </p>
      </div>
    </footer>
  );
}
