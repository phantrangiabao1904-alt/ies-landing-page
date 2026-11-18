'use client';

import Icon from '@/components/ui/Icon';

const actions = [
  {
    label: 'Zalo',
    href: process.env.NEXT_PUBLIC_ZALO_URL,
    icon: 'call',
    className: 'floating-contact-action--zalo',
  },
  {
    label: 'Messenger',
    href: process.env.NEXT_PUBLIC_MESSENGER_URL,
    icon: 'contact_support',
    className: 'floating-contact-action--messenger',
  },
] as const;

export default function FloatingContactActions() {
  const availableActions = actions.filter((action) => Boolean(action.href));
  if (availableActions.length === 0) return null;

  return (
    <nav aria-label="Liên hệ nhanh" className="floating-contact-actions">
      {availableActions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Liên hệ với IES qua ${action.label}`}
          className={`floating-contact-action ${action.className}`}
        >
          <Icon name={action.icon} className="text-[22px]" />
          <span className="sr-only">{action.label}</span>
        </a>
      ))}
    </nav>
  );
}
