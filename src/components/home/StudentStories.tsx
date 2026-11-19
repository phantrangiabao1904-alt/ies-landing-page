import Carousel from '@/components/ui/Carousel';
import SectionTitle from '@/components/ui/SectionTitle';

const storyPlaceholders = ['Học sinh', 'Cựu học sinh', 'Phụ huynh'].map((role) => (
  <article className="student-story-placeholder" key={role}>
    <div className="student-story-placeholder__photo" aria-hidden="true">Ảnh thật [CẦN BỔ SUNG]</div>
    <p className="student-story-placeholder__eyebrow">{role} IES</p>
    <h3>[CẦN BỔ SUNG] Tên và ngành học</h3>
    <p>[CẦN BỔ SUNG] Chỉ đăng câu chia sẻ sau khi được xác minh và cho phép sử dụng.</p>
  </article>
));

export default function StudentStories() {
  return (
    <section className="student-stories-section">
      <div className="mx-auto max-w-[900px] px-margin-sm py-space-2xl md:px-margin">
        <SectionTitle
          eyebrow="Chia sẻ từ cộng đồng IES"
          title="Câu chuyện học tập"
          description="Nội dung thật sẽ được bổ sung sau khi có sự đồng ý của người chia sẻ."
        />
        <div className="mt-8">
          <Carousel slides={storyPlaceholders} label="Câu chuyện học sinh IES" autoPlay />
        </div>
      </div>
    </section>
  );
}
