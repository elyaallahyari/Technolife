import Image from 'next/image'
import Banner from '@/public/media/header-banner.gif'

export default function AdvertisingBanner() {
  return (
    <>
      <Image
        src={Banner}
        width={500}
        height={12}
        priority
        alt="banner of the technolife"
        className="w-screen max-h-12"
      ></Image>
    </>
  )
}
