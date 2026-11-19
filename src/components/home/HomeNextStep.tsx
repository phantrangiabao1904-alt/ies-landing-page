import CTAGroup from '@/components/ui/CTAGroup';
import SectionTitle from '@/components/ui/SectionTitle';
import { schoolContact } from '@/lib/school-info';

export default function HomeNextStep() {
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL;

  return (
    <section className="home-next-step">
      <div className="mx-auto max-w-[1080px] px-margin-sm py-space-2xl md:px-margin">
        <SectionTitle
          eyebrow="Chọn con đường phù hợp với bạn"
          title="Bạn quyết định nhịp độ tiếp theo"
          description="Có thể hỏi trước, nhận tư vấn hoặc gửi thông tin xét tuyển ban đầu."
        />
        <CTAGroup
          className="mt-8 justify-center"
          items={[
            { label: 'Gọi hotline', href: schoolContact.phoneNumbers[0].href, variant: 'quiet' },
            ...(zaloUrl
              ? [{ label: 'Chat Zalo', href: zaloUrl, variant: 'secondary' as const, external: true }]
              : []),
            { label: 'Nhận tư vấn', href: '/dang-ky', variant: 'secondary' },
            { label: 'Đăng ký xét tuyển', href: '/dang-ky', variant: 'primary' },
          ]}
        />
        {!zaloUrl && (
          <p className="mt-4 text-center text-sm text-white/75">Đường dẫn chat Zalo: [CẦN BỔ SUNG]</p>
        )}
      </div>
    </section>
  );
}
