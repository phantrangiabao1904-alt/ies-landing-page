'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative border-4 border-[#0F5587]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3.5 -right-3.5 bg-slate-100 hover:bg-rose-500 hover:text-white text-slate-600 rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md transition-colors"
              aria-label="Đóng popup"
            >
              ✕
            </button>
            <div className="inline-block px-3 py-1 rounded-full bg-[#F6EEE5] text-[#F58232] font-black text-xs uppercase tracking-wider mb-2">
              QUYỀN LỢI NGHỊ ĐỊNH 81/CP
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F5587] mb-2 uppercase">
              Cơ Hội Vàng 2026!
            </h2>
            <div className="bg-[#F6EEE5] text-[#F58232] font-black text-2xl py-2.5 px-4 rounded-xl mb-4 border border-[#F58232]/30 animate-pulse">
              HỌC PHÍ MIỄN PHÍ 100%
            </div>
            <p className="text-[#5D6B78] mb-6 text-sm font-medium leading-relaxed">
              Dành riêng cho học sinh tốt nghiệp THCS (Lớp 9) đăng ký xét tuyển hôm nay. Học thực tiễn - 18 tuổi đi làm chuyên nghiệp!
            </p>
            <button
              onClick={() => {
                setIsOpen(false);
                document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-[#F58232] hover:bg-[#E06F20] text-white font-black py-3.5 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-[#F58232]/30 uppercase text-sm tracking-wider cursor-pointer"
            >
              ĐĂNG KÝ NHẬN HỌC BỔNG NGAY
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
