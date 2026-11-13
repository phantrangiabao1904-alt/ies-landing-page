'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { submitLeadAction } from '@/actions/lead-submit';
import { schoolContact } from '@/lib/school-info';

export default function DangKyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMsg, setFormMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMsg('');

    const formData = new FormData(e.currentTarget);
    try {
      const res = await submitLeadAction(formData);
      setFormMsg(res.message);
      setIsSuccess(res.success);

      if (res.success) {
        formRef.current?.reset();
      }
    } catch {
      setIsSuccess(false);
      setFormMsg('Không thể gửi đăng ký lúc này. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
      <SiteHeader />

      <main className="w-full pt-28 bg-[#f5f8fa] min-h-[calc(100vh-28rem)] flex-1 pb-16">
        {/* BREADCRUMB STRIP */}
        <div className="w-full bg-white border-b border-outline-variant/40 py-3">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex items-center justify-between">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-xs text-on-surface-variant">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">home</span>
                <span>Trang Chủ</span>
              </Link>
              <span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
              <Link href="/tuyen-sinh" className="hover:text-primary transition-colors">Tuyển Sinh</Link>
              <span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
              <span className="text-primary font-bold">Đăng Ký Xét Tuyển Trực Tuyến</span>
            </nav>
            <div className="hidden sm:flex items-center gap-2 font-code text-xs text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Cổng nhận hồ sơ trực tuyến mở 24/7</span>
            </div>
          </div>
        </div>

        {/* HERO TITLE BANNER */}
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 pt-8 pb-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6EEE5] text-[#F58232] font-label-md text-xs font-bold w-fit border border-[#F58232]/20">
              <span className="material-symbols-outlined text-[15px]">verified</span>
              <span>TUYỂN SINH NĂM 2026 • TOÀN QUỐC</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F5587] tracking-tight leading-tight">
              Đăng Ký Xét Tuyển Trực Tuyến — Giữ Suất Học Bổng &amp; Miễn 100% Học Phí
            </h1>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-3xl leading-relaxed">
              Gửi thông tin xét tuyển ban đầu miễn phí. Ban tuyển sinh sẽ liên hệ tư vấn ngành học, điều kiện xét tuyển và hướng dẫn hoàn thiện hồ sơ; bạn chưa cần nộp giấy tờ trong biểu mẫu này.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-primary/20 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[20px]">checklist</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0F5587]">Biểu mẫu gồm 3 phần</p>
                <p className="mt-1 text-xs leading-relaxed text-[#5D6B78]">
                  Dấu * là bắt buộc. CCCD không bắt buộc; Ban tuyển sinh sẽ liên hệ để xác nhận thông tin.
                </p>
              </div>
            </div>
            <ol aria-label="Các phần trong biểu mẫu" className="mt-3 grid grid-cols-1 gap-2 text-xs font-semibold text-[#0F5587] sm:grid-cols-3">
              <li className="rounded-lg bg-[#F5F8FA] px-3 py-2">1. Thông tin liên hệ</li>
              <li className="rounded-lg bg-[#F5F8FA] px-3 py-2">2. Học vấn</li>
              <li className="rounded-lg bg-[#F5F8FA] px-3 py-2">3. Ngành và cơ sở</li>
            </ol>
          </div>
        </div>

        {/* MAIN FORM GRID */}
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: 3-SECTION FORM */}
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-md border border-[#D9E2EA] p-6 md:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* SECTION 1 */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-[#0F5587] text-white flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    <h3 className="font-title text-base md:text-lg font-bold text-[#0F5587]">
                      Thông Tin Cá Nhân &amp; Liên Hệ
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="application-full-name" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Họ và tên thí sinh <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="application-full-name"
                        type="text"
                        name="fullName"
                        required
                        autoComplete="name"
                        autoCapitalize="words"
                        placeholder="VÍ DỤ: NGUYỄN VĂN AN (VIẾT HOA CÓ DẤU)"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all placeholder:text-[#5D6B78]/60 text-[#263849]"
                      />
                    </div>

                    <div>
                      <label htmlFor="application-dob" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Ngày tháng năm sinh <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="application-dob"
                        type="date"
                        name="dob"
                        required
                        autoComplete="bday"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      />
                    </div>

                    <div>
                      <p id="application-gender-label" className="mb-1 block text-xs font-bold uppercase text-[#263849]">
                        Giới tính <span className="text-rose-500">*</span>
                      </p>
                      <div aria-labelledby="application-gender-label" role="radiogroup" className="grid min-h-[44px] grid-cols-2 gap-2">
                        <label className="flex items-center justify-center gap-2 border border-[#D9E2EA] rounded-xl cursor-pointer hover:bg-slate-50 text-sm font-semibold text-[#263849]">
                          <input type="radio" name="gender" value="Nam" defaultChecked />
                          <span>Nam</span>
                        </label>
                        <label className="flex items-center justify-center gap-2 border border-[#D9E2EA] rounded-xl cursor-pointer hover:bg-slate-50 text-sm font-semibold text-[#263849]">
                          <input type="radio" name="gender" value="Nữ" />
                          <span>Nữ</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="application-phone" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Số điện thoại thí sinh <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="application-phone"
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="^(0|\+84)[0-9]{9}$"
                        placeholder="09xx xxx xxx"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      />
                    </div>

                    <div>
                      <label htmlFor="application-parent-phone" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Số điện thoại Phụ huynh (Nếu có)
                      </label>
                      <input
                        id="application-parent-phone"
                        type="tel"
                        name="parentPhone"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="09xx xxx xxx"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      />
                    </div>

                    <div>
                      <label htmlFor="application-email" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Email liên hệ (Thí sinh/Phụ huynh)
                      </label>
                      <input
                        id="application-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="example@gmail.com"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      />
                    </div>

                    <div>
                      <label htmlFor="application-id-card" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Số CCCD / Mã định danh (Không bắt buộc)
                      </label>
                      <input
                        id="application-id-card"
                        type="text"
                        name="idCard"
                        placeholder="Nhập nếu đã có"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="application-address" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Địa chỉ thường trú (Tỉnh/Thành, Quận/Huyện, Số nhà, Tên đường) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="application-address"
                        type="text"
                        name="address"
                        required
                        autoComplete="street-address"
                        placeholder="Ví dụ: 123 Lê Đức Thọ, Phường 13, Gò Vấp, TP.HCM"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 2 */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-[#0F5587] text-white flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <h3 className="font-title text-base md:text-lg font-bold text-[#0F5587]">
                      Thông Tin Học Vấn &amp; Xuất Phát Điểm
                    </h3>
                  </div>

                  <div>
                    <p id="application-level-label" className="mb-2 block text-xs font-bold uppercase text-[#263849]">
                      Đối tượng xét tuyển của bạn <span className="text-rose-500">*</span>
                    </p>
                    <div aria-labelledby="application-level-label" role="radiogroup" className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <label className="p-3 border-2 border-primary/40 bg-primary/5 rounded-xl cursor-pointer hover:border-primary flex flex-col gap-1 transition-all">
                        <div className="flex items-center gap-2">
                          <input type="radio" name="academicLevel" value="Tốt nghiệp THCS" defaultChecked />
                          <span className="font-bold text-xs text-primary">Tốt nghiệp THCS</span>
                        </div>
                        <span className="text-[11px] text-[#F58232] font-semibold pl-5">Miễn 100% học phí Nghị định 81</span>
                      </label>

                      <label className="p-3 border border-[#D9E2EA] rounded-xl cursor-pointer hover:border-primary flex flex-col gap-1 transition-all">
                        <div className="flex items-center gap-2">
                          <input type="radio" name="academicLevel" value="Tốt nghiệp THPT" />
                          <span className="font-bold text-xs text-[#263849]">Tốt nghiệp THPT</span>
                        </div>
                        <span className="text-[11px] text-[#5D6B78] pl-5">Đào tạo nghề chuyên sâu 1.5 - 2 năm</span>
                      </label>

                      <label className="p-3 border border-[#D9E2EA] rounded-xl cursor-pointer hover:border-primary flex flex-col gap-1 transition-all">
                        <div className="flex items-center gap-2">
                          <input type="radio" name="academicLevel" value="Đang học dở dang / Khác" />
                          <span className="font-bold text-xs text-[#263849]">Học dở dang / Khác</span>
                        </div>
                        <span className="text-[11px] text-[#5D6B78] pl-5">Chuyển tiếp tín chỉ, rút ngắn lộ trình</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="application-school-name" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Trường THCS / THPT từng theo học <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="application-school-name"
                        type="text"
                        name="schoolName"
                        required
                        placeholder="Ví dụ: THCS Phan Bội Châu"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      />
                    </div>

                    <div>
                      <label htmlFor="application-grade-rank" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Xếp loại học lực lớp 9 / lớp 12 <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="application-grade-rank"
                        name="gradeRank"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      >
                        <option value="Loại Khá (6.5 - 7.9)">Loại Khá (Điểm TB từ 6.5 - 7.9)</option>
                        <option value="Loại Giỏi (8.0 trở lên)">Loại Giỏi (Điểm TB từ 8.0 trở lên)</option>
                        <option value="Loại Trung Bình (5.0 - 6.4)">Loại Trung Bình (Điểm TB từ 5.0 - 6.4)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 3 */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-[#0F5587] text-white flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                    <h3 className="font-title text-base md:text-lg font-bold text-[#0F5587]">
                      Nguyện Vọng Ngành &amp; Cơ Sở Đào Tạo
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="application-primary-major" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Chuyên ngành dự tuyển (Ưu tiên 1) <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="application-primary-major"
                        name="major"
                        required
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849] font-medium"
                      >
                        <option value="Công nghệ thông tin">01. Công nghệ thông tin</option>
                        <option value="Thiết kế đồ họa">02. Thiết kế đồ họa</option>
                        <option value="Quản trị mạng">03. Quản trị mạng</option>
                        <option value="Kế toán">04. Kế toán</option>
                        <option value="Quản trị kinh doanh">05. Quản trị kinh doanh</option>
                        <option value="Thương mại điện tử">06. Thương mại điện tử</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="application-secondary-major" className="block text-xs font-bold uppercase text-[#263849] mb-1">
                        Nguyện vọng 2 (Dự phòng)
                      </label>
                      <select
                        id="application-secondary-major"
                        name="secondaryMajor"
                        className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] outline-none transition-all text-[#263849]"
                      >
                        <option value="">-- Không đăng ký NV2 --</option>
                        <option value="Công nghệ thông tin">01. Công nghệ thông tin</option>
                        <option value="Thiết kế đồ họa">02. Thiết kế đồ họa</option>
                        <option value="Quản trị mạng">03. Quản trị mạng</option>
                        <option value="Kế toán">04. Kế toán</option>
                        <option value="Quản trị kinh doanh">05. Quản trị kinh doanh</option>
                        <option value="Thương mại điện tử">06. Thương mại điện tử</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <p id="application-campus-label" className="mb-2 block text-xs font-bold uppercase text-[#263849]">
                      Địa điểm học tập mong muốn <span className="text-rose-500">*</span>
                    </p>
                    <div aria-labelledby="application-campus-label" role="radiogroup" className="grid grid-cols-1 gap-3">
                      {schoolContact.campuses.map((campus, index) => (
                        <label key={campus.value} className="p-3.5 border-2 border-primary/30 bg-primary/5 rounded-xl cursor-pointer hover:border-primary flex items-start gap-3">
                          <input
                            type="radio"
                            name="campus"
                            value={campus.value}
                            defaultChecked={index === 0}
                            className="mt-1"
                          />
                          <div>
                            <strong className="block text-xs text-[#0F5587] font-bold">{campus.name}</strong>
                            <span className="text-[11px] text-[#5D6B78] leading-tight">{campus.address}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#263849] mb-2">
                      Nhu cầu hỗ trợ thêm (Tích chọn nếu cần):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <label className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer text-xs font-medium text-[#263849]">
                        <input type="checkbox" name="needDorm" value="yes" />
                        <span>Ký túc xá sinh viên</span>
                      </label>
                      <label className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer text-xs font-medium text-[#263849]">
                        <input type="checkbox" name="needJob" value="yes" />
                        <span>Việc làm part-time</span>
                      </label>
                      <label className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer text-xs font-medium text-[#263849]">
                        <input type="checkbox" name="needDocSupport" value="yes" defaultChecked />
                        <span>Hồ sơ miễn 100% học phí</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* HIDDEN CONTEXT */}
                <input type="hidden" name="source" value="page_dang_ky_truc_tuyen" />

                {/* CONFIRMATION & SUBMIT */}
                <div className="pt-2 flex flex-col gap-4">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" name="consent" required defaultChecked className="mt-1 rounded" />
                    <span className="text-xs text-[#5D6B78] leading-relaxed">
                      Tôi cam kết các thông tin khai báo trên là chính xác và đồng ý để Ban tuyển sinh Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) liên hệ hướng dẫn thủ tục nhập học.
                    </span>
                  </label>

                  {formMsg && (
                    <div role={isSuccess ? 'status' : 'alert'} aria-live="polite" className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold border ${isSuccess ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                      {formMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#F58232] hover:bg-[#d96a1e] active:scale-[0.99] text-white font-title text-base font-black uppercase tracking-wider transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>ĐANG GỬI HỒ SƠ LÊN HỆ THỐNG...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[22px]">send</span>
                        <span>GỬI HỒ SƠ XÉT TUYỂN &amp; GIỮ SUẤT HỌC BỔNG</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#5D6B78]">
                    Hệ thống bảo mật dữ liệu theo quy chuẩn SSL 256-bit • Miễn 100% lệ phí xét tuyển hồ sơ
                  </p>
                </div>
              </form>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* HOTLINE CARD */}
              <div className="bg-white rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">support_agent</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Hỗ Trợ Nhanh 24/7</span>
                    <h4 className="font-title text-base font-bold text-[#0F5587]">Ban Tuyển Sinh IES</h4>
                  </div>
                </div>
                <div className="p-3 bg-[#f5f8fa] rounded-xl flex flex-col gap-1 border border-slate-200">
                  <span className="text-xs text-[#5D6B78] font-bold">Hotline Tư Vấn Xét Tuyển:</span>
                  {schoolContact.phoneNumbers.map((phone) => (
                    <a key={phone.number} href={phone.href} className="text-xl font-black text-[#F58232] hover:underline">
                      {phone.number}
                    </a>
                  ))}
                  <span className="text-[11px] text-[#5D6B78]">(Zalo / Điện thoại trực tiếp)</span>
                </div>
              </div>

              {/* 5 PRIVILEGES */}
              <div className="bg-gradient-to-br from-[#0F5587] to-[#3764AF] text-white rounded-2xl p-6 shadow-md flex flex-col gap-4 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2DBEDC]">verified</span>
                  <h4 className="font-title text-base font-bold text-white uppercase tracking-wide">
                    5 ĐẶC QUYỀN THÍ SINH 2026
                  </h4>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2DBEDC] text-[16px]">check</span>
                    <span>Miễn 100% học phí theo Nghị định 81/CP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2DBEDC] text-[16px]">check</span>
                    <span>Tặng ngay 2.000.000đ học bổng đầu khóa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2DBEDC] text-[16px]">check</span>
                    <span>Ký cam kết 100% việc làm bằng văn bản</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2DBEDC] text-[16px]">check</span>
                    <span>Miễn 100% lệ phí xét tuyển và nhập học</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2DBEDC] text-[16px]">check</span>
                    <span>Được hỗ trợ thủ tục hồ sơ vay vốn ưu đãi</span>
                  </li>
                </ul>
              </div>

              {/* TESTIMONIAL CARD */}
              <div className="bg-white rounded-2xl p-5 border border-[#D9E2EA] shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0F5587]/10 text-[#0F5587]">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <h5 className="font-title text-xs font-bold text-[#0F5587]">Tư vấn tuyển sinh IES</h5>
                    <span className="text-[11px] text-[#5D6B78] block">Hỗ trợ hồ sơ năm 2026</span>
                  </div>
                </div>
                <p className="text-xs text-[#5D6B78] leading-relaxed">
                  Ban tuyển sinh sẽ tư vấn ngành học, điều kiện xét tuyển và thủ tục hồ sơ theo thông tin bạn đăng ký.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 mt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">GIẢI ĐÁP THẮC MẮC</span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#0F5587]">
              Câu Hỏi Thường Gặp Về Xét Tuyển Online
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-title text-sm font-bold text-[#0F5587] mb-2">
                1. Đăng ký xét tuyển trực tuyến có tốn phí không?
              </h4>
              <p className="text-xs text-[#5D6B78] leading-relaxed">
                Hoàn toàn miễn phí 100%. Nhà trường không thu bất kỳ khoản phí nào khi thí sinh nộp hồ sơ xét tuyển online.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-title text-sm font-bold text-[#0F5587] mb-2">
                2. Sau bao lâu tôi sẽ nhận được kết quả xét tuyển?
              </h4>
              <p className="text-xs text-[#5D6B78] leading-relaxed">
                Sau khi gửi thông tin, Ban tuyển sinh sẽ kiểm tra hồ sơ và liên hệ thông báo kết quả qua điện thoại trong vòng 30 - 60 phút làm việc.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-title text-sm font-bold text-[#0F5587] mb-2">
                3. Chưa có bằng tốt nghiệp THCS/THPT có nộp hồ sơ được không?
              </h4>
              <p className="text-xs text-[#5D6B78] leading-relaxed">
                Thí sinh hoàn toàn có thể đăng ký trước bằng học bạ hoặc giấy chứng nhận tốt nghiệp tạm thời để giữ chỗ chỉ tiêu ngành.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-title text-sm font-bold text-[#0F5587] mb-2">
                4. Chính sách miễn học phí theo Nghị định 81 áp dụng thế nào?
              </h4>
              <p className="text-xs text-[#5D6B78] leading-relaxed">
                Học sinh tốt nghiệp THCS học tiếp lên trung cấp được nhà nước hỗ trợ cấp bù 100% học phí nghề. Trường sẽ hỗ trợ trọn gói hồ sơ nhận tiền cấp bù từ Phòng LĐTB&amp;XH.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
