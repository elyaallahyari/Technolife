import Skeleton from '@/app/_components/ui/Skeleton'
import ProductCardSkeleton from '../home/main/Skeleton/ProductCardSkeleton'

export default function AllProductsSkeleton() {
  return (
    <div className="p-8">
      <section className="rounded-2xl h-screen bg-transparent">
        <div className="flex flex-wrap gap-6 px-2 mt-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="flex-[0_0_16%]">
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
