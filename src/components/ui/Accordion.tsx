import type { ReactNode } from 'react';
import Icon from '@/components/ui/Icon';

export interface AccordionItem {
  question: string;
  answer: ReactNode;
}

export default function Accordion({
  items,
  className = '',
}: {
  items: AccordionItem[];
  className?: string;
}) {
  return (
    <div className={`experience-accordion ${className}`.trim()}>
      {items.map((item) => (
        <details key={item.question} className="experience-accordion__item">
          <summary className="experience-accordion__summary">
            <span>{item.question}</span>
            <Icon name="add" className="experience-accordion__icon" />
          </summary>
          <div className="experience-accordion__answer">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
