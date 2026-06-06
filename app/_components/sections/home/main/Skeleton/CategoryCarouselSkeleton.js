import Skeleton from '@/app/_components/ui/Skeleton'

export default function CategoryCarouselSkeleton() {
  return (
    <div className="px-4 my-9">
      <div className="flex gap-16 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <Skeleton className="w-28 h-28 rounded-full" />
            <Skeleton className="w-16 h-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
