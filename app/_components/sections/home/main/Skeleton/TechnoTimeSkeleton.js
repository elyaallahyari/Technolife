import Skeleton from '@/app/_components/ui/Skeleton'
import ProductCardSkeleton from './ProductCardSkeleton'

export default function TechnoTimeSkeleton() {
  return (
    <div className="p-8">
      <section className="rounded-2xl h-129 bg-gray-100">
        <div className="flex justify-between items-center p-6 bg-white">
          <div className="flex gap-3 items-center">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-28 h-6" />
          </div>

          <Skeleton className="w-20 h-5" />
        </div>

        <div className="flex gap-2 px-2 mt-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex-[0_0_16%]">
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
