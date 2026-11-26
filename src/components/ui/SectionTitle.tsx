import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  level?: 1 | 2 | 3;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  level = 2,
  className = '',
}: SectionTitleProps) {
  const Heading = `h${level}` as const;

  return (
    <div className={`experience-section-title experience-section-title--${align} ${className}`.trim()}>
      {eyebrow && <p className="experience-section-title__eyebrow">{eyebrow}</p>}
      <Heading className="experience-section-title__heading">{title}</Heading>
      {description && <div className="experience-section-title__description">{description}</div>}
    </div>
  );
}
