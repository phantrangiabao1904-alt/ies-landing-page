This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## IES application setup

The project uses Tailwind CSS v4 through `@tailwindcss/postcss`. Start the site from this directory:

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set the Supabase project URL, anon key, and service-role key. Keep the service-role key server-only; it is used by rate-limited Server Actions and after staff authorization checks.

Apply the SQL files in `supabase/migrations/` to the Supabase project, in filename order. Public lead submissions go through a validated, rate-limited Next.js Server Action; the `anon` and `authenticated` database roles have no direct access to the `leads` table. RLS stays enabled, and the server-only service role is used for database writes.

The second migration also creates:

- Hashed, database-backed rate limits for lead submissions, staff login, and analytics events.
- First-party page-view, form-click, and successful-submission events. Only aggregate analytics are shown to BA users.
- Public-read-only homepage content and an Admin-only drag-and-drop editor at `/admin/content`.

Admin and analytics pages require Supabase Auth users with `app_metadata.role` set to `ADMIN` or `BA`. Only `ADMIN` can view and export lead details or edit homepage content. The login page does not create staff accounts; provision roles through a trusted Supabase admin process.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
