import Link from 'next/link';
import Accordion from '@/components/ui/Accordion';
import SectionTitle from '@/components/ui/SectionTitle';
import { decree24DocumentUrl, decree81SearchUrl } from '@/lib/school-info';

export default function HomeFAQs() {
  return (
    <section className="home-faq-section">
      <div className="mx-auto max-w-[900px] px-margin-sm py-space-2xl md:px-margin">
        <SectionTitle
          eyebrow="Hỏi trước khi đăng ký"
          title="Câu hỏi thường gặp"
          description="Thông tin tuyển sinh có thể khác theo hồ sơ; hãy xác nhận với Ban tư vấn trước khi quyết định."
        />
        <Accordion
          className="mt-8"
          items={[
            {
              question: 'Chính sách hỗ trợ học phí nghề áp dụng như thế nào?',
              answer: (
                <p>
                  Chính sách áp dụng theo đối tượng, điều kiện, hồ sơ và quy định hiện hành. Vui lòng
                  xem văn bản gốc và liên hệ Ban tư vấn để được xác nhận; quyền lợi không được bảo
                  đảm khi chưa xét hồ sơ.{' '}
                  <a href={decree81SearchUrl} target="_blank" rel="noopener noreferrer">Nghị định 81/2021/NĐ-CP</a>
                  {' · '}
                  <a href={decree24DocumentUrl} target="_blank" rel="noopener noreferrer">Nghị định 24/2022/NĐ-CP</a>
                </p>
              ),
            },
            {
              question: 'Hồ sơ đăng ký cần chuẩn bị những gì?',
              answer: (
                <p>
                  Tham khảo checklist tại trang tuyển sinh; danh sách cuối cùng cần được Ban tư vấn
                  xác nhận theo tình trạng hồ sơ của từng thí sinh.{' '}
                  <Link href="/tuyen-sinh#checklist-ho-so">Xem checklist hồ sơ</Link>.
                </p>
              ),
            },
            {
              question: 'IES xét tuyển học bạ THCS/THPT phải không?',
              answer: <p>Website IES hiện giới thiệu phương thức xét tuyển học bạ. Điều kiện cụ thể theo từng đối tượng: [CẦN XÁC NHẬN].</p>,
            },
            {
              question: 'Ký túc xá có điều kiện và chi phí như thế nào?',
              answer: <p>Thông tin về chỗ ở, khả năng tiếp nhận và chi phí: [CẦN XÁC NHẬN]. Vui lòng hỏi Ban tư vấn trước khi sắp xếp nơi ở.</p>,
            },
            {
              question: 'Thời gian học của từng lộ trình là bao lâu?',
              answer: (
                <p>
                  Thời lượng thay đổi theo chương trình và điểm xuất phát. Xem thông tin chương trình
                  hiện có và xác nhận lộ trình cụ thể với trường.{' '}
                  <Link href="/chuong-trinh-hoc">Tìm hiểu chương trình học</Link>.
                </p>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
