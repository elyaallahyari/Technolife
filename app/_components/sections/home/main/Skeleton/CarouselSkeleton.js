import Skeleton from '@/app/_components/ui/Skeleton'

export default function CarouselSkeleton() {
  return (
    <div className="relative w-full">
      <Skeleton className="w-full aspect-[16/5]" />

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="w-3 h-3 rounded-full" />
        ))}
      </div>
    </div>
  )
}
