import AllProducts from '@/app/_components/sections/product/AllProducts'
import Loading from './loading'
import { Suspense } from 'react'

export const metadata = {
  title: 'محصولات فروشگاه تکنولایف',
  description: 'محصولات فروشگاه اینترنتی تکنولایف'
}

export default async function Product() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <>
      <Suspense fallback={<Loading />}>
        <AllProducts />
      </Suspense>
    </>
  )
}
