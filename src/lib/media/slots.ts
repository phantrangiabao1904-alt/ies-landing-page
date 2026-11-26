// Danh sách vị trí ảnh admin có thể thay đổi. Dùng chung cho server action và trang admin.
export const SITE_MEDIA_SLOTS = [
  {
    id: 'home-hero',
    label: 'Ảnh lớn cạnh tiêu đề trang chủ',
    fallback: '/images/stitch/photos/phong-may-lab.png',
  },
  {
    id: 'home-story-1',
    label: 'Cảm nhận sinh viên 1',
    fallback: '/images/stitch/photos/sv-le-hoang-phuc.png',
  },
  {
    id: 'home-story-2',
    label: 'Cảm nhận sinh viên 2',
    fallback: '/images/stitch/photos/sv-nguyen-minh-khoi.png',
  },
  {
    id: 'home-story-3',
    label: 'Cảm nhận sinh viên 3',
    fallback: '/images/stitch/photos/sv-tran-thu-ha.png',
  },
  {
    id: 'home-promo-popup',
    label: 'Popup khuyến mãi trang chủ (hiện một lần)',
    fallback: '/images/home-promo-banner.jpg',
  },
] as const;

export type SiteMediaSlot = (typeof SITE_MEDIA_SLOTS)[number]['id'];

export const SITE_MEDIA_SLOT_IDS = SITE_MEDIA_SLOTS.map((slot) => slot.id) as [
  SiteMediaSlot,
  ...SiteMediaSlot[],
];
