-- Dia a Dia - Supabase Schema
-- Run this in the Supabase SQL editor to set up the database

-- ============ STUDY ============
create table subjects (
  id bigint generated always as identity primary key,
  name text not null,
  icon text not null default 'calculator',
  color text not null default '#4f8cff',
  created_at timestamptz default now()
);

create table subject_topics (
  id bigint generated always as identity primary key,
  subject_id bigint references subjects(id) on delete cascade,
  name text not null,
  sort_order integer not null default 0,
  status text not null default 'pending' check (status in ('pending', 'current', 'done')),
  created_at timestamptz default now()
);

create table study_tasks (
  id bigint generated always as identity primary key,
  subject_id bigint references subjects(id) on delete cascade,
  day text not null,
  task text not null,
  topic text default '',
  done boolean default false,
  week_start date not null default (date_trunc('week', current_date + interval '1 day')::date - interval '1 day')::date,
  created_at timestamptz default now()
);

-- ============ SLEEP ============
create table sleep_schedules (
  id bigint generated always as identity primary key,
  name text not null,
  days integer[] not null default '{}',
  bedtime text not null default '23:00',
  wakeup text not null default '07:00',
  created_at timestamptz default now()
);

create table sleep_records (
  id bigint generated always as identity primary key,
  date date not null unique,
  bedtime text not null,
  wakeup text not null,
  created_at timestamptz default now()
);

-- ============ GYM ============
create table gym_templates (
  id bigint generated always as identity primary key,
  name text not null,
  color text not null default '#ff6b6b',
  created_at timestamptz default now()
);

create table gym_template_exercises (
  id bigint generated always as identity primary key,
  template_id bigint references gym_templates(id) on delete cascade,
  name text not null,
  default_sets integer not null default 4,
  default_reps text not null default '10-12',
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table workouts (
  id bigint generated always as identity primary key,
  date date not null default current_date,
  template_name text,
  color text default '#748ffc',
  start_time text not null,
  end_time text,
  duration_min integer default 0,
  created_at timestamptz default now()
);

create table workout_exercises (
  id bigint generated always as identity primary key,
  workout_id bigint references workouts(id) on delete cascade,
  name text not null,
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table workout_sets (
  id bigint generated always as identity primary key,
  exercise_id bigint references workout_exercises(id) on delete cascade,
  reps integer not null default 0,
  weight numeric not null default 0,
  sort_order integer default 0,
  created_at timestamptz default now()
);

-- ============ READING ============
create table books (
  id bigint generated always as identity primary key,
  title text not null,
  author text default '',
  cover_url text,
  cover_color text default '#8b5cf6',
  total_pages integer not null,
  current_page integer default 0,
  status text not null default 'wishlist' check (status in ('reading', 'done', 'wishlist')),
  start_date date,
  goal text default '',
  notes text default '',
  created_at timestamptz default now()
);

create table reading_log (
  id bigint generated always as identity primary key,
  book_id bigint references books(id) on delete cascade,
  date date not null default current_date,
  pages integer not null,
  created_at timestamptz default now(),
  unique(book_id, date)
);

-- ============ STORAGE ============
insert into storage.buckets (id, name, public) values ('covers', 'covers', true)
on conflict do nothing;

create policy "Public read covers" on storage.objects for select using (bucket_id = 'covers');
create policy "Anyone can upload covers" on storage.objects for insert with check (bucket_id = 'covers');
create policy "Anyone can delete covers" on storage.objects for delete using (bucket_id = 'covers');

-- ============ RLS ============
alter table subjects enable row level security;
alter table subject_topics enable row level security;
alter table study_tasks enable row level security;
alter table sleep_schedules enable row level security;
alter table sleep_records enable row level security;
alter table gym_templates enable row level security;
alter table gym_template_exercises enable row level security;
alter table workouts enable row level security;
alter table workout_exercises enable row level security;
alter table workout_sets enable row level security;
alter table books enable row level security;
alter table reading_log enable row level security;

-- Permissive policies (single user, no auth)
create policy "Allow all" on subjects for all using (true) with check (true);
create policy "Allow all" on subject_topics for all using (true) with check (true);
create policy "Allow all" on study_tasks for all using (true) with check (true);
create policy "Allow all" on sleep_schedules for all using (true) with check (true);
create policy "Allow all" on sleep_records for all using (true) with check (true);
create policy "Allow all" on gym_templates for all using (true) with check (true);
create policy "Allow all" on gym_template_exercises for all using (true) with check (true);
create policy "Allow all" on workouts for all using (true) with check (true);
create policy "Allow all" on workout_exercises for all using (true) with check (true);
create policy "Allow all" on workout_sets for all using (true) with check (true);
create policy "Allow all" on books for all using (true) with check (true);
create policy "Allow all" on reading_log for all using (true) with check (true);
