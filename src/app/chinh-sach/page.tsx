import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { getPublishedDocuments } from '@/actions/site-documents';
import { DOCUMENT_CATEGORIES } from '@/lib/documents/categories';

// Dữ liệu lấy từ Supabase khi admin đăng tài liệu mới, nên render động.
export const dynamic = 'force-dynamic';

export default async function ChinhSachPage() {
  const allDocuments = await getPublishedDocuments();

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-[#FAF5EF] to-white px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-[#0F5587] sm:text-5xl">
              Học phí & Chính sách
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Các tài liệu về học phí, chính sách tuyển sinh, quy chế và những thông tư từ Bộ Giáo dục & Đào tạo.
            </p>
          </div>

          <div className="space-y-8">
            {DOCUMENT_CATEGORIES.map((category) => {
              const categoryDocs = allDocuments.filter((d) => d.category === category.id);
              if (categoryDocs.length === 0) return null;

              return (
                <section key={category.id}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-1 w-12 rounded-full bg-[#F58232]" />
                    <h2 className="text-2xl font-bold text-[#0F5587]">{category.label}</h2>
                  </div>

                  <ul className="space-y-3">
                    {categoryDocs.map((doc) => (
                      <li key={doc.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                        <a
                          href={doc.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-3"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-[#0F5587] group-hover:text-[#3764AF] group-hover:underline">
                              {doc.title}
                            </h3>
                            {doc.description && (
                              <p className="mt-1 text-sm text-slate-600">{doc.description}</p>
                            )}
                            {doc.published_year && (
                              <p className="mt-2 text-xs text-slate-500">Năm {doc.published_year}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-2 rounded-lg bg-[#e3efff] px-3 py-2 font-semibold text-[#0F5587] group-hover:bg-[#d1e3ff]">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                            </svg>
                            PDF
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}

            {allDocuments.length === 0 && (
              <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
                <p className="text-slate-600">Chưa có tài liệu nào. Vui lòng quay lại sau.</p>
              </div>
            )}
          </div>

          <div className="mt-12 rounded-xl border border-[#2DBEDC] bg-[#E0F7FA] p-6 sm:p-8">
            <h3 className="font-bold text-[#0F5587]">Cần hỗ trợ?</h3>
            <p className="mt-2 text-slate-700">
              Liên hệ với bộ phận tuyển sinh để được giải đáp về học phí, chính sách và các quy định:
            </p>
            <div className="mt-4 flex flex-col gap-2 font-semibold text-slate-900">
              <p>0901.309.866 / 0919.532.848</p>
              <p>tuyensinh@iescollege.edu.vn</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
