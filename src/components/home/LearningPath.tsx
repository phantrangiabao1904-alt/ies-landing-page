'use client';

import Icon from '@/components/ui/Icon';
import Reveal from '@/components/home/Reveal';
import ScrollTimeline from '@/components/home/ScrollTimeline';

const steps = [
  { title: 'Nhập học', icon: 'school' },
  { title: 'Học văn hóa + nghề', icon: 'menu_book' },
  { title: 'Thực tập', icon: 'work' },
  { title: 'Việc làm', icon: 'flag' },
] as const;

export default function LearningPath() {
  return (
    <section
      aria-labelledby="home-learning-path-title"
      className="home-learning-path w-full bg-[#0E1830] py-space-2xl text-white"
    >
      <div className="mx-auto max-w-[1240px] px-margin-sm md:px-margin">
        <Reveal variant="up" className="mb-space-xl text-center">
          <h2
            id="home-learning-path-title"
            className="font-headline-lg text-headline-lg font-bold text-white"
          >
            Lộ trình học
          </h2>
        </Reveal>

        <ScrollTimeline className="scroll-timeline--steps grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-space-lg">
          {steps.map((step, index) => (
            <article
              key={step.title}
              data-timeline-step
              className="scroll-timeline__step flex min-h-28 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="timeline-step-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7AA2F7]/15 text-[#7AA2F7]">
                <Icon name={step.icon} className="text-[24px]" />
              </span>
              <h3 className="text-base font-bold leading-snug sm:text-lg">{step.title}</h3>
            </article>
          ))}
        </ScrollTimeline>
      </div>
    </section>
  );
}
