import BrandSection from '@/app/_components/dash/BrandSection'

export const metadata = {
  title: 'برندهای فروشگاه'
}

export default async function Brands() {
  return (
    <>
      <div className="p-9 px-18 flex flex-col items-start justify-center text-[#223c76] gap-20">
        <BrandSection />
      </div>
    </>
  )
}
