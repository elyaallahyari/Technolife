import CategorySection from '@/app/_components/sections/dash/category/CategorySection'

export const metadata = {
  title: 'دسته‌بندی‌های فروشگاه - تکنولایف'
}

export default async function Categories() {
  return (
    <>
      <div className="p-2 px-18 flex flex-col items-start justify-center text-[#223c76] gap-20">
        <CategorySection />
      </div>
    </>
  )
}
