import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

export default function MobileContactBar() {
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL;

  return (
    <nav className="mobile-contact-bar" aria-label="Liên hệ và đăng ký nhanh">
      <a href={schoolContact.phoneNumbers[0].href} aria-label={`Gọi ${schoolContact.phoneNumbers[0].number}`}>
        <Icon name="call" className="text-[20px]" />
        <span>Gọi</span>
      </a>
      {zaloUrl ? (
        <a href={zaloUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat với IES qua Zalo">
          <Icon name="chat" className="text-[20px]" />
          <span>Zalo</span>
        </a>
      ) : (
        <span className="mobile-contact-bar__missing" title="Cần bổ sung đường dẫn Zalo">Zalo*</span>
      )}
      <Link href="/dang-ky" className="mobile-contact-bar__primary">
        Đăng ký
      </Link>
    </nav>
  );
}
