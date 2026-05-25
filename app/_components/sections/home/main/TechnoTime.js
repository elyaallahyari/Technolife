import Image from 'next/image'
import Background from '@/public/media/technoTime_background.webp'
import logo from '@/public/media/technotime_logo.webp'
import { FiChevronLeft } from 'react-icons/fi'

export default function TechnoTime() {
  return (
    <div className="p-8">
      <section
        className="bg-center bg-no-repeat bg-cover flex flex-col justify-between items-center max-w-screen w-full h-full rounded-xl"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <div className="flex flex-row justify-around items-center w-full text-white p-4">
          <div className="flex flex-row justify-start items-center gap-4 w-full font-bold text-lg">
            <Image src={logo} width={24} height={24} alt="technotime logo"></Image>
            <span>تکنو تایم</span>
          </div>
          <div className="flex flex-row items-center justify-end w-full gap-2 text-sm">
            <span>نمایش همه</span>
            <FiChevronLeft size={12} />
          </div>
        </div>

        <div></div>
      </section>
    </div>
  )
}
