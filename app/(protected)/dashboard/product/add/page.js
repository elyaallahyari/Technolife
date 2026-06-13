import AddProduct from '@/app/_components/sections/dash/product/AddProduct'
import { requireAuth } from '@/lib/dal/Auth.dal'

export const metadata = {
  title: 'افزودن محصول - تکنولایف'
}

export const dynamic = 'force-dynamic'

export default async function Products() {
  await requireAuth()

  return (
    <>
      <AddProduct />
    </>
  )
}
