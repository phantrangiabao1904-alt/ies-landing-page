// Danh sách vị trí ảnh admin có thể thay đổi. Dùng chung cho server action, trang admin và các trang public.
// Phải khớp với slot đã seed trong bảng site_media (supabase/migrations/ALL_MIGRATIONS.sql).
export const SITE_MEDIA_SLOTS = [
  // Trang chủ
  { id: 'home-hero', label: 'Ảnh lớn cạnh tiêu đề trang chủ', fallback: '/images/stitch/photos/phong-may-lab.png' },
  { id: 'home-story-1', label: 'Cảm nhận sinh viên 1', fallback: '/images/stitch/photos/sv-le-hoang-phuc.png' },
  { id: 'home-story-2', label: 'Cảm nhận sinh viên 2', fallback: '/images/stitch/photos/sv-nguyen-minh-khoi.png' },
  { id: 'home-story-3', label: 'Cảm nhận sinh viên 3', fallback: '/images/stitch/photos/sv-tran-thu-ha.png' },
  // Ngành đào tạo
  { id: 'major-cntt', label: 'Công nghệ thông tin - Phòng lab', fallback: '/images/stitch/photos/phong-may-lab.png' },
  { id: 'major-thietke', label: 'Thiết kế đồ họa - Studio', fallback: '/images/stitch/photos/phong-thiet-ke.png' },
  { id: 'major-quantrimang', label: 'Quản trị mạng - Lab hạ tầng', fallback: '/images/stitch/photos/space-lab.png' },
  { id: 'major-ketoan', label: 'Kế toán - Thư viện', fallback: '/images/stitch/photos/thu-vien.png' },
  { id: 'major-tuvan', label: 'Tư vấn hỗ trợ', fallback: '/images/stitch/photos/tu-van.png' },
  { id: 'major-livestream', label: 'Học trực tuyến', fallback: '/images/stitch/photos/livestream.png' },
  // Giới thiệu
  { id: 'about-banner', label: 'Ảnh banner trang giới thiệu', fallback: '/images/stitch/photos/khuon-vien.png' },
  { id: 'about-facility-1', label: 'Cơ sở vật chất 1', fallback: '/images/stitch/photos/phong-may-lab.png' },
  { id: 'about-facility-2', label: 'Cơ sở vật chất 2', fallback: '/images/stitch/photos/studio.png' },
  { id: 'about-facility-3', label: 'Cơ sở vật chất 3', fallback: '/images/stitch/photos/thu-vien.png' },
  { id: 'about-facility-4', label: 'Cơ sở vật chất 4', fallback: '/images/stitch/photos/ky-tuc-xa.png' },
  { id: 'about-director', label: 'Hiệu trưởng', fallback: '/images/stitch/photos/hieu-truong.png' },
  { id: 'about-vice-director-1', label: 'Phó hiệu trưởng 1', fallback: '/images/stitch/photos/pho-hieu-truong-nu.png' },
  { id: 'about-vice-director-2', label: 'Phó hiệu trưởng 2', fallback: '/images/stitch/photos/pho-hieu-truong-nam.png' },
  // Tuyển sinh, hợp tác, đăng ký
  { id: 'admission-banner', label: 'Ảnh tuyển sinh', fallback: '/images/stitch/photos/cong-truong.png' },
  { id: 'admission-degree', label: 'Chứng chỉ tốt nghiệp', fallback: '/images/stitch/photos/bang-tot-nghiep-ies.png' },
  { id: 'admission-decree', label: 'Chính sách Nghị định 81', fallback: '/images/stitch/photos/van-bang.png' },
  { id: 'partnership-banner', label: 'Ảnh hợp tác', fallback: '/images/stitch/photos/hop-tac-ky-ket.png' },
  { id: 'registration-visual', label: 'Ảnh tư vấn đăng ký', fallback: '/images/stitch/photos/tu-van.png' },
] as const;

export type SiteMediaSlot = (typeof SITE_MEDIA_SLOTS)[number]['id'];

export const SITE_MEDIA_SLOT_IDS = SITE_MEDIA_SLOTS.map((slot) => slot.id) as [
  SiteMediaSlot,
  ...SiteMediaSlot[],
];
