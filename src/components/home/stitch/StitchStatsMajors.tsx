import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const stats = [
  { value: '10+', label: 'Năm đào tạo', note: 'Kinh nghiệm thực tiễn vững vàng', accent: false },
  { value: '5.000+', label: 'Học viên', note: 'Tốt nghiệp vững tay nghề lập nghiệp', accent: false },
  { value: '50+', label: 'Doanh nghiệp đối tác', note: 'Đồng hành thực tập và tuyển dụng', accent: false },
  { value: '92%', label: 'Có việc làm sau 6 tháng', note: 'Theo khảo sát tốt nghiệp chính thức', accent: true },
];

const partners = [
  { name: 'TechNova', icon: 'memory' },
  { name: 'Saigon Digital', icon: 'language' },
  { name: 'Minh Phát', icon: 'storefront' },
  { name: 'An Khang', icon: 'account_balance' },
  { name: 'Lạc Việt', icon: 'local_shipping' },
  { name: 'BlueWave', icon: 'hub' },
] as const;

const majors = [
  {
    name: '1. Công nghệ thông tin',
    icon: 'terminal',
    desc: 'Lập trình ứng dụng, phát triển phần mềm và xây dựng website thực chiến.',
    image: '/images/stitch/stitch-02.jpg',
  },
  {
    name: '2. Thiết kế đồ họa',
    icon: 'palette',
    desc: 'Sáng tạo ấn phẩm truyền thông, đồ họa quảng cáo và thiết kế UI/UX.',
    image: '/images/stitch/stitch-03.jpg',
  },
  {
    name: '3. Quản trị mạng & An ninh mạng',
    icon: 'dns',
    desc: 'Vận hành hệ thống máy chủ, đám mây và bảo vệ an ninh mạng.',
    image: '/images/stitch/stitch-04.jpg',
  },
  {
    name: '4. Kế toán doanh nghiệp số',
    icon: 'receipt_long',
    desc: 'Thành thạo chứng từ kế toán, kê khai thuế số và phần mềm MISA.',
    image: '/images/stitch/stitch-05.jpg',
  },
  {
    name: '5. Quản trị kinh doanh & Dịch vụ',
    icon: 'business_center',
    desc: 'Kỹ năng quản lý bán hàng, dịch vụ khách hàng và điều hành dự án.',
    image: '/images/stitch/stitch-06.jpg',
  },
  {
    name: '6. Thương mại điện tử',
    icon: 'shopping_cart',
    desc: 'Kinh doanh online, livestream bán hàng và vận hành sàn Shopee, TikTok.',
    image: '/images/stitch/stitch-07.jpg',
  },
] as const;

export default function StitchStatsMajors() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 py-14" aria-label="Số liệu nổi bật">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <dt className="sr-only">{stat.label}</dt>
                <dd className={`text-4xl font-extrabold leading-none ${stat.accent ? 'text-[#3764AF]' : 'text-[#0F5587]'}`}>
                  {stat.value}
                </dd>
                <span className="font-bold text-slate-900">{stat.label}</span>
                <span className="text-sm text-slate-600">{stat.note}</span>
              </div>
            ))}
          </dl>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-500">
              Doanh nghiệp đối tác tuyển dụng tiêu biểu
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {partners.map((partner) => (
                <li key={partner.name} className="flex items-center justify-center gap-2 text-lg font-bold text-[#0F5587]">
                  <Icon name={partner.icon} className="text-[22px]" />
                  {partner.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="nganh-dao-tao" className="border-b border-slate-200 bg-white py-20" aria-labelledby="nganh-tieu-de">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Chương trình đào tạo</span>
              <h2 id="nganh-tieu-de" className="mt-2 text-3xl font-extrabold text-[#0F5587]">
                6 Ngành học thực tiễn, đón đầu xu hướng
              </h2>
            </div>
            <p className="max-w-md text-slate-600">Chương trình đào tạo tinh gọn, 70% thực hành bám sát doanh nghiệp.</p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {majors.map((major) => (
              <li
                key={major.name}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <Image
                    src={major.image}
                    alt={major.name}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-3 p-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon name={major.icon} className="text-[22px] text-[#0F5587]" />
                      <h3 className="font-bold text-[#0F5587]">{major.name}</h3>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{major.desc}</p>
                  </div>
                  <Link
                    href="#dang-ky"
                    className="flex items-center gap-1 border-t border-slate-200 pt-3 text-sm font-semibold text-[#3764AF]"
                  >
                    Xem chi tiết <Icon name="arrow_forward" className="text-[18px]" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
