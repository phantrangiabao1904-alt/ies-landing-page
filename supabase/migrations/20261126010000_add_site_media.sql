-- Quản lý ảnh có thể thay đổi trên website (theo từng vị trí/slot).
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

create policy site_media_public_read
  on public.site_media
  for select
  to anon, authenticated
  using (true);

-- Bucket công khai để lưu file ảnh do admin tải lên.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'site-media',
  'site-media',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Chỉ service_role được ghi file vào bucket (admin upload qua server action).
create policy site_media_bucket_public_read
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'site-media');
