'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  Building,
  Globe2,
  Play,
  ExternalLink,
} from 'lucide-react';

export default function PortalPartnersAndVideo() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const domesticPartners = [
    { name: 'UBND Thành Phố Hồ Chí Minh', role: 'Cơ quan chủ quản', url: 'https://hochiminhcity.gov.vn/' },
    { name: 'Sở Lao Động - Thương Binh & Xã Hội TP.HCM', role: 'Chỉ đạo chuyên môn', url: 'http://sldtbxh.hochiminhcity.gov.vn/' },
    { name: 'Tổng Cục Giáo Dục Nghề Nghiệp', role: 'Quản lý hệ thống GDNN', url: 'http://gdnn.gov.vn/' },
    { name: 'Bộ Giáo Dục và Đào Tạo', role: 'Chương trình văn hóa THPT', url: 'http://moet.gov.vn/' },
    { name: 'Đại Học Công Nghiệp TP.HCM (IUH)', role: 'Đối tác liên thông', url: 'https://iuh.edu.vn/' },
    { name: 'Đại Học Sư Phạm Kỹ Thuật TP.HCM', role: 'Đối tác liên thông', url: 'https://hcmute.edu.vn/' },
    { name: 'Công Ty Cổ Phần MISA', role: 'Hợp tác đào tạo phần mềm kế toán', url: 'https://www.misa.vn/' },
  ];

  const enterprisePartners = [
    { name: 'Cisco Networking Academy', badge: 'Chứng chỉ quốc tế', desc: 'Chuyển giao giáo trình mạng & bảo mật' },
    { name: 'Microsoft Imagine Academy', badge: 'Công nghệ điện toán mây', desc: 'Tài trợ bản quyền và chứng chỉ MOS' },
    { name: 'FPT Software & FPT Telecom', badge: 'Tuyển dụng trực tiếp', desc: 'Đón nhận thực tập sinh CNTT hàng năm' },
    { name: 'Tập Đoàn Bưu Chính Viễn Thông VNPT', badge: 'Hạ tầng số', desc: 'Hợp tác chuyển đổi số và dữ liệu lớn' },
    { name: 'Shopee & TikTok Shop Academy', badge: 'Thương mại điện tử', desc: 'Đào tạo thực chiến kinh doanh số' },
    { name: 'Công Ty Cổ Phần Phần Mềm FAST', badge: 'Giải pháp ERP', desc: 'Thực hành kế toán quản trị doanh nghiệp' },
  ];

  return (
    <section id="hop-tac" className="py-12 bg-white border-b border-[#D9E2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* CỘT 1: ĐỐI TÁC LIÊN KẾT TRONG NƯỚC */}
          <div className="bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-[#0F5587]">
                <Building className="w-5 h-5 text-[#0F5587]" />
                <h3 className="font-black text-sm sm:text-base text-[#0F5587] uppercase tracking-wide">
                  Đối Tác Liên Kết
                </h3>
              </div>

              <div className="space-y-2.5">
                {domesticPartners.slice(0, 6).map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 bg-white rounded-xl border border-[#D9E2EA] hover:border-[#0F5587] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-[#263849] group-hover:text-[#0F5587] transition-colors truncate">
                        {item.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#5D6B78] group-hover:text-[#0F5587] flex-shrink-0 ml-2" />
                    </div>
                    <span className="text-[11px] text-[#5D6B78] block mt-0.5">
                      {item.role}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-2">
              <span className="text-[11px] text-[#5D6B78] text-center block">
                Liên kết đào tạo & cấp bằng giá trị quốc gia
              </span>
            </div>
          </div>

          {/* CỘT 2: DOANH NGHIỆP CÔNG NGHỆ & ĐỐI TÁC */}
          <div className="bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-[#3764AF]">
                <Globe2 className="w-5 h-5 text-[#3764AF]" />
                <h3 className="font-black text-sm sm:text-base text-[#0F5587] uppercase tracking-wide">
                  Hợp Tác Doanh Nghiệp
                </h3>
              </div>

              <div className="space-y-2.5">
                {enterprisePartners.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-white rounded-xl border border-[#D9E2EA] hover:border-[#3764AF] transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-[#263849] group-hover:text-[#3764AF] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[10px] font-black uppercase text-[#F58232] bg-[#F6EEE5] px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5D6B78] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-2 text-center">
              <a
                href="#hop-tac"
                className="text-xs font-bold text-[#3764AF] hover:text-[#0F5587] transition-colors"
              >
                Hơn 200+ đối tác tuyển dụng IES →
              </a>
            </div>
          </div>

          {/* CỘT 3: VIDEO GIỚI THIỆU TRƯỜNG */}
          <div className="bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-[#F58232]">
                <Play className="w-5 h-5 text-[#F58232]" />
                <h3 className="font-black text-sm sm:text-base text-[#0F5587] uppercase tracking-wide">
                  Video Phóng Sự IES
                </h3>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#D9E2EA] group">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80"
                  alt="Video Giới thiệu trường IES"
                  width={600}
                  height={240}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4">
                  <span className="self-start text-[10px] font-black uppercase bg-[#F58232] text-white px-2.5 py-1 rounded-md shadow-sm">
                    PHÓNG SỰ TRUYỀN HÌNH
                  </span>

                  <div>
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      aria-label="Xem video"
                      className="w-14 h-14 rounded-full bg-white/90 hover:bg-[#F58232] text-[#0F5587] hover:text-white flex items-center justify-center mx-auto mb-3 transition-all transform hover:scale-110 shadow-lg cursor-pointer"
                    >
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </button>
                    <p className="text-white text-xs font-bold text-center drop-shadow-md">
                      Môi trường học tập thực hành công nghệ chuẩn doanh nghiệp tại IES
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#5D6B78] mt-3 leading-relaxed">
                Khám phá hệ thống phòng máy tính cấu hình cao, xưởng thực hành đa phương tiện và đời sống sinh viên sôi nổi tại Trường Trung cấp Tin học Kinh tế Sài Gòn.
              </p>
            </div>

            <div className="pt-4 mt-2">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#0F5587] text-[#0F5587] hover:text-white border border-[#D9E2EA] hover:border-[#0F5587] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Xem video giới thiệu đầy đủ</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-rose-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>
            <div className="p-4 bg-[#0F5587] text-white">
              <h4 className="font-bold text-sm uppercase">
                Phóng sự: Trường Trung cấp Tin học Kinh tế Sài Gòn (IES)
              </h4>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="IES Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
