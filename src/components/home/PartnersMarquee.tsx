'use client';

import Icon from '@/components/ui/Icon';
import { useInView } from '@/hooks/useInView';

const partnerRows = [
  [
    { name: 'FPT Software', className: 'partner-wordmark--fpt' },
    { name: 'VIETTEL', className: 'partner-wordmark--viettel' },
    { name: 'HPT Vietnam', className: 'partner-wordmark--hpt' },
    { name: 'VNPT Group', className: 'partner-wordmark--vnpt' },
  ],
  [
    { name: 'Sacombank', className: 'partner-wordmark--sacombank' },
    { name: 'MWG Tech', className: 'partner-wordmark--mwg' },
    { name: 'VNG Corporation', className: 'partner-wordmark--vng' },
  ],
] as const;

export default function PartnersMarquee() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      aria-label="Doanh nghiệp tiêu biểu trong các lĩnh vực đào tạo"
      className="w-full overflow-hidden bg-surface-container-low py-space-lg"
    >
      <div
        ref={ref}
        data-motion-in-view={isInView}
        className="mx-auto flex max-w-[1240px] flex-col gap-space-sm px-margin-sm md:px-margin"
      >
        <div className="flex items-center gap-space-xs font-label-md text-label-md font-semibold uppercase tracking-wider text-on-surface-variant">
          <Icon name="handshake" className="text-[20px] text-primary" />
          <span>Doanh nghiệp tiêu biểu trong các lĩnh vực đào tạo:</span>
        </div>

        {partnerRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="partners-marquee"
            data-direction={rowIndex === 0 ? 'left' : 'right'}
          >
            <div className="partners-marquee__viewport">
              <div className="partners-marquee__track">
                {[false, true].map((duplicate) => (
                  <div
                    key={duplicate ? 'duplicate' : 'primary'}
                    aria-hidden={duplicate || undefined}
                    className="partners-marquee__group"
                  >
                    {row.map((partner) => (
                      <span
                        key={partner.name}
                        className={`partner-wordmark ${partner.className}`}
                      >
                        {partner.name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
