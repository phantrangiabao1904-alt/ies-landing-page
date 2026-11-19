import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import SectionTitle from '@/components/ui/SectionTitle';
import { schoolContact } from '@/lib/school-info';

const campusImages = [
  {
    src: '/images/ies-classroom.jpg',
    alt: 'Không gian lớp học và trang thiết bị phục vụ đào tạo',
  },
  {
    src: '/images/ies-classroom-activities.png',
    alt: 'Hoạt động học tập và thực hành tại IES',
  },
] as const;

export default function CampusCards() {
  return (
    <section className="campus-cards-section">
      <div className="mx-auto max-w-[1240px] px-margin-sm py-space-2xl md:px-margin">
        <SectionTitle
          eyebrow="Ghé thăm IES"
          title="Một trường, hai cơ sở"
          description="Xem địa chỉ và gọi trước để được hướng dẫn lịch tư vấn hoặc tham quan."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {schoolContact.campuses.map((campus) => {
            const image = campus.value === 'pham-van-chieu' ? campusImages[0] : campusImages[1];
            return (
            <article key={campus.value} className="campus-card">
              <div className="campus-card__image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3>{campus.name}</h3>
                <p className="mt-2 text-[#5D6B78]">{campus.address}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    className="experience-cta experience-cta--primary"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="directions" className="text-[18px]" /> Chỉ đường
                  </a>
                  {schoolContact.phoneNumbers.map((phone) => (
                    <a key={phone.number} className="experience-cta experience-cta--secondary" href={phone.href}>
                      <Icon name="call" className="text-[18px]" /> Gọi {phone.number}
                    </a>
                  ))}
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
