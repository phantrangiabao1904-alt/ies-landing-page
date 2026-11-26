import Link from 'next/link';
import { logoutStaff } from '@/actions/staff-auth';
import { getAllDocumentsForAdmin } from '@/actions/site-documents';
import { DOCUMENT_CATEGORIES } from '@/lib/documents/categories';
import DocumentEditor from '@/app/admin/documents/DocumentEditor';
import { requireStaff } from '@/lib/supabase/staff';

export const dynamic = 'force-dynamic';

export default async function AdminDocumentsPage() {
  await requireStaff(['ADMIN', 'BA']);
  const documents = await getAllDocumentsForAdmin();

  return (
    <main id="main-content" tabIndex={-1} className="staff-page min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="staff-card mb-8 flex flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">IES • Quản trị tài liệu</p>
            <h1 className="mt-1 text-3xl font-extrabold text-[#0F5587]">Học phí & Chính sách</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/admin/content" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] hover:bg-sky-50">
              Quản lý Landing Page
            </Link>
            <Link href="/admin/media" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] hover:bg-sky-50">
              Thay ảnh website
            </Link>
            <Link href="/admin" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] hover:bg-sky-50">
              Danh sách hồ sơ
            </Link>
            <form action={logoutStaff}>
              <button className="min-h-[44px] rounded-lg border border-slate-300 px-4 font-semibold text-slate-700 hover:bg-white">
                Đăng xuất
              </button>
            </form>
          </div>
        </header>

        <DocumentEditor />

        <section className="mt-8 space-y-3" aria-label="Danh sách tài liệu">
          <h2 className="text-xl font-bold text-[#0F5587]">Tài liệu đã có ({documents.length})</h2>
          
          {documents.length === 0 && <p className="text-slate-600">Chưa có tài liệu nào.</p>}
          
          {DOCUMENT_CATEGORIES.map((category) => {
            const categoryDocs = documents.filter((d) => d.category === category.id);
            if (categoryDocs.length === 0) return null;
            return (
              <div key={category.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="mb-3 font-bold text-[#0F5587]">{category.label}</h3>
                <div className="space-y-2">
                  {categoryDocs.map((doc) => (
                    <article key={doc.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex-1 min-w-[200px]">
                          <p className="font-semibold text-slate-900">{doc.title}</p>
                          {doc.description && <p className="mt-1 text-sm text-slate-600">{doc.description}</p>}
                          {doc.published_year && <p className="text-xs text-slate-500">Năm {doc.published_year}</p>}
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${doc.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}`}>
                            {doc.status === 'published' ? 'Đã đăng' : 'Nháp'}
                          </span>
                          <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#3764AF] hover:underline">
                            Xem PDF
                          </a>
                        </div>
                      </div>
                      <DocumentEditor document={doc} />
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
