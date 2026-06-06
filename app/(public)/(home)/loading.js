import CarouselSkeleton from '@/app/_components/sections/home/main/Skeleton/CarouselSkeleton'
import CategoryCarouselSkeleton from '@/app/_components/sections/home/main/Skeleton/CategoryCarouselSkeleton'
import ProductSectionSkeleton from '@/app/_components/sections/home/main/Skeleton/IphoneCategorySectionSkeleton'
import SingleFullWidthBannerSkeleton from '@/app/_components/sections/home/main/Skeleton/SingleFullWidthBannerSkeleton'
import TechnoTimeSkeleton from '@/app/_components/sections/home/main/Skeleton/TechnoTimeSkeleton'
import TopBrandsSkeleton from '@/app/_components/sections/home/main/Skeleton/TopBrandsSkeleton'
import TopMobileBrandsSkeleton from '@/app/_components/sections/home/main/Skeleton/TopMobileBrandsSkeleton'
import TripleBannerSkeleton from '@/app/_components/sections/home/main/Skeleton/TripleBannerSkeleton'

export default function Loading() {
  return (
    <>
      <CarouselSkeleton />
      <CategoryCarouselSkeleton />
      <TechnoTimeSkeleton />
      <TripleBannerSkeleton />
      <ProductSectionSkeleton />
      <TripleBannerSkeleton />
      <TopMobileBrandsSkeleton />
      <SingleFullWidthBannerSkeleton />
      <ProductSectionSkeleton />
      <TopBrandsSkeleton />
    </>
  )
}
