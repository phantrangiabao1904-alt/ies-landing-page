import Icon from '@/components/ui/Icon';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export const metadata = {
  title: 'Dành Cho Giảng Viên — Thư viện prompt GenAI | IES Saigon',
  description:
    'Thư viện prompt mẫu giúp giảng viên IES soạn hoạt động, giáo án và bài kiểm tra với GenAI. Nội dung do giảng viên kiểm duyệt trước khi sử dụng.',
};

const promptCategories = [
  {
    icon: 'menu_book',
    title: 'Soạn giáo án và hoạt động',
    description: 'Tạo khung bài học theo mục tiêu năng lực và thời lượng buổi thực hành.',
    prompt:
      'Bạn là giảng viên ngành [tên ngành] tại Trường Trung cấp Tin học Kinh tế Sài Gòn (IES). Hãy soạn kế hoạch bài học 90 phút cho học sinh [Hệ 9+ / Trung cấp chính quy] về chủ đề [chủ đề]. Gồm: mục tiêu năng lực, hoạt động khởi động, thực hành có hướng dẫn, bài tập nhóm và tiêu chí đánh giá.',
  },
  {
    icon: 'task_alt',
    title: 'Ra đề kiểm tra và rubric',
    description: 'Sinh câu hỏi theo mức độ nhận thức và tiêu chí chấm rõ ràng.',
    prompt:
      'Hãy ra 10 câu hỏi trắc nghiệm và 2 câu tự luận về [chủ đề] cho học sinh trung cấp. Phân bố: 4 câu nhận biết, 4 câu thông hiểu, 2 câu vận dụng. Kèm đáp án, giải thích ngắn và rubric chấm điểm 10 điểm.',
  },
  {
    icon: 'school',
    title: 'Hướng dẫn thực hành dự án',
    description: 'Chia nhiệm vụ dự án thật theo từng tuần, có checklist nộp bài.',
    prompt:
      'Thiết kế dự án thực hành 4 tuần cho nhóm 4 học sinh về [ví dụ: xây dựng website bán hàng nhỏ]. Mỗi tuần nêu mục tiêu, sản phẩm đầu ra, vai trò trong nhóm và câu hỏi phản biện giảng viên nên đặt ra.',
  },
  {
    icon: 'campaign',
    title: 'Tóm tắt cho phụ huynh',
    description: 'Viết lại nội dung chương trình bằng ngôn ngữ đơn giản, dễ hiểu.',
    prompt:
      'Viết bản tóm tắt một trang cho phụ huynh về ngành [tên ngành] tại IES. Dùng câu ngắn, tránh thuật ngữ hành chính. Nêu học gì, học bao lâu, sau khi học làm được việc gì. Không đưa ra cam kết về học phí hay việc làm.',
  },
] as const;

const guardrails = [
  'Kiểm tra mọi số liệu, chính sách và điều kiện trước khi đưa cho học sinh hoặc phụ huynh.',
  'Không nhập thông tin cá nhân của học sinh vào công cụ AI.',
  'Ghi nhận rõ nội dung do AI hỗ trợ soạn và người chịu trách nhiệm duyệt.',
  'Dùng AI để nháp và gợi ý, còn quyết định chuyên môn thuộc về giảng viên.',
] as const;

export default function GiangVienPage() {
  return (
    <div className="site-page vibe-site bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="w-full pt-28 flex-1">
        <nav aria-label="Breadcrumb" className="max-w-[1240px] mx-auto px-margin-sm md:px-margin py-space-sm flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Trang Chủ</Link>
          <Icon name="chevron_right" className="text-[14px] text-outline" />
          <span className="text-primary font-bold">Dành cho giảng viên</span>
        </nav>

        <section className="w-full bg-surface-container-low py-space-2xl">
          <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
            <span className="font-label-md text-label-md text-primary bg-surface-container px-space-sm py-1 rounded-lg uppercase tracking-wider font-bold">
              Thư viện prompt GenAI
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary mt-space-xs mb-space-sm font-bold max-w-3xl">
              Soạn giáo án, đề thi và hoạt động nhanh hơn với AI
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Các mẫu prompt dưới đây lấy cấu trúc từ thư viện prompt cho giáo viên của Google, đã điền sẵn bối cảnh IES. Thay phần trong ngoặc vuông trước khi dùng.
            </p>
          </div>
        </section>

        <section className="w-full bg-surface py-space-2xl">
          <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {promptCategories.map((item) => (
              <article key={item.title} className="bg-surface-container-lowest rounded-xl shadow-md p-space-xl border border-outline-variant/30 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <Icon name={item.icon} className="text-primary text-[24px]" />
                  <h2 className="font-headline-md text-headline-md text-primary font-bold">{item.title}</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
                <pre className="whitespace-pre-wrap font-code text-code text-on-surface bg-surface-container-low rounded-lg p-space-sm">{item.prompt}</pre>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-space-2xl">
          <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-space-md">Nguyên tắc sử dụng AI trong giảng dạy</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {guardrails.map((text) => (
                <li key={text} className="flex items-start gap-space-sm bg-surface-container-lowest p-space-md rounded-lg">
                  <Icon name="verified_user" className="text-primary text-[20px] mt-0.5" />
                  <span className="font-body-md text-body-md text-on-surface">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
