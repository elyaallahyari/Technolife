import AddProduct from '@/app/_components/sections/dash/product/AddProduct'

export const metadata = {
  title: 'افزودن محصول - تکنولایف'
}

export const dynamic = 'force-dynamic'

export default async function Products() {
  return (
    <>
      <AddProduct />
    </>
  )
}
