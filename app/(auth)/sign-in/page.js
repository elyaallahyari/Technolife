import Image from 'next/image'
import Logo from '@/public/media/logo_new.svg'
import Link from 'next/link'
import SignInForm from '@/app/_components/sections/auth/sign-in-form'
import { ToastContainer } from 'react-toastify'

export const metadata = {
  title: 'ورود | فروشگاه تکنولایف',
  description: 'ورود به فروشگاه اینترنتی تکنولایف'
}

export default async function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <ToastContainer position="top-right" />

      <div className="flex flex-col items-center justify-center h-full! p-4 pt-8 w-113 pb-8  2xl:h-screen! 2xl:p-10.5 2xl::shadow-1800">
        <Link href={'/'}>
          <Image alt="Technolife logo" width={184} height={50} priority src={Logo}></Image>
        </Link>
        <div className="mb-13.75 mt-8 flex flex-col items-center justify-center gap-4 tall:mb-[50px] tall:mt-[92px]">
          <div className="font-medium text-[22px] flex items-center gap-3">
            <span className="text-[#223c76] border-b-2">ورود</span>
            <span className="flex w-0 h-4.5 border-l-2 border-gray-700 sm:border-l-[1.5px"></span>
            <span>
              <Link href={'/sign-up'}>ثبت‌نام</Link>
            </span>
          </div>
          <p className="font-bold text-sm">خوش اومدی :)</p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
