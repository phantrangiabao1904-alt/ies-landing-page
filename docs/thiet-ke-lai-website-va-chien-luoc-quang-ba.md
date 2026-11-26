# Thiết kế lại website IES và chiến lược quảng bá

Tài liệu này là đề xuất mô phỏng (không triển khai code). Logo, tên trường và thông tin liên hệ giữ nguyên theo nguồn hiện có. Các nội dung khác được đề xuất mới để làm rõ cách thiết kế.

Cơ sở thiết kế:
- Thiết kế lấy người dùng làm trung tâm (Don Norman): khả năng nhận biết, phản hồi, ánh xạ, ràng buộc, mô hình khái niệm, khả năng chịu lỗi.
- Thư viện prompt GenAI cho giáo viên (Google): dùng AI để soạn nội dung, tóm tắt và hỗ trợ học tập, phù hợp với việc vận hành và truyền thông của trường.

## 1. Vấn đề của website hiện tại

Đánh giá dựa trên trang `/chuong-trinh-hoc` và cấu trúc các trang khác.

| Vấn đề | Tác động đến người dùng |
|---|---|
| Nút "Đăng ký" xuất hiện hơn 8 lần trên một trang | Người dùng không biết hành động chính là gì, dễ bỏ qua |
| Nội dung chính sách (NĐ 81, NĐ 24) lặp lại ở 3 vị trí | Phụ huynh đọc nhiều nhưng khó nắm điều kiện cụ thể |
| Hai khối "Hệ 9+" và "Trung cấp" có cấu trúc giống nhau, văn bản dài | Khó so sánh để chọn lộ trình phù hợp |
| Phần "Sản phẩm học viên" trước đây là placeholder | Thiếu bằng chứng thực tế, giảm độ tin cậy |
| Timeline học kỳ và khung 4 trụ cột nói cùng một nội dung | Trang dài, người đọc mệt trước khi tới form |

Nguyên tắc Norman áp dụng vào các vấn đề trên:
- **Khả năng nhận biết (visibility):** mỗi màn hình chỉ có một hành động chính. Các hành động phụ dùng liên kết nhẹ hơn.
- **Phản hồi (feedback):** form gửi xong phải báo rõ đã nhận, bước tiếp theo là gì, khi nào được liên hệ.
- **Ánh xạ (mapping):** dùng ngôn ngữ của phụ huynh và học sinh ("Học xong lúc mấy tuổi?", "Có bằng gì?") thay vì thuật ngữ hành chính.
- **Ràng buộc (constraints):** điều kiện học phí hiển thị ngay cạnh con số, không để ở cuối trang.
- **Khả năng chịu lỗi (error tolerance):** form ít trường, thông báo lỗi bằng tiếng Việt cụ thể, có số hotline ngay bên cạnh.

## 2. Người dùng chính

| Nhóm | Nhu cầu chính | Câu hỏi họ đặt ra |
|---|---|---|
| Học sinh vừa tốt nghiệp THCS (14–15 tuổi) | Biết học gì, có việc làm không | "Học nghề có ngầu không? Có kiếm được tiền sớm không?" |
| Phụ huynh của nhóm trên | An toàn, chi phí, chất lượng | "Miễn học phí thật không? Con có bằng gì sau khi học?" |
| Học sinh vừa tốt nghiệp THPT | Học ngắn hạn, nhanh có việc | "Học 1,5–2 năm có đủ để đi làm không?" |
| Người đi làm muốn đổi nghề | Học nhanh, thực hành | "Học xong có được doanh nghiệp nhận không?" |

Hành trình chính: nhận biết (mạng xã hội, bạn bè, tư vấn trực tiếp) → so sánh lộ trình → kiểm tra chính sách và chi phí → đăng ký tư vấn → nhập học.

## 3. Kiến trúc thông tin

Menu đề xuất (6 mục, không đổi nhiều so với hiện tại nhưng đổi cách đặt tên):

1. **Trang chủ:** giới thiệu trường và hai lộ trình chính.
2. **Chọn lộ trình:** so sánh Hệ 9+ và Trung cấp sau THPT (một trang, bảng so sánh dễ đọc).
3. **Ngành đào tạo:** sáu ngành hiện có, mỗi ngành có nghề nghiệp, công việc sau khi học, và ảnh lớp học thật.
4. **Học phí & chính sách:** điều kiện NĐ 81 và NĐ 24, cách tự kiểm tra đối tượng, tải hồ sơ.
5. **Đời sống & thực tập:** ảnh hoạt động, doanh nghiệp thực tập, học viên kể chuyện.
6. **Đăng ký tư vấn:** form duy nhất, có thể mở từ mọi trang.

Mục "Giới thiệu" gộp vào footer và trang "Về IES" để menu gọn hơn.

## 4. Hệ thống thiết kế

**Màu sắc** (lấy từ bộ nhận diện trong `IESLogo.tsx`):
- Xanh đậm `#0F5587`: màu chữ tiêu đề, nền khối tin cậy.
- Xanh học thuật `#3764AF`: nhãn phụ, liên kết.
- Xanh cyan `#2DBEDC`: nhấn mạnh công nghệ, biểu đồ.
- Cam `#F58232`: chỉ dùng cho nút hành động chính. Không dùng cho trang trí.
- Nền trắng và xám rất nhạt `#F5F8FA` để nội dung dễ đọc.

**Chữ:** dùng Be Vietnam Pro (hỗ trợ đầy đủ tiếng Việt). Nội dung chính tối thiểu 16px trên điện thoại, dòng tiêu đề tối đa 2 dòng.

**Thành phần:**
- Nút chính (cam): mỗi màn hình tối đa một nút.
- Nút phụ (viền xanh đậm): cho hành động như "Xem học phí".
- Thẻ (card): có ảnh, tiêu đề ngắn và một dòng mô tả. Không có đoạn văn dài trong thẻ.
- Form: 4 trường (họ tên, số điện thoại/Zalo, lộ trình quan tâm, cơ sở). Các trường khác không bắt buộc.
- Vùng chạm tối thiểu 44px trên điện thoại. Tương phản chữ và nền đạt tiêu chuẩn WCAG AA.

## 5. Bố cục trang chủ (theo thứ tự từ trên xuống)

1. **Hero:** một câu nêu lợi ích chính ("Học nghề thực hành 70%, có bằng Trung cấp khi còn trẻ"), ảnh lớp học thật, một nút "Đăng ký tư vấn" và một liên kết "Xem học phí".
2. **Bằng chứng nhanh:** 3 con số hoặc điều kiện có thể kiểm chứng (tỉ lệ thực hành, thời gian học, cơ sở). Mỗi con số có ghi chú nguồn hoặc điều kiện.
3. **Hai lộ trình:** hai thẻ lớn, mỗi thẻ có độ tuổi phù hợp, thời gian học, bằng nhận được, và một liên kết.
4. **Cách học:** 4 bước từ nhập học đến đi làm, dạng timeline ngang trên desktop và dọc trên điện thoại.
5. **Ngành đào tạo:** lưới ảnh các ngành, mỗi ngành có một câu về công việc.
6. **Chính sách học phí:** giải thích ngắn NĐ 81, có ví dụ đối tượng, nút tra cứu.
7. **Học viên và hoạt động:** ảnh thật (`ies-student-event.png`, `ies-student-awards.png`) kèm một câu trích.
8. **Form đăng ký cuối trang:** tiêu đề ngắn, 4 trường, thông báo "Chúng tôi sẽ gọi trong 24 giờ làm việc" (chỉ dùng nếu trường cam kết được thời gian này).

## 6. Ứng dụng GenAI trong website

- **Trợ lý tư vấn (chatbot):** trả lời các câu hỏi thường gặp về hồ sơ, lịch học, học phí. Phải có nút chuyển sang nhân viên tư vấn. Không tự đưa ra cam kết về học phí hay việc làm.
- **Tóm tắt chương trình cho phụ huynh:** bản tóm tắt một trang, viết lại từ khung đào tạo bằng ngôn ngữ đơn giản, do người phụ trách tuyển sinh duyệt trước khi đăng.
- **Thư viện prompt cho giáo viên:** trang nội bộ hoặc trang "Dành cho giảng viên" với các mẫu prompt soạn hoạt động, giáo án, bài kiểm tra. Mẫu lấy theo cấu trúc của thư viện Google, điền sẵn bối cảnh IES.
- **Soạn nội dung truyền thông:** dùng AI để nháp bài đăng, nhưng người có chuyên môn phải kiểm tra thông tin trước khi đăng.

## 7. Chiến lược quảng bá

### 7.1 Định vị

Thông điệp cốt lõi: **học nghề thực chiến 70%, có bằng Trung cấp chính quy, và có lộ trình rõ ràng cho học sinh tốt nghiệp THCS và THPT.**

Lợi thế so với đối thủ: thời gian học ngắn, nhiều thực hành, có điều kiện học phí theo chính sách nhà nước, có hướng thực tập tại doanh nghiệp.

Điều cần tránh: hứa "miễn 100% học phí" không kèm điều kiện, hoặc hứa việc làm chắc chắn. Chính sách cần ghi rõ đối tượng và hồ sơ, theo đúng nội dung trang chính sách hiện có.

### 7.2 Kênh và vai trò

| Kênh | Đối tượng | Vai trò | Nội dung |
|---|---|---|---|
| Facebook và TikTok | Học sinh THCS, THPT | Nhận biết | Video ngắn lớp thực hành, học viên kể nghề, ngày hội tuyển sinh |
| Zalo OA | Phụ huynh | Chăm sóc, nhắc hạn | Thông báo đợt tuyển sinh, tài liệu học phí, lịch tư vấn |
| Google Business Profile và tìm kiếm | Phụ huynh tìm "trung cấp Sài Gòn", "học nghề sau THCS" | Chuyển đổi | Trang lộ trình, đánh giá, số điện thoại |
| Trường THCS và THPT | Học sinh cuối cấp | Tiếp cận trực tiếp | Buổi hướng nghiệp, tư vấn tại trường |
| Email và form | Người đã để thông tin | Nuôi dưỡng | Bộ tài liệu theo từng bước: lộ trình, học phí, hồ sơ |

### 7.3 Phễu và chỉ số

1. **Nhận biết:** lượt xem video, lượt tiếp cận, lượt tìm kiếm thương hiệu.
2. **Quan tâm:** lượt xem trang lộ trình, lượt nhấn "Xem học phí".
3. **Đăng ký tư vấn:** số form gửi, tỉ lệ form trên lượt xem trang.
4. **Nhập học:** số hồ sơ hoàn chỉnh, tỉ lệ nhập học trên số tư vấn.

Đo bằng Google Analytics và công cụ đã có trong dự án (`analytics`). Mỗi đợt, ghi lại nguồn của từng form để biết kênh nào tạo ra nhập học.

### 7.4 Nhịp truyền thông

Lịch chi tiết theo đợt tuyển sinh của trường. Khung chung:
- **Trước đợt tuyển sinh (2–3 tháng):** video giới thiệu nghề, bài viết giải đáp chính sách, tham gia ngày hội hướng nghiệp.
- **Trong đợt tuyển sinh:** quảng cáo trả phí theo từ khóa và địa phương, buổi tư vấn trực tuyến, Zalo nhắc hạn.
- **Sau đợt tuyển sinh:** kể chuyện học viên, cập nhật thực tập và việc làm để củng cố uy tín cho đợt sau.

### 7.5 Nội dung

Bốn nhóm nội dung chính:
1. **Nghề và công việc:** một ngành mỗi tuần, nói rõ công việc đầu tiên sau khi học.
2. **Chính sách:** giải thích NĐ 81 và NĐ 24 bằng ví dụ thực tế. Có cảnh báo điều kiện áp dụng.
3. **Học viên:** video hoặc bài viết ngắn về một ngày học, một dự án, một buổi thực tập.
4. **Giải đáp:** các câu hỏi phụ huynh hay hỏi, trả lời trong 1 trang ngắn.

### 7.6 Ngân sách

Không đưa ra con số cụ thể vì chưa có dữ liệu chi phí của trường. Phân bổ đề xuất theo tỉ lệ:
- Quảng cáo trả phí: khoảng 50%, tập trung vào đợt tuyển sinh.
- Sản xuất nội dung (video, ảnh, bài viết): khoảng 30%.
- Zalo, email, công cụ đo lường: khoảng 10%.
- Dự phòng: khoảng 10%.

Trường cần điền số thật để chia lại theo ngân sách.

## 8. Lộ trình triển khai

1. **Giai đoạn 1 (1–2 tháng):** xác nhận thông tin chính sách với phòng tuyển sinh, làm trang Chọn lộ trình và form mới, đo lại chỉ số nền.
2. **Giai đoạn 2 (2–3 tháng):** làm lại trang chủ và trang ngành, bật Zalo OA, chạy nội dung theo nhịp đã định.
3. **Giai đoạn 3 (liên tục):** đánh giá theo đợt, thử nghiệm tiêu đề và ảnh, mở rộng trợ lý AI khi đã có câu hỏi thường gặp đủ dữ liệu.

## 9. Giả định và việc cần xác nhận

- Chính sách học phí và điều kiện NĐ 81 cần phòng tuyển sinh xác nhận trước khi đăng.
- Số liệu "70% thực hành" và thời gian học lấy từ trang hiện tại. Cần kiểm tra lại với chương trình đào tạo chính thức.
- Ảnh học viên có thể dùng khi đã có sự đồng ý của người trong ảnh.
- Trợ lý AI cần quy trình chuyển sang người thật và kiểm tra nội dung trước khi triển khai.
