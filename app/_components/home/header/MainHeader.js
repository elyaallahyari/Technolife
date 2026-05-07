import Image from 'next/image'
import Logo from '@/public/media/logo_new.svg'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'

export default function MainHeader() {
  return (
    <header className="flex flex-row items-center justify-between p-6 bg-white sticky top-0">
      <div className="flex flex-row items-center justify-start w-full gap-9">
        <Link href={'/'}>
          <Image src={Logo} width={110} height={42} alt="Logo of Technolife" priority></Image>
        </Link>
        <div className="w-full relative">
          <CiSearch className="text-gray-400 w-8 h-8 absolute top-3 right-3" />
          <input
            type="text"
            placeholder="محصول، برند یا دسته موردنظرتان را جستجو کنید"
            className="bg-gray-100 max-w-163 max-h-20 w-full h-full p-5 rounded-xl indent-7"
          />
        </div>
      </div>

      <nav className="flex flex-row items-center justify-between gap-5">
        <div className="flex flex-row items-center justify-around rounded-xl border border-[#223c78] bg-transparent text-black p-2 h-10 w-38">
          <Link href={'/sign-in'}>ورود</Link>
          <span className="w-0 h-full border rounded-xl border-r-[#223c78]"></span>
          <Link href={'/sign-up'}>ثبت‌نام</Link>
        </div>
        <div className="flex items-center justify-center p-2 border border-gray-100 rounded-xl w-10 h-10">
          <IoCartOutline className="text-[#223c78] w-9 h-9 cursor-pointer" />
        </div>
      </nav>
    </header>
  )
}
