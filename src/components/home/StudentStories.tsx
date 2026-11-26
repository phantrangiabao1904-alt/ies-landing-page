import Image from 'next/image';
import Carousel from '@/components/ui/Carousel';
import SectionTitle from '@/components/ui/SectionTitle';

const learningMoments = [
  {
    role: 'Thực hành nghề',
    title: 'Học trên thiết bị và bài tập thực tế',
    description: 'Không gian thực hành giúp học viên làm quen quy trình, công cụ và bài tập của chuyên ngành.',
    src: '/images/ies-computer-practice.png',
  },
  {
    role: 'Hoạt động tập thể',
    title: 'Rèn kỹ năng cùng giảng viên và bạn học',
    description: 'Các hoạt động nhóm hỗ trợ rèn thói quen hợp tác, giao tiếp và giải quyết bài tập.',
    src: '/images/ies-student-event.png',
  },
  {
    role: 'Thành tựu học tập',
    title: 'Ghi nhận nỗ lực qua từng cột mốc',
    description: 'Hoạt động khen thưởng và định hướng nghề giúp học viên có thêm động lực hoàn thành lộ trình.',
    src: '/images/ies-student-awards.png',
  },
] as const;

const learningMomentSlides = learningMoments.map((moment) => (
  <article className="student-story-placeholder" key={moment.role}>
    <div className="student-story-placeholder__photo relative overflow-hidden">
      <Image src={moment.src} alt="" fill sizes="(max-width: 900px) 80vw, 720px" className="object-contain" />
    </div>
    <p className="student-story-placeholder__eyebrow">{moment.role}</p>
    <h3>{moment.title}</h3>
    <p>{moment.description}</p>
  </article>
));

export default function StudentStories() {
  return (
    <section className="student-stories-section">
      <div className="mx-auto max-w-[900px] px-margin-sm py-space-2xl md:px-margin">
        <SectionTitle
          eyebrow="Đời sống học tập tại IES"
          title="Câu chuyện học tập"
          description="Nét sinh động từ phòng học, hoạt động tập thể và ghi nhận thành tích của cộng đồng IES."
        />
        <div className="mt-8">
          <Carousel slides={learningMomentSlides} label="Hoạt động học tập IES" autoPlay />
        </div>
      </div>
    </section>
  );
}
