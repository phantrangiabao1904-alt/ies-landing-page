export type CmsContentKind = 'banner' | 'course';

export interface CmsContentItem {
  id: string;
  kind: CmsContentKind;
  title: string;
  body: string;
  sort_order: number;
  is_active: boolean;
}

export const CMS_CONTENT_IDS = [
  'promo-banner',
  'course-it',
  'course-design',
  'course-network',
  'course-accounting',
  'course-business',
  'course-ecommerce',
] as const;

export const DEFAULT_CMS_CONTENT: CmsContentItem[] = [
  {
    id: 'promo-banner',
    kind: 'banner',
    title: 'Miễn phí 100% học phí nghề',
    body: 'Dành cho học sinh tốt nghiệp THCS theo chính sách hỗ trợ học phí hiện hành. Đăng ký để được tư vấn điều kiện và hồ sơ.',
    sort_order: 0,
    is_active: true,
  },
  {
    id: 'course-it',
    kind: 'course',
    title: 'Công nghệ thông tin',
    body: 'Lập trình ứng dụng, cơ sở dữ liệu và phát triển sản phẩm số theo dự án thực tế.',
    sort_order: 1,
    is_active: true,
  },
  {
    id: 'course-design',
    kind: 'course',
    title: 'Thiết kế đồ họa',
    body: 'Thực hành thiết kế thương hiệu, ấn phẩm truyền thông, video và nội dung số.',
    sort_order: 2,
    is_active: true,
  },
  {
    id: 'course-network',
    kind: 'course',
    title: 'Quản trị mạng',
    body: 'Triển khai mạng, máy chủ, vận hành hệ thống và nền tảng điện toán đám mây.',
    sort_order: 3,
    is_active: true,
  },
  {
    id: 'course-accounting',
    kind: 'course',
    title: 'Kế toán',
    body: 'Thực hành nghiệp vụ kế toán, phần mềm, hóa đơn điện tử và báo cáo tài chính.',
    sort_order: 4,
    is_active: true,
  },
  {
    id: 'course-business',
    kind: 'course',
    title: 'Quản trị kinh doanh',
    body: 'Rèn kỹ năng bán hàng, chăm sóc khách hàng và lập kế hoạch kinh doanh.',
    sort_order: 5,
    is_active: true,
  },
  {
    id: 'course-ecommerce',
    kind: 'course',
    title: 'Thương mại điện tử',
    body: 'Vận hành gian hàng số, quản lý đơn hàng, kho vận và phân tích dữ liệu bán lẻ.',
    sort_order: 6,
    is_active: true,
  },
];
