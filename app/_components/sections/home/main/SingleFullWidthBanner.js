import Image from 'next/image'
import Banner from '@/public/media/banner_SingleFullWidthBanner.webp'

export default function SingleFullWidthBanner() {
  return (
    <section className="p-8">
      <aside className="flex flex-col items-center justify-center w-full my-7">
        <Image
          unoptimized
          src={Banner}
          width={1611}
          height={240}
          alt="Speaker Banner"
          priority
          className="rounded-xl w-full cursor-pointer"
        ></Image>
      </aside>
    </section>
  )
}
