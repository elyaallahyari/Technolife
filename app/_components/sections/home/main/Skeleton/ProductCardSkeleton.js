import Skeleton from '@/app/_components/ui/Skeleton'

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white px-4 h-full">
      <div className="flex justify-center">
        <Skeleton className="w-[180px] h-[180px]" />
      </div>

      <div className="mt-4 space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
      </div>

      <div className="mt-8 flex justify-between">
        <Skeleton className="w-8 h-5" />

        <div className="flex flex-col gap-2 items-end">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-20 h-3" />
        </div>
      </div>
    </div>
  )
}