function renderWords(text: string, startIndex: number) {
  const words = text.split(' ');

  return words.map((word, index) => (
    <span
      key={`${startIndex}-${index}`}
      className="hero-title-word"
      style={{
        animationDelay: `${(startIndex + index) * 60}ms`,
        marginInlineEnd: index < words.length - 1 ? '0.2em' : undefined,
      }}
    >
      {word}
    </span>
  ));
}

export default function HeroTitle() {
  return (
    <h1
      aria-label="Trường Trung cấp Tin học Kinh tế Sài Gòn IES — Hỗ trợ học phí nghề theo chính sách hiện hành"
      className="font-headline-lg text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
    >
      <span aria-hidden="true">
        {renderWords('TRƯỜNG TRUNG CẤP', 0)}
        <br className="hidden sm:inline" />
        <span className="text-[#7AA2F7]">{renderWords('TIN HỌC KINH TẾ', 2)}</span>
        {' '}
        {renderWords('SÀI GÒN (IES)', 5)}
      </span>
      <span aria-hidden="true" className="hero-tuition-line mt-2 block text-[#E0AF68]">
        {renderWords('HỖ TRỢ HỌC PHÍ NGHỀ', 8)}
      </span>
    </h1>
  );
}
