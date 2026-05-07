import Image from 'next/image'
import Logo from '@/public/media/white_logo.svg'
import { FaChevronUp } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center rounded-xl bg-linear-to-r from-[#0079b1] to-[#1b3570]  w-screen  text-white sticky bottom-0 p-5 gap-10">
        <div className="flex flex-row justify-between items-center mt-9 w-full">
          <Image src={Logo} width={174} height={50} alt="Logo of Technolife"></Image>
          <div className="flex flex-row justify-center items-center bg-white p-2 rounded-xl w-45 h-12 text-[#223c78] gap-2 cursor-pointer hover:bg-gray-50">
            <FaChevronUp />
            <span>بازگشت به بالا</span>
          </div>
        </div>
        <hr className="w-full" />
      </footer>
    </>
  )
}
