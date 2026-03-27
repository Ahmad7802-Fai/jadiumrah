export default function CicilanPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#f5f7f4]">
      <div className="h-12 border-b border-gray-200 bg-white md:h-14" />

      <div className="mx-auto max-w-6xl space-y-4 px-3 py-3 md:px-4 md:py-4">
        <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-52 animate-pulse rounded bg-gray-200" />

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl border bg-white p-3">
              <div className="h-9 w-9 animate-pulse rounded-xl bg-gray-200" />
              <div className="mt-2 h-3 w-20 animate-pulse rounded bg-gray-200" />
              <div className="mt-2 h-3 w-full animate-pulse rounded bg-gray-200" />
              <div className="mt-1 h-3 w-4/5 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>

        <div className="grid gap-2.5 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-2xl border bg-white p-3">
            <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
            <div className="mt-2 h-10 w-full animate-pulse rounded-xl bg-gray-200" />
            <div className="mt-4 h-3 w-24 animate-pulse rounded bg-gray-200" />
            <div className="mt-2 grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-10 animate-pulse rounded-xl bg-gray-200" />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-3">
            <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
            <div className="mt-2 h-4 w-32 animate-pulse rounded bg-gray-200" />
            <div className="mt-2 h-8 w-44 animate-pulse rounded bg-gray-200" />
            <div className="mt-2 h-3 w-28 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}