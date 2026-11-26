-- Quản lý bài viết tin tức trên website.
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

create policy site_posts_public_read_published
  on public.site_posts
  for select
  to anon, authenticated
  using (status = 'published' and published_at <= now());

-- Ghi bài chỉ qua server action dùng service_role (đã kiểm tra quyền ADMIN/STAFF).

create index idx_site_posts_published on public.site_posts(status, published_at desc);
create index idx_site_posts_category on public.site_posts(category, status);
