alter table public.leads
  add column if not exists province text,
  add column if not exists dormitory boolean not null default false;
