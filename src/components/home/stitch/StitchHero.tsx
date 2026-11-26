import Image from 'next/image';
import Icon from '@/components/ui/Icon';

const chips = [
  { icon: 'verified', label: 'Xét tuyển học bạ' },
  { icon: 'payments', label: 'Hỗ trợ học phí NĐ 81' },
  { icon: 'school', label: 'Song bằng Trung cấp & THPT' },
] as const;

export default function StitchHero() {
  return (
    <section className="w-full border-b border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-[3px] w-8 rounded-full bg-[#F58232]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F5587]">Tuyển sinh 2026</span>
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-[#0F5587] sm:text-4xl lg:text-[44px]">
            Học nghề sớm, vững sự nghiệp mai sau
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Thực hành thiết bị thật, thầy cô kèm cặp, cam kết việc làm sau tốt nghiệp.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold text-[#0F5587]"
              >
                <Icon name={chip.icon} className="text-[18px] text-[#3764AF]" />
                {chip.label}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#dang-ky"
              className="inline-flex min-h-12 items-center rounded-full bg-[#F58232] px-7 font-semibold text-white shadow-md hover:brightness-105"
            >
              Đăng ký ngay
            </a>
            <a
              href="#nganh-dao-tao"
              className="inline-flex min-h-12 items-center rounded-full border-2 border-[#0F5587]/40 px-6 font-semibold text-[#0F5587] hover:bg-sky-50"
            >
              Xem 6 ngành học
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-[28px] bg-[#F6EEE5]" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-xl">
            <Image
              src="/images/stitch/stitch-01.jpg"
              alt="Sinh viên IES thực hành chuyên sâu"
              fill
              priority
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-md backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F5587] text-white">
                  <Icon name="precision_manufacturing" className="text-[20px]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">70% thời lượng thực hành xưởng</p>
                  <p className="text-xs text-slate-600">Phòng Lab & thiết bị chuẩn doanh nghiệp</p>
                </div>
              </div>
              <span className="hidden rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-[#0F5587] sm:inline-block">
                Khóa 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
