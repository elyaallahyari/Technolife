import BrandSection from '@/app/_components/sections/dash/brand/BrandSection'

export const metadata = {
  title: 'برندهای فروشگاه - تکنولایف'
}

export default async function Brands() {
  return (
    <>
      <div className="p-2 px-18 flex flex-col items-start justify-center text-[#223c76] gap-20">
        <BrandSection />
      </div>
    </>
  )
}
