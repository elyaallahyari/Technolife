import Skeleton from '@/app/_components/ui/Skeleton'

export default function TripleBannerSkeleton() {
  return (
    <section className="p-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <Skeleton className="h-60 flex-1" />
        <Skeleton className="h-60 flex-1" />
        <Skeleton className="h-60 flex-1" />
      </div>
    </section>
  )
}
