import { decree24DocumentUrl, decree81SearchUrl } from '@/lib/school-info';

export default function PolicyDisclosure({ className = '' }: { className?: string }) {
  return (
    <div
      className={`policy-disclosure flex flex-wrap items-center gap-x-3 gap-y-1 text-xs leading-relaxed text-on-surface-variant ${className}`.trim()}
    >
      <p>Áp dụng theo điều kiện và quy định hiện hành.</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        <a
          href={decree81SearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Nghị định 81/2021/NĐ-CP
        </a>
        <a
          href={decree24DocumentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Nghị định 24/2022/NĐ-CP
        </a>
      </div>
    </div>
  );
}
