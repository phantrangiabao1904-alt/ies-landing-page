import Link from 'next/link';

export interface CTAItem {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'quiet';
  external?: boolean;
}

export default function CTAGroup({
  items,
  className = '',
}: {
  items: CTAItem[];
  className?: string;
}) {
  return (
    <div className={`experience-cta-group ${className}`.trim()}>
      {items.map((item) => {
        const className = `experience-cta experience-cta--${item.variant ?? 'secondary'}`;
        return item.external ? (
          <a
            key={`${item.href}-${item.label}`}
            href={item.href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ) : (
          <Link key={`${item.href}-${item.label}`} href={item.href} className={className}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
