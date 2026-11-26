-- ==================== MIGRATIONS ALL-IN-ONE ====================
-- Chạy file này trên Supabase SQL Editor để khởi tạo site_media, site_posts và site_documents.

-- ==================== 1. SITE_MEDIA ==================== 
create table if not exists public.site_media (
  slot text primary key check (length(btrim(slot)) between 3 and 80),
  label text not null check (length(btrim(label)) between 2 and 120),
  url text not null check (length(btrim(url)) between 8 and 500),
  alt text not null default '' check (length(alt) <= 200),
  updated_at timestamptz not null default now()
);

alter table public.site_media enable row level security;
revoke all on table public.site_media from anon, authenticated;
grant select on table public.site_media to anon, authenticated;
grant select, insert, update, delete on table public.site_media to service_role;

create policy site_media_public_read on public.site_media for select to anon, authenticated using (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('site-media', 'site-media', true, 20971520, array['image/jpeg', 'image/png', 'image/webp', 'application/pdf'])
on conflict (id) do update
  set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

create policy site_media_bucket_public_read on storage.objects for select to anon, authenticated using (bucket_id = 'site-media');

-- ==================== 2. SITE_POSTS ====================
create table if not exists public.site_posts (
  id bigserial primary key,
  title text not null check (length(btrim(title)) between 5 and 200),
  description text not null check (length(btrim(description)) between 10 and 500),
  content text not null check (length(btrim(content)) > 20),
  category text not null check (category in ('tuyensinh', 'hoctap', 'doanhnghiep', 'doisong')),
  author_name text not null check (length(btrim(author_name)) between 2 and 100),
  image_url text not null check (length(btrim(image_url)) between 8 and 500),
  image_alt text not null default '' check (length(image_alt) <= 200),
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by text not null
);

alter table public.site_posts enable row level security;
revoke all on table public.site_posts from anon, authenticated;
grant select on table public.site_posts to anon, authenticated;
grant all on table public.site_posts to service_role;

create policy site_posts_public_read_published on public.site_posts for select to anon, authenticated
  using (status = 'published' and published_at <= now());

create index idx_site_posts_published on public.site_posts(status, published_at desc);
create index idx_site_posts_category on public.site_posts(category, status);

-- ==================== 3. SITE_DOCUMENTS ====================
-- Tài liệu PDF (học phí, chính sách, thông tư) do admin tải lên.
create table if not exists public.site_documents (
  id bigserial primary key,
  title text not null check (length(btrim(title)) between 5 and 200),
  category text not null check (category in ('hocphi', 'chinhsach', 'thongtu', 'quyche')),
  description text not null default '' check (length(description) <= 500),
  file_url text not null check (length(btrim(file_url)) between 8 and 500),
  published_year integer check (published_year between 2000 and 2100),
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.site_documents enable row level security;
revoke all on table public.site_documents from anon, authenticated;
grant select on table public.site_documents to anon, authenticated;
grant all on table public.site_documents to service_role;
grant usage, select on sequence public.site_documents_id_seq to service_role;

create policy site_documents_public_read_published on public.site_documents for select to anon, authenticated
  using (status = 'published');

create index idx_site_documents_published on public.site_documents(status, category);

-- ==================== 4. KHỞI TẠO DỮ LIỆU SITE_MEDIA ====================
-- Mục đích: Mỗi slot tương ứng 1 vị trí ảnh trên website. Admin có thể tải ảnh mới bằng /admin/media.
-- Trang chủ (5 vị trí):
insert into public.site_media (slot, label, url, alt) values
  ('home-hero', 'Ảnh hero trang chủ', '/images/stitch/photos/phong-may-lab.png', 'Phòng lab máy tính'),
  ('home-story-1', 'Cảm nhận sinh viên 1', '/images/stitch/photos/sv-le-hoang-phuc.png', 'Sinh viên Lê Hoàng Phúc'),
  ('home-story-2', 'Cảm nhận sinh viên 2', '/images/stitch/photos/sv-nguyen-minh-khoi.png', 'Sinh viên Nguyễn Minh Khôi'),
  ('home-story-3', 'Cảm nhận sinh viên 3', '/images/stitch/photos/sv-tran-thu-ha.png', 'Sinh viên Trần Thu Hà'),
  ('home-promo', 'Popup khuyến mãi trang chủ', '/images/home-promo-banner.jpg', 'Popup khuyến mãi')
on conflict do nothing;

-- Trang Ngành đào tạo (6 ảnh):
insert into public.site_media (slot, label, url, alt) values
  ('major-cntt', 'Công nghệ thông tin - Phòng lab', '/images/stitch/photos/phong-may-lab.png', 'Phòng lab máy tính'),
  ('major-thietke', 'Thiết kế đồ họa - Studio', '/images/stitch/photos/phong-thiet-ke.png', 'Phòng thiết kế đồ họa'),
  ('major-quantrimang', 'Quản trị mạng - Lab hạ tầng', '/images/stitch/photos/space-lab.png', 'Space lab hạ tầng mạng'),
  ('major-ketoan', 'Kế toán - Thư viện', '/images/stitch/photos/thu-vien.png', 'Thư viện số'),
  ('major-tuvan', 'Tư vấn hỗ trợ', '/images/stitch/photos/tu-van.png', 'Phòng tư vấn tuyển sinh'),
  ('major-livestream', 'Học trực tuyến', '/images/stitch/photos/livestream.png', 'Livestream học online')
on conflict do nothing;

-- Trang Giới thiệu (8 ảnh):
insert into public.site_media (slot, label, url, alt) values
  ('about-banner', 'Ảnh banner trang giới thiệu', '/images/stitch/photos/khuon-vien.png', 'Khuôn viên trường IES'),
  ('about-facility-1', 'Cơ sở vật chất 1', '/images/stitch/photos/phong-may-lab.png', 'Phòng lab máy tính'),
  ('about-facility-2', 'Cơ sở vật chất 2', '/images/stitch/photos/studio.png', 'Studio sáng tạo'),
  ('about-facility-3', 'Cơ sở vật chất 3', '/images/stitch/photos/thu-vien.png', 'Thư viện số'),
  ('about-facility-4', 'Cơ sở vật chất 4', '/images/stitch/photos/ky-tuc-xa.png', 'Ký túc xá sinh viên'),
  ('about-director', 'Hiệu trưởng', '/images/stitch/photos/hieu-truong.png', 'Hiệu trưởng IES'),
  ('about-vice-director-1', 'Phó hiệu trưởng 1', '/images/stitch/photos/pho-hieu-truong-nu.png', 'Phó hiệu trưởng'),
  ('about-vice-director-2', 'Phó hiệu trưởng 2', '/images/stitch/photos/pho-hieu-truong-nam.png', 'Phó hiệu trưởng')
on conflict do nothing;

-- Trang Tuyển sinh (3 ảnh):
insert into public.site_media (slot, label, url, alt) values
  ('admission-banner', 'Ảnh tuyển sinh', '/images/stitch/photos/cong-truong.png', 'Khuôn viên trường'),
  ('admission-degree', 'Chứng chỉ tốt nghiệp', '/images/stitch/photos/bang-tot-nghiep-ies.png', 'Bằng tốt nghiệp IES'),
  ('admission-decree', 'Chính sách Nghị định 81', '/images/stitch/photos/van-bang.png', 'Văn bằng và chứng chỉ')
on conflict do nothing;

-- Trang Hợp tác doanh nghiệp (1 ảnh):
insert into public.site_media (slot, label, url, alt) values
  ('partnership-banner', 'Ảnh hợp tác', '/images/stitch/photos/hop-tac-ky-ket.png', 'Ký kết hợp tác với doanh nghiệp')
on conflict do nothing;

-- Trang Đăng ký (1 ảnh):
insert into public.site_media (slot, label, url, alt) values
  ('registration-visual', 'Ảnh tư vấn đăng ký', '/images/stitch/photos/tu-van.png', 'Tư vấn tuyển sinh')
on conflict do nothing;
