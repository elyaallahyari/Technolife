import Carousel from '@/app/_components/sections/home/main/Carousel'
import CategoryCarousel from '@/app/_components/sections/home/main/CategoryCarousel'
import TechnoTime from '@/app/_components/sections/home/main/TechnoTime'
import CenterTripletBanners from '@/app/_components/sections/home/main/CenterTripletBanners'
import SecondTripletBanners from '@/app/_components/sections/home/main/SecondTripletBanners'
import TopMobileBrands from '@/app/_components/sections/home/main/TopMobileBrands'
import SingleFullWidthBanner from '@/app/_components/sections/home/main/SingleFullWidthBanner'
import TopBrands from '@/app/_components/sections/home/main/TopBrands'

export const metadata = {
  title: 'فروشگاه اینترنتی تکنولایف',
  description: 'وب‌سایت فروشگاه اینترنتی تکنولایف'
}

export default function Home() {
  return (
    <>
      <Carousel />
      <CategoryCarousel />
      <TechnoTime />
      <CenterTripletBanners />
      <SecondTripletBanners />
      <TopMobileBrands />
      <SingleFullWidthBanner />
      <TopBrands />
    </>
  )
}
