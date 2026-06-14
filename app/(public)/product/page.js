import AllProducts from '@/app/_components/sections/product/AllProducts'
import Loading from './loading'
import { Suspense } from 'react'

export const metadata = {
  title: 'محصولات فروشگاه تکنولایف',
  description: 'محصولات فروشگاه اینترنتی تکنولایف'
}

export const dynamic = 'force-dynamic'

export default async function Product() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <AllProducts />
      </Suspense>
    </>
  )
}
