import Banner01 from '@/public/media/banner_CenterTripletBanners_01.webp'
import Banner02 from '@/public/media/banner_CenterTripletBanners_02.webp'
import Banner03 from '@/public/media/banner_CenterTripletBanners_03.webp'
import Image from 'next/image'

export default function CenterTripletBanners() {
  return (
    <section className="p-8">
      <aside className="flex flex-col lg:flex-row items-center justify-center gap-3 w-full lg:gap-6 my-7">
        <Image
          src={Banner01}
          width={200}
          height={240}
          alt="Speaker Banner"
          className="rounded-xl w-full"
        ></Image>
        <Image
          src={Banner02}
          width={200}
          height={240}
          alt="Fridge Banner"
          className="rounded-xl w-full"
        ></Image>
        <Image
          src={Banner03}
          width={200}
          height={240}
          alt="Medical Banner"
          className="rounded-xl w-full"
        ></Image>
      </aside>
    </section>
  )
}
