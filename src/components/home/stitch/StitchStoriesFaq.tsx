import Image from 'next/image';
import Icon from '@/components/ui/Icon';

const interests = [
  { icon: 'code', title: 'Lập trình & Công nghệ', desc: 'Thích logic & máy tính' },
  { icon: 'palette', title: 'Sáng tạo & Mỹ thuật', desc: 'Đam mê vẽ & mỹ thuật số' },
  { icon: 'security', title: 'Bảo mật & Hệ thống', desc: 'Thích bảo mật & phần cứng' },
  { icon: 'calculate', title: 'Tài chính & Kế toán', desc: 'Yêu thích con số & tài chính' },
  { icon: 'groups', title: 'Quản trị & Điều hành', desc: 'Thích giao tiếp & quản lý' },
  { icon: 'storefront', title: 'Bán hàng & E-commerce', desc: 'Mê bán lẻ & kinh doanh online' },
] as const;

const stories = [
  {
    name: 'Lê Hoàng Phúc (18 tuổi)',
    major: 'Ngành TMĐT',
    quote: 'Em được thực chiến kinh doanh ngay kỳ đầu, hiện tự tin làm chủ shop online doanh số đều.',
    image: '/images/stitch/stitch-09.jpg',
  },
  {
    name: 'Trần Thu Hà (20 tuổi)',
    major: 'Thiết kế Đồ họa',
    quote: 'Được thầy cô kèm sát đồ án thực tế, bộ portfolio tốt nghiệp giúp em trúng tuyển agency ngay.',
    image: '/images/stitch/stitch-10.jpg',
  },
  {
    name: 'Nguyễn Minh Khôi (19 tuổi)',
    major: 'Ngành CNTT',
    quote: 'Vừa có bằng THPT vừa có bằng nghề, kỳ thực tập em được doanh nghiệp giữ lại làm chính thức.',
    image: '/images/stitch/stitch-11.jpg',
  },
];

const faqs = [
  {
    q: '1. Học sinh tốt nghiệp THCS có đăng ký được không?',
    a: 'Được. Trường xét tuyển bằng học bạ THCS (không thi tuyển áp lực) và nhận hồ sơ liên tục.',
  },
  {
    q: '2. Thời gian đào tạo bao lâu thì ra trường?',
    a: 'Chỉ 1.5 - 2 năm để lấy bằng Trung cấp chính quy, hoặc 3 năm với hệ song bằng THPT.',
  },
  {
    q: '3. Học xong nhận bằng gì? Có học tiếp lên được không?',
    a: 'Nhận bằng Trung cấp chính quy và bằng THPT quốc gia, liên thông thẳng Cao đẳng, Đại học.',
  },
  {
    q: '4. Học phí và chính sách hỗ trợ theo Nghị định 81 ra sao?',
    a: 'Học sinh tốt nghiệp THCS được Nhà nước cấp bù học phí nghề theo NĐ 81/2021/NĐ-CP.',
  },
];

export default function StitchStoriesFaq() {
  return (
    <>
      <section id="dinh-huong-nganh" className="bg-[#0F5587] py-20 text-white" aria-labelledby="dinh-huong-tieu-de">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
          <div>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ACEDFF]">Định hướng bản thân</span>
              <h2 id="dinh-huong-tieu-de" className="mt-2 text-3xl font-extrabold">
                Ngành nào hợp với bạn?
              </h2>
              <p className="mt-2 text-white/85">Chọn sở thích nổi bật của bạn để định hướng ngành nghề chính xác nhất.</p>
            </div>
            <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {interests.map((item) => (
                <li
                  key={item.title}
                  className="flex cursor-pointer items-center gap-4 rounded-xl border border-white/20 bg-white/10 p-5 transition-colors hover:bg-white/20"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#003D66] text-[#ACEDFF]">
                    <Icon name={item.icon} className="text-[24px]" />
                  </span>
                  <div>
                    <p className="text-lg font-bold">{item.title}</p>
                    <p className="text-sm text-white/85">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/20 pt-12">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold">Trải nghiệm thực tế & Câu chuyện học sinh</h3>
                <p className="text-sm text-white/75">Học nghề từ lớp 9 – Tự tin lập nghiệp ở tuổi 18, 19</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#ACEDFF]">
                Người thật · Việc thật
              </span>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {stories.map((story) => (
                <figure key={story.name} className="overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                  <div className="relative aspect-[4/3]">
                    <Image src={story.image} alt={story.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="flex flex-col gap-2 p-5">
                    <p className="italic leading-relaxed text-white/95">“{story.quote}”</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold">{story.name}</span>
                      <span className="text-[#ACEDFF]">{story.major}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6EEE5] py-20" aria-labelledby="faq-tieu-de">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Hỏi đáp tuyển sinh</span>
          <h2 id="faq-tieu-de" className="mt-2 text-3xl font-extrabold text-[#0F5587]">
            Câu hỏi thường gặp
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0F5587]">
                  {faq.q}
                  <Icon name="expand_more" className="shrink-0 text-[22px] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
