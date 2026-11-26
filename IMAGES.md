# IMAGES.md - Danh sách ảnh cần tạo cho trang chủ DEMO IES

Ảnh đặt trong `public/images/demo/`. Xuất WebP (chất lượng 80), tỉ lệ 16:9. Chưa có ảnh thì trang hiển thị khung nền `#F5F8FA` kèm icon. Không dùng ảnh người thật lấy từ internet.

## Prompt mẫu (thay `[CẢNH]` bằng cột "Cảnh" bên dưới)

```
Ảnh chụp đời thực kiểu phóng sự giáo dục, sáng và sạch, ánh sáng tự nhiên, bố cục thoáng.
Cảnh: [CẢNH].
Học sinh Việt Nam 16-18 tuổi, mặc áo thun hoặc sơ mi giản dị (có thể có chi tiết màu xanh dương đậm), biểu cảm tự nhiên đang tập trung hoặc mỉm cười nhẹ, không nhìn thẳng ống kính, không pose.
Phòng học/phòng máy hiện đại, gọn gàng, nền ít chi tiết.
Không chữ, không logo, không watermark. Không ảnh tối, không nhiễu, không hoạt hình.
Tỉ lệ 16:9, chất lượng cao.
```

Với ảnh không có người (sản phẩm học sinh), bỏ hai dòng về học sinh và phòng học, giữ các dòng về phong cách và "Không chữ, không logo".

## Danh sách ảnh

| Tên file | Kích thước | Cảnh |
|---|---|---|
| hero-students.webp | 1600x900 | Hai học sinh ngồi cạnh nhau trong phòng máy, cùng nhìn màn hình và thảo luận bài thực hành, ánh sáng cửa sổ. |
| major-cong-nghe-thong-tin.webp | 1200x675 | Học sinh gõ code trên laptop, màn hình hiển thị giao diện web (không đọc được chữ). |
| major-thiet-ke-do-hoa.webp | 1200x675 | Học sinh dùng bảng vẽ điện tử thiết kế poster trong studio sáng. |
| major-quan-tri-mang.webp | 1200x675 | Học sinh cắm dây mạng vào tủ switch nhỏ trong phòng thực hành mạng. |
| major-ke-toan.webp | 1200x675 | Học sinh làm việc với máy tính và sổ sách trên bàn gọn gàng. |
| major-quan-tri-kinh-doanh.webp | 1200x675 | Nhóm 3 học sinh thảo luận kế hoạch bán hàng quanh bàn, có giấy ghi chú. |
| major-thuong-mai-dien-tu.webp | 1200x675 | Học sinh chụp sản phẩm bằng điện thoại và đăng gian hàng online trên laptop. |
| roadmap-01-enroll.webp | 1200x675 | Học sinh và phụ huynh nhận hướng dẫn hồ sơ tại quầy tư vấn, thân thiện. |
| roadmap-02-learn.webp | 1200x675 | Lớp học thực hành, giáo viên chỉ bài cho một học sinh tại máy. |
| roadmap-03-intern.webp | 1200x675 | Học sinh mặc sơ mi đơn giản làm việc tại văn phòng nhỏ của doanh nghiệp. |
| roadmap-04-career.webp | 1200x675 | Học sinh vừa ra trường mỉm cười nhẹ tại bàn làm việc đầu tiên. |
| space-lab.webp | 1600x900 | Phòng máy rộng, hàng máy tính ngay ngắn, vài học sinh đang học. |
| space-studio.webp | 1200x675 | Studio thiết kế sáng với bàn vẽ và màn hình màu chuẩn. |
| space-library.webp | 1200x675 | Thư viện yên tĩnh, học sinh đọc sách bên giá sách. |
| space-dorm.webp | 1200x675 | Phòng ký túc xá gọn gàng, giường tầng, một học sinh đang học bài. |
| space-campus.webp | 1200x675 | Sân trường nắng nhẹ, học sinh trò chuyện dưới hành lang. |
| showcase-poster.webp | 1200x675 | Poster sự kiện do học sinh thiết kế, dán trên tường (không có chữ đọc được). Không có người. |
| showcase-web.webp | 1200x675 | Giao diện website quán cà phê trên màn hình laptop. Không có người. |
| showcase-store.webp | 1200x675 | Giao diện gian hàng online mỹ phẩm trên điện thoại. Không có người. |
| showcase-network.webp | 1200x675 | Sơ đồ mạng văn phòng vẽ sạch trên màn hình hoặc bảng trắng. Không có người. |

## Logo (đặt trong `public/brand/`)

| Tên file | Ghi chú |
|---|---|
| logo-ngang.png | Logo ngang, rộng tối thiểu 180px, dùng ở header. |
| logo-rut-gon.png | Logo rút gọn, tối thiểu 72px, dùng làm favicon/avatar. |
| logo-ngang-am-ban.png | Bản âm bản (trắng) cho footer nền `#0F5587`. |

Hiện thư mục `public/brand` chưa có. Trang đang dùng component SVG `IESLogo` thay thế cho đến khi có file logo.

## Ghi chú

- Alt text viết bằng tiếng Việt, mô tả cảnh.
- Trên mỗi thẻ ảnh trong code có comment mô tả cảnh cần tạo.
- Mọi người trong ảnh là hư cấu, không phải học sinh thật của trường.
