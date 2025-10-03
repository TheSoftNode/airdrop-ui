/**
 * Skeleton loader for AirdropCard component
 * Maintains consistent layout while loading
 */

function AirdropCardSkeleton() {
  return (
    <article className="rounded-2xl border border-zinc-700/50 bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-7 w-full max-w-[400px] animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="h-8 w-32 bg-zinc-800 rounded-md" />
        <div className="h-6 w-16 bg-zinc-800 rounded-full" />
      </div>

      {/* Progress Bar Skeleton */}
      <div className="mb-4">
        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-zinc-700 rounded-full" />
        </div>
        <div className="flex justify-between mt-2">
          <div className="h-4 w-12 bg-zinc-800 rounded" />
          <div className="h-4 w-12 bg-zinc-800 rounded" />
        </div>
      </div>

      {/* Details Section Skeleton */}
      <section className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-zinc-700/50">
          <div className="h-4 w-32 bg-zinc-800 rounded" />
          <div className="h-4 w-16 bg-zinc-800 rounded" />
        </div>
        <div className="flex justify-between items-center py-2 border-b border-zinc-700/50">
          <div className="h-4 w-28 bg-zinc-800 rounded" />
          <div className="h-4 w-20 bg-zinc-800 rounded" />
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="h-3 w-24 bg-zinc-800 rounded" />
          <div className="h-3 w-32 bg-zinc-800 rounded" />
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="h-3 w-16 bg-zinc-800 rounded" />
          <div className="h-3 w-20 bg-zinc-800 rounded" />
        </div>
      </section>

      {/* Action Button Skeleton */}
      <div className="mt-6 flex justify-end">
        <div className="h-9 w-12 bg-zinc-800 rounded-full" />
      </div>
    </article>
  )
}

export default AirdropCardSkeleton
