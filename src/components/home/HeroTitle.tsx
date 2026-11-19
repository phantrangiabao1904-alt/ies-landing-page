function renderWords(text: string, startIndex: number) {
  const words = text.split(' ');

  return words.map((word, index) => (
    <span
      key={`${startIndex}-${index}`}
      className="hero-title-word"
      style={{
        animationDelay: `${(startIndex + index) * 36}ms`,
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
      aria-label="Trường Trung cấp Tin học Kinh tế Sài Gòn IES — Miễn 100% học phí nghề theo điều kiện và quy định hiện hành"
      className="font-headline-lg text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
    >
      <span aria-hidden="true">
        {renderWords('TRƯỜNG TRUNG CẤP', 0)}
        <br className="hidden sm:inline" />
        <span className="text-[#7AA2F7]">{renderWords('TIN HỌC KINH TẾ', 2)}</span>
        {' '}
        {renderWords('SÀI GÒN (IES)', 5)}
      </span>
      <span
        aria-hidden="true"
        className="hero-tuition-line mt-3 inline-block max-w-full rounded-xl border border-[#F58232]/60 bg-[#F58232] px-3 py-2 text-2xl leading-[1.15] text-white shadow-lg sm:px-4 sm:text-3xl"
      >
        {renderWords('MIỄN 100% HỌC PHÍ NGHỀ', 8)}
      </span>
    </h1>
  );
}
