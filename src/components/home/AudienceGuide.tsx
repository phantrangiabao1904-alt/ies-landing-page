'use client';

import Link from 'next/link';
import Tabs from '@/components/ui/Tabs';
import SectionTitle from '@/components/ui/SectionTitle';

const audienceItems = [
  {
    label: 'Học sinh THCS',
    content: (
      <>
        <h3>Bạn cần chuẩn bị gì?</h3>
        <ul>
          <li>Thông tin học bạ hoặc tình trạng tốt nghiệp THCS.</li>
          <li>Ngành bạn đang quan tâm; có thể để Ban tư vấn hỗ trợ định hướng.</li>
          <li>Trao đổi điều kiện và lộ trình học phù hợp với hồ sơ.</li>
        </ul>
        <Link href="/tuyen-sinh#checklist-ho-so">Xem hướng dẫn hồ sơ</Link>
      </>
    ),
  },
  {
    label: 'Phụ huynh',
    content: (
      <>
        <h3>Cùng con chuẩn bị bước tiếp theo</h3>
        <ul>
          <li>Ghi lại câu hỏi về chương trình, thời gian học và cơ sở.</li>
          <li>Hỏi Ban tư vấn về điều kiện xét tuyển theo tình trạng học tập.</li>
          <li>Chính sách hỗ trợ học phí phụ thuộc điều kiện và hồ sơ áp dụng.</li>
        </ul>
        <Link href="/dang-ky">Nhận tư vấn cùng IES</Link>
      </>
    ),
  },
  {
    label: 'Học sinh ở xa',
    content: (
      <>
        <h3>Tìm hiểu kỹ trước khi chọn nơi học</h3>
        <ul>
          <li>Chia sẻ khu vực đang sinh sống để được tư vấn cơ sở phù hợp.</li>
          <li>Hỏi trực tiếp về khu vực chỗ ở, điều kiện tiếp nhận và chi phí trước khi sắp xếp.</li>
          <li>Trao đổi với gia đình trước khi sắp xếp đi lại hoặc chỗ ở.</li>
        </ul>
        <Link href="/dang-ky">Trao đổi với Ban tư vấn</Link>
      </>
    ),
  },
  {
    label: 'Cần hỗ trợ học phí',
    content: (
      <>
        <h3>Kiểm tra điều kiện theo hồ sơ cụ thể</h3>
        <ul>
          <li>Chuẩn bị thông tin học tập và giấy tờ liên quan để được hướng dẫn.</li>
          <li>IES tư vấn chính sách theo đối tượng, hồ sơ và quy định hiện hành.</li>
          <li>Không tự suy đoán quyền lợi trước khi hồ sơ được xác nhận.</li>
        </ul>
        <Link href="/tuyen-sinh#form-xet-tuyen">Hỏi về hồ sơ hỗ trợ học phí</Link>
      </>
    ),
  },
];

export default function AudienceGuide() {
  return (
    <section className="audience-guide-section">
      <div className="mx-auto max-w-[1100px] px-margin-sm py-space-2xl md:px-margin">
        <SectionTitle
          eyebrow="Thông tin theo nhu cầu"
          title="Bạn là ai trong hành trình này?"
          description="Chọn nhóm phù hợp để xem các bước nên tìm hiểu trước khi đăng ký."
        />
        <Tabs items={audienceItems} label="Chọn nhóm người dùng" className="mt-8" />
      </div>
    </section>
  );
}
