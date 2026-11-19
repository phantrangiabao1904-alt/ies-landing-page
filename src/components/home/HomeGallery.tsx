import Reveal from '@/components/home/Reveal';
import Lightbox from '@/components/ui/Lightbox';

const photos = [
  {
    src: '/images/ies-classroom-activities.png',
    alt: 'Học sinh tham gia hoạt động học tập trong lớp',
    aspectRatio: '4 / 3',
  },
  {
    src: '/images/ies-computer-practice.png',
    alt: 'Học sinh thực hành trên máy tính tại lớp',
    aspectRatio: '3 / 4',
  },
  {
    src: '/images/ies-classroom.jpg',
    alt: 'Không gian lớp học của Trường Trung cấp Tin học Kinh tế Sài Gòn',
    aspectRatio: '4 / 3',
  },
  {
    src: '/images/admissions-event-booth.jpg',
    alt: 'Khu vực tư vấn tuyển sinh của Trường Trung cấp Tin học Kinh tế Sài Gòn',
    aspectRatio: '3 / 4',
  },
  {
    src: '/images/school-outreach-event.jpg',
    alt: 'Hoạt động tư vấn tuyển sinh tại trường',
    aspectRatio: '4 / 3',
  },
] as const;

export default function HomeGallery() {
  return (
    <section aria-labelledby="home-gallery-title" className="w-full bg-white py-space-2xl">
      <div className="mx-auto max-w-[1240px] px-margin-sm md:px-margin">
        <Reveal variant="up" className="mb-space-xl text-center">
          <h2
            id="home-gallery-title"
            className="font-headline-lg text-headline-lg font-bold text-primary"
          >
            Không gian học tập và hoạt động
          </h2>
        </Reveal>
        <Lightbox images={[...photos]} label="Thư viện ảnh hoạt động tại IES" />
      </div>
    </section>
  );
}
