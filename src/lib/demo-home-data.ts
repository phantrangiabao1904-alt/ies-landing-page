// Dữ liệu minh họa cho trang chủ DEMO IES (tuyển sinh 2026).
// Mọi số liệu, câu chuyện, đối tác đều HƯ CẤU, chỉ dùng để trình bày ý tưởng.

export const demoBadgeText = 'BẢN DEMO - Nội dung minh họa';

export const heroStats = [
  { value: 20, suffix: '+', label: 'Năm hoạt động' },
  { value: 12000, suffix: '+', label: 'Học sinh đã theo học' },
  { value: 85, suffix: '+', label: 'Doanh nghiệp đối tác' },
  { value: 92, suffix: '%', label: 'Tỷ lệ có việc làm' },
];

export const majors = [
  {
    slug: 'cong-nghe-thong-tin',
    name: 'Công nghệ thông tin',
    tagline: 'Biết code, biết tạo ra sản phẩm, tự tin đi làm từ năm thứ hai.',
    skills: ['Lập trình web cơ bản', 'Thiết kế cơ sở dữ liệu', 'Kiểm thử phần mềm'],
    jobs: ['Lập trình viên web', 'Nhân viên kiểm thử', 'Hỗ trợ kỹ thuật'],
    icon: 'Code2',
  },
  {
    slug: 'thiet-ke-do-hoa',
    name: 'Thiết kế đồ họa',
    tagline: 'Biến ý tưởng thành hình ảnh khiến người khác phải dừng lại nhìn.',
    skills: ['Thiết kế ấn phẩm', 'Dựng logo và nhận diện', 'Dựng video ngắn'],
    jobs: ['Thiết kế đồ họa', 'Designer quảng cáo', 'Content creator'],
    icon: 'Palette',
  },
  {
    slug: 'quan-tri-mang',
    name: 'Quản trị mạng',
    tagline: 'Giữ cho hệ thống chạy ổn định, và học cách bảo vệ dữ liệu.',
    skills: ['Cấu hình mạng LAN/WAN', 'Quản trị máy chủ', 'Bảo mật cơ bản'],
    jobs: ['Quản trị mạng', 'Kỹ thuật viên hệ thống', 'Hỗ trợ bảo mật'],
    icon: 'Network',
  },
  {
    slug: 'ke-toan',
    name: 'Kế toán',
    tagline: 'Con số rõ ràng, nghề vững vàng, làm việc với phần mềm hiện đại.',
    skills: ['Kế toán doanh nghiệp', 'Phần mềm kế toán', 'Lập báo cáo thuế cơ bản'],
    jobs: ['Kế toán tổng hợp', 'Kế toán bán hàng', 'Nhân viên thuế'],
    icon: 'Calculator',
  },
  {
    slug: 'quan-tri-kinh-doanh',
    name: 'Quản trị kinh doanh',
    tagline: 'Hiểu thị trường, biết làm việc nhóm, sẵn sàng khởi nghiệp.',
    skills: ['Quản lý bán hàng', 'Kỹ năng giao tiếp', 'Lập kế hoạch kinh doanh'],
    jobs: ['Nhân viên kinh doanh', 'Trợ lý quản lý', 'Chăm sóc khách hàng'],
    icon: 'Briefcase',
  },
  {
    slug: 'thuong-mai-dien-tu',
    name: 'Thương mại điện tử',
    tagline: 'Mở gian hàng online, học cách bán hàng bằng dữ liệu và nội dung.',
    skills: ['Vận hành sàn thương mại', 'Quảng cáo số cơ bản', 'Quản lý đơn hàng'],
    jobs: ['Nhân viên thương mại điện tử', 'Quản lý gian hàng online', 'Điều phối logistics'],
    icon: 'ShoppingCart',
  },
] as const;

export const roadmapSteps = [
  {
    step: '01',
    title: 'Nhập học',
    text: 'Nộp hồ sơ, chọn ngành và nhận lịch học. Nhà trường hướng dẫn từng bước.',
    image: '/images/demo/roadmap-01-enroll.webp',
  },
  {
    step: '02',
    title: 'Học văn hóa + nghề',
    text: 'Học kiến thức nền và thực hành trên máy, xưởng và phòng studio.',
    image: '/images/demo/roadmap-02-learn.webp',
  },
  {
    step: '03',
    title: 'Thực tập',
    text: 'Làm việc thật tại doanh nghiệp đối tác để áp dụng những gì đã học.',
    image: '/images/demo/roadmap-03-intern.webp',
  },
  {
    step: '04',
    title: 'Việc làm',
    text: 'Nhà trường hỗ trợ giới thiệu việc làm và kết nối với nhà tuyển dụng.',
    image: '/images/demo/roadmap-04-career.webp',
  },
] as const;

export const stories = [
  {
    name: 'Nguyễn Minh Anh',
    major: 'Thiết kế đồ họa',
    background: 'Sinh ra ở Bình Thạnh, từng nghĩ mình không giỏi học thuộc lòng. Đi học nghề mới thấy mình thích vẽ.',
    now: 'Hiện làm designer tại một công ty truyền thông nhỏ.',
    quote: 'Học nghề không có nghĩa là chọn đường thấp. Mình học được cách tự làm ra sản phẩm có người dùng.',
  },
  {
    name: 'Trần Quốc Bảo',
    major: 'Quản trị mạng',
    background: 'Gia đình có hoàn cảnh khó khăn, phải vừa học vừa phụ giúp quán cà phê của mẹ mỗi cuối tuần.',
    now: 'Hiện là kỹ thuật viên hệ thống, đang học thêm buổi tối.',
    quote: 'Thầy cô nói: làm đến đâu chắc đến đó. Mình tin và kiên trì, kết quả đến rất rõ ràng.',
  },
  {
    name: 'Lê Thị Hồng Nhung',
    major: 'Kế toán',
    background: 'Học sinh vùng ven thành phố, lần đầu xa nhà. Ký túc xá giúp Nhung làm quen với cuộc sống mới.',
    now: 'Hiện làm kế toán bán hàng cho một công ty thương mại.',
    quote: 'Mỗi tuần được thực hành trên phần mềm thật. Đi làm rồi mình không bị bỡ ngỡ.',
  },
] as const;

export const learningSpaces = [
  { name: 'Phòng máy thực hành', desc: 'Máy tính cấu hình đủ dùng cho lập trình và thiết kế.', icon: 'Monitor', image: '/images/demo/space-lab.webp' },
  { name: 'Studio thiết kế', desc: 'Không gian sáng, có bàn vẽ và màn hình màu chuẩn.', icon: 'Palette', image: '/images/demo/space-studio.webp' },
  { name: 'Thư viện', desc: 'Sách chuyên ngành, tài liệu số và chỗ học nhóm yên tĩnh.', icon: 'Library', image: '/images/demo/space-library.webp' },
  { name: 'Ký túc xá', desc: 'Phòng ở gọn gàng, an ninh, gần trường cho học sinh ở xa.', icon: 'Home', image: '/images/demo/space-dorm.webp' },
  { name: 'Sân trường', desc: 'Nơi nghỉ giải lao, sinh hoạt câu lạc bộ và gặp gỡ bạn bè.', icon: 'TreePine', image: '/images/demo/space-campus.webp' },
] as const;

export const showcaseItems = [
  { title: 'Poster sự kiện', major: 'Thiết kế đồ họa', icon: 'Image', image: '/images/demo/showcase-poster.webp' },
  { title: 'Website giới thiệu quán cà phê', major: 'Công nghệ thông tin', icon: 'Globe', image: '/images/demo/showcase-web.webp' },
  { title: 'Gian hàng online mỹ phẩm', major: 'Thương mại điện tử', icon: 'ShoppingBag', image: '/images/demo/showcase-store.webp' },
  { title: 'Sơ đồ mạng văn phòng', major: 'Quản trị mạng', icon: 'Network', image: '/images/demo/showcase-network.webp' },
] as const;

export const partners = [
  { name: 'TechNova', tag: 'Phần mềm', icon: 'Cpu' },
  { name: 'Saigon Digital', tag: 'Truyền thông số', icon: 'Layers' },
  { name: 'Minh Phát Trading', tag: 'Thương mại', icon: 'Package' },
  { name: 'An Khang Accounting', tag: 'Kế toán - Kiểm toán', icon: 'Scale' },
] as const;
