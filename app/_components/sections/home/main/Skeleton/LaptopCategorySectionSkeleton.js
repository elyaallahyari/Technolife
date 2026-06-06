import Skeleton from '@/app/_components/ui/Skeleton'
import ProductCardSkeleton from './ProductCardSkeleton'

export default function ProductSectionSkeleton({ title = '' }) {
  return (
    <div className="p-8">
      <section className="rounded-xl border border-gray-300 h-129">
        <div className="flex justify-between items-center p-9">
          <Skeleton className="w-40 h-7" />
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
