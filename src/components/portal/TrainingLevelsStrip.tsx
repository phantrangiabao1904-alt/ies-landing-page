'use client';

import React from 'react';
import {
  GraduationCap,
  Layers,
  Award,
  Handshake,
  ArrowRight,
} from 'lucide-react';

export default function TrainingLevelsStrip() {
  const levels = [
    {
      title: 'TRUNG CẤP 9+ (THCS)',
      subtitle: 'Miễn 100% Học Phí',
      desc: 'Mô hình 9+ vừa học văn hóa vừa học nghề, 18 tuổi nhận bằng Trung cấp chính quy.',
      badge: 'Chính sách vàng',
      icon: <GraduationCap className="w-6 h-6 text-[#F58232]" />,
      accentColor: 'border-[#F58232] hover:bg-[#F6EEE5]/40',
      badgeColor: 'bg-[#F58232] text-white',
      link: '#chinh-sach-hoc-phi',
    },
    {
      title: 'TRUNG CẤP LIÊN THÔNG',
      subtitle: 'Lên Cao Đẳng - Đại Học',
      desc: 'Rút ngắn thời gian đào tạo từ 1 - 1.5 năm, bằng cấp giá trị toàn quốc.',
      badge: 'Lộ trình tối ưu',
      icon: <Layers className="w-6 h-6 text-[#0F5587]" />,
      accentColor: 'border-[#0F5587] hover:bg-blue-50/50',
      badgeColor: 'bg-[#0F5587] text-white',
      link: '#he-dao-tao',
    },
    {
      title: 'TRUNG CẤP CHÍNH QUY',
      subtitle: 'Tốt Nghiệp THPT (Lớp 12)',
      desc: 'Thời gian 1.5 năm, tập trung 70% thực hành nghề, doanh nghiệp săn đón ngay.',
      badge: 'Đi làm sớm',
      icon: <Award className="w-6 h-6 text-[#3764AF]" />,
      accentColor: 'border-[#3764AF] hover:bg-indigo-50/40',
      badgeColor: 'bg-[#3764AF] text-white',
      link: '#nganh-dao-tao',
    },
    {
      title: 'LIÊN KẾT ĐÀO TẠO',
      subtitle: 'Chứng Chỉ Nghề Doanh Nghiệp',
      desc: 'Đào tạo theo đơn đặt hàng, bồi dưỡng kỹ năng tin học, thiết kế, chuyển giao công nghệ.',
      badge: 'Chuẩn quốc tế',
      icon: <Handshake className="w-6 h-6 text-[#2DBEDC]" />,
      accentColor: 'border-[#2DBEDC] hover:bg-cyan-50/40',
      badgeColor: 'bg-[#2DBEDC] text-[#0F5587] font-black',
      link: '#hop-tac',
    },
  ];

  return (
    <section id="he-dao-tao" className="py-8 bg-white border-b border-[#D9E2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {levels.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className={`group relative bg-[#F5F8FA] rounded-2xl p-5 sm:p-6 border-2 border-[#D9E2EA] ${item.accentColor} transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#D9E2EA] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-black text-sm sm:text-base text-[#0F5587] group-hover:text-[#3764AF] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#F58232] mt-0.5">
                  {item.subtitle}
                </p>
                <p className="text-xs text-[#5D6B78] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D9E2EA]/80 flex items-center justify-between text-xs font-bold text-[#0F5587] group-hover:text-[#F58232] transition-colors">
                <span>Xem chi tiết</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
