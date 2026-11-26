'use client';

import React from 'react';
import IESLogo from '@/components/brand/IESLogo';
import { schoolContact } from '@/lib/school-info';
import {
  MapPin,
  Phone,
  Globe,
  Users,
  Activity, 
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

export default function PortalFooter() {
  return (
    <footer className="bg-[#0F5587] text-white pt-14 pb-8 border-t-4 border-[#F58232]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          
          {/* CỘT 1 & 2 (COL-MD-8): THÔNG TIN TRƯỜNG IES */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <IESLogo variant="horizontal" theme="white" className="max-w-[340px]" />
            </div>

            <h3 className="font-black text-base sm:text-lg text-white uppercase tracking-wider">
              <span className="text-cyan-200 text-lg sm:text-xl">
                TRƯỜNG TRUNG CẤP TIN HỌC KINH TẾ SÀI GÒN (IES)
              </span> 
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-100 pt-2">
              <div className="space-y-2.5">
                {schoolContact.campuses.map((campus) => (
                  <p key={campus.value} className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F58232] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{campus.name}:</strong> {campus.address}
                    </span>
                  </p>
                ))}
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#2DBEDC] flex-shrink-0" />
                  <a href={schoolContact.websiteUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    <strong>Website:</strong> {schoolContact.website}
                  </a>
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#F58232] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Hotline Tuyển sinh:</strong>{' '}
                    {schoolContact.phoneNumbers.map((phone, index) => (
                      <React.Fragment key={phone.number}>
                        {index > 0 && ' / '}
                        <a href={phone.href} className="hover:underline">
                          {phone.number}
                        </a>
                      </React.Fragment>
                    ))}
                  </span>
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-200">Kết nối cùng IES:</span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3764AF] text-white flex items-center justify-center transition-colors text-xs font-bold"
                    title="Facebook"
                  >
                    f
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-colors text-xs font-bold"
                    title="YouTube"
                  >
                    ▶
                  </a>  
                  <a
                    href="https://zalo.me"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-500 text-white flex items-center justify-center transition-colors text-xs font-bold"
                    title="Zalo"
                  >
                    Z
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT 3 (COL-MD-4): BẢNG THỐNG KÊ TRUY CẬP (THONGKE) */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/20">
                <BarChart3 className="w-5 h-5 text-[#2DBEDC]" />
                <h4 className="font-black text-sm uppercase tracking-wider text-white">
                  Thống Kê Lượt Truy Cập
                </h4>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="flex items-center gap-2 text-slate-200">
                    <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                    Đang trực tuyến:
                  </span>
                  <span className="font-black text-emerald-400 bg-white/10 px-2 py-0.5 rounded">
                    3.356
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="flex items-center gap-2 text-slate-200">
                    <Users className="w-4 h-4 text-cyan-300" />
                    Hôm nay:
                  </span>
                  <span className="font-black text-cyan-300 bg-white/10 px-2 py-0.5 rounded">
                    26.924
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#F58232]" />
                    Tổng lượt truy cập:
                  </span>
                  <span className="font-black text-yellow-300 bg-white/10 px-2 py-0.5 rounded text-sm sm:text-base">
                    49.949.700
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-white/10 text-center">
              <span className="text-[11px] text-cyan-200">
                Hệ thống tuyển sinh & quản lý đào tạo trực tuyến 24/7
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="text-center sm:text-left">
            © 2026 Website thuộc bản quyền <strong>{schoolContact.name}</strong>.
          </p>
          <p className="text-center sm:text-right text-[11px] text-cyan-200">
            Tuân thủ Bộ Quy Chuẩn Thương Hiệu IES v1.0 • Bảo mật dữ liệu thí sinh chuẩn Enterprise
          </p>
        </div>

      </div>
    </footer>
  );
}
