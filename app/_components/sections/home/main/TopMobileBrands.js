import ImageSamsung from '@/public/media/static_phone_samsung.webp'
import ImagePoco from '@/public/media/static_phone_poco.webp'
import ImageIphone from '@/public/media/static_phone_iphone.webp'
import ImageHonor from '@/public/media/static_phone_honor.webp'
import ImageXiaomi from '@/public/media/static_phone_xiaomi.webp'
import Image from 'next/image'

const topMobiles = [
  {
    id: 0,
    name: 'سامسونگ',
    image: ImageSamsung
  },
  {
    id: 1,
    name: 'پوکو',
    image: ImagePoco
  },
  {
    id: 2,
    name: 'آیفون',
    image: ImageIphone
  },
  {
    id: 3,
    name: 'آنر',
    image: ImageHonor
  },
  {
    id: 4,
    name: 'شیائومی',
    image: ImageXiaomi
  }
]

export default function TopMobileBrands() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4 px-4">
      <h2 className="font-extrabold text-3xl leading-6 my-6">برترین‌های موبایل</h2>
      <div className="flex flex-row gap-6  flex-wrap">
        {topMobiles &&
          topMobiles.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center cursor-pointer">
              <Image src={item.image} alt={item.name} width={180} height={180}></Image>
              <span>{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  )
}
