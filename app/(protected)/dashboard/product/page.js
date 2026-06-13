import ProductSection from '@/app/_components/sections/dash/product/ProductSection'
import Add from '@/app/_components/ui/add'
import Link from 'next/link'

export const metadata = {
  title: 'محصولات فروشگاه - تکنولایف'
}

export const dynamic = 'force-dynamic'

export default async function Products() {
  return (
    <>
      <div className="p-2 px-18 flex flex-col items-center justify-center text-[#223c76] gap-6 relative">
        <Link href={'/dashboard/product/add'} className="absolute top-2 right-2">
          <Add />
        </Link>
        <ProductSection />
      </div>
    </>
  )
}
