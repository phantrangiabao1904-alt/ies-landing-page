const FACEBOOK_URL = 'https://www.facebook.com/iescollege.edu.vn';

export default function FacebookFloatingButton() {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Truy cập fanpage Facebook của IES"
      title="Facebook IES"
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] shadow-lg transition hover:scale-105 hover:brightness-110 md:bottom-6 md:right-6"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-white">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    </a>
  );
}
