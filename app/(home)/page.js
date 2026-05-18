import Carousel from '@/app/_components/home/main/Carousel'
import CategoryCarousel from '@/app/_components/home/main/CategoryCarousel'

export const metadata = {
  title: 'فروشگاه اینترنتی تکنولایف',
  description: 'وب‌سایت فروشگاه اینترنتی تکنولایف'
}

export default function Home() {
  return (
    <>
      <Carousel />
      <CategoryCarousel />
    </>
  )
}
