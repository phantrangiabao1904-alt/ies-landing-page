import React from 'react';

interface IESLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'icon';
  theme?: 'color' | 'white';
}

/**
 * IES Official Brand Logo Component
 * Dựa trên Bộ Quy Chuẩn Thương Hiệu IES (Brand Guidelines v1.0)
 * Màu sắc: Deep Blue (#0F5587), Academic Blue (#3764AF), Sky Cyan (#2DBEDC), Learning Orange (#F58232)
 */
export default function IESLogo({
  className = '',
  variant = 'horizontal',
  theme = 'color',
}: IESLogoProps) {
  const isWhite = theme === 'white';

  const iesColor = isWhite ? '#FFFFFF' : '#0F5587';
  const orangeColor = isWhite ? '#FFFFFF' : '#F58232';
  const cyanColor = isWhite ? '#FFFFFF' : '#2DBEDC';
  const blueColor = isWhite ? '#FFFFFF' : '#3764AF';

  // Biểu tượng Quyển sách mở đặc trưng của IES
  const BookEmblem = (
    <svg
      viewBox="0 0 160 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Chữ IES ở đỉnh */}
      <text
        x="80"
        y="30"
        textAnchor="middle"
        fontSize="34"
        fontWeight="900"
        fill={iesColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="2"
      >
        IES
      </text>

      {/* Đường cong cam phía trên (Năng lượng tích cực) */}
      <path
        d="M20 44 C 50 34, 75 42, 80 46 C 85 42, 110 34, 140 44"
        stroke={orangeColor}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Đường cong Sky Cyan ở giữa (Công nghệ & tương lai) */}
      <path
        d="M24 57 C 52 47, 75 55, 80 59 C 85 55, 108 47, 136 57"
        stroke={cyanColor}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Đường cong Academic Blue bên dưới (Nền tảng tri thức vững chắc) */}
      <path
        d="M28 70 C 54 60, 75 68, 80 72 C 85 68, 106 60, 132 70"
        stroke={blueColor}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`w-12 h-10 ${className}`}>{BookEmblem}</div>;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="w-28 h-16">{BookEmblem}</div>
        <div className="mt-2">
          <p
            className={`text-sm font-black tracking-tight uppercase leading-snug ${
              isWhite ? 'text-white' : 'text-[#0F5587]'
            }`}
          >
            Trường Trung Cấp Tin Học Kinh Tế Sài Gòn
          </p>
        </div>
      </div>
    );
  }

  // Variant "horizontal" mặc định dùng cho Header & Navigation
  return (
    <div className={`flex w-full min-w-0 items-center gap-2 ${className}`}>
      <div className="w-12 h-9 shrink-0">{BookEmblem}</div>
      <div
        className={`flex min-w-0 flex-col text-[8px] font-black uppercase leading-[1.15] tracking-[-0.02em] sm:text-[8px] md:text-[9px] ${
          isWhite ? 'text-white' : 'text-[#0F5587]'
        }`}
      >
        <span className="sm:hidden">
          <span className="block">TRƯỜNG TRUNG CẤP</span>
          <span className="block">TIN HỌC KINH TẾ</span>
          <span className="block">SÀI GÒN</span>
        </span>
        <span className="hidden sm:block">
          <span className="block">TRƯỜNG TRUNG CẤP</span>
          <span className="block">TIN HỌC KINH TẾ SÀI GÒN</span>
        </span>
      </div>
    </div>
  );
}
