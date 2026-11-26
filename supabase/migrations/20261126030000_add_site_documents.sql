-- Tài liệu/chính sách (PDF) do admin tải lên và công khai trên website.
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

create policy site_documents_public_read_published
  on public.site_documents
  for select
  to anon, authenticated
  using (status = 'published');

create index if not exists idx_site_documents_published on public.site_documents(status, category);

-- Cho phép tải lên PDF vào bucket site-media (giữ nguyên ảnh).
update storage.buckets
set file_size_limit = 20971520,
    allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
where id = 'site-media';
