import Image from 'next/image'
import Banner01 from '@/public/media/banner_SecondTripletBanners_01.webp'
import Banner02 from '@/public/media/banner_SecondTripletBanners_02.webp'
import Banner03 from '@/public/media/banner_SecondTripletBanners_03.webp'

export default function SecondTripletBanners() {
  return (
    <section className="px-4 py-8">
      <aside className="mx-auto w-full flex max-w-7xl flex-col gap-7 lg:flex-row">
        <div className="w-full lg:flex-1">
          <Image
            src={Banner01}
            alt="Speaker Banner"
            priority
            className="h-auto w-full rounded-xl"
          />
        </div>

        <div className="w-full lg:flex-1">
          <Image src={Banner02} alt="Fridge Banner" priority className="h-auto w-full rounded-xl" />
        </div>

        <div className="w-full lg:flex-1">
          <Image
            src={Banner03}
            alt="Medical Banner"
            priority
            className="h-auto w-full rounded-xl"
          />
        </div>
      </aside>
    </section>
  )
}
