import Skeleton from '@/app/_components/ui/Skeleton'

export default function TopBrandsSkeleton() {
  return (
    <div className="p-8">
      <section className="flex border rounded-xl h-34 border-gray-300">
        <div className="w-64 flex flex-col items-center justify-center gap-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-32 h-5" />
        </div>

        <div className="flex items-center gap-6 px-6 flex-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="w-24 h-16" />
          ))}
        </div>
      </section>
    </div>
  )
}
