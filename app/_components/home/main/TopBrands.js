import { LiaCertificateSolid } from 'react-icons/lia'
import BrandCarousel from './BrandCarousel'

export default function TopBrands() {
  return (
    <div className="p-8">
      <section className="flex rounded-xl border-[#d3d8e4] border-2 h-34">
        <div className="flex flex-col items-center justify-center h-full gap-2 rounded-r-xl bg-linear-to-r from-[#0079b1] to-[#1b3570] text-white px-10 pb-2">
          <LiaCertificateSolid size={38} />
          <span className="font-extrabold text-xl">برند‌های منتخب</span>
        </div>

        <div className="p-3 relative mx-auto overflow-hidden">
          <BrandCarousel />
        </div>
      </section>
    </div>
  )
}
