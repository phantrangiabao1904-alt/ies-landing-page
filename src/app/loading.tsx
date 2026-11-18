export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Đang tải nội dung"
      className="min-h-screen bg-surface px-4 pb-16 pt-32 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="loading-skeleton mb-6 h-12 max-w-2xl rounded-xl" />
        <div className="loading-skeleton mb-12 h-6 max-w-xl rounded-lg" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="loading-skeleton aspect-[4/3] rounded-3xl" />
          <div className="flex flex-col justify-center gap-4">
            <div className="loading-skeleton h-8 max-w-lg rounded-lg" />
            <div className="loading-skeleton h-5 max-w-xl rounded-lg" />
            <div className="loading-skeleton h-5 max-w-md rounded-lg" />
            <div className="loading-skeleton mt-4 h-12 w-48 rounded-xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
