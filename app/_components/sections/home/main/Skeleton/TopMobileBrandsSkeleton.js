import Skeleton from '@/app/_components/ui/Skeleton'

export default function TopMobileBrandsSkeleton() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Skeleton className="w-52 h-8" />

      <div className="flex gap-6 flex-wrap justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <Skeleton className="w-45 h-45 rounded-full" />
            <Skeleton className="w-20 h-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
