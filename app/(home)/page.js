import Carousel from '@/app/_components/home/main/Carousel'
import CategoryCarousel from '@/app/_components/home/main/CategoryCarousel'
import TechnoTime from '@/app/_components/home/main/TechnoTime'
import CenterTripletBanners from '@/app/_components/home/main/CenterTripletBanners'
import SecondTripletBanners from '@/app/_components/home/main/SecondTripletBanners'
import TopMobileBrands from '@/app/_components/home/main/TopMobileBrands'

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
    </>
  )
}
