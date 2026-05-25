import ProductSection from '@/app/_components/sections/dash/product/ProductSection'
import Add from '@/app/_components/ui/add'
import Link from 'next/link'

export const metadata = {
  title: 'محصولات فروشگاه - تکنولایف'
}

export default async function Products() {
  return (
    <>
      <div className="p-9 px-18 flex flex-col items-start justify-center text-[#223c76] gap-20 relative">
        <Link href={'/dashboard/product/add'} className="absolute top-[10%] right-[2%]">
          <Add />
        </Link>
        <ProductSection />
      </div>
    </>
  )
}
