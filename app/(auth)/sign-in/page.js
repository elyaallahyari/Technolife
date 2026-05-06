import Image from 'next/image'
// import Logo from '@/public/media/logo_new.svg'
import Logo from '../../../public/media/logo_new.svg'
import Link from 'next/link'
// import SignInForm from '@/app/_components/auth/sign-in-form'
import SignInForm from '../../_components/auth/sign-in-form'

export const metadata = {
  title: 'ورود | فروشگاه تکنولایف',
  description: 'ورود به فروشگاه اینترنتی تکنولایف'
}

export default async function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full! p-4 pt-8 w-113 pb-8  2xl:h-screen! 2xl:p-10.5 2xl::shadow-1800">
        <Image alt="Technolife logo" width={184} height={50} priority src={Logo}></Image>
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
        <div>
          <p className="pt-4 text-[11px] font-medium w-full text-gray-500 sm:pt-6 2xl:fixed 2xl:bottom-10.5 2xl:px-4">
            ورود | ثبت‌نام شما به معنای پذیرش
            <span className="text-blue-300 cursor-pointer">&nbsp;قوانین و مقررات&nbsp;</span> و
            <span className="text-blue-300 cursor-pointer">&nbsp;حریم خصوصی کاربران&nbsp;</span>
            تکنولایف است.
          </p>
        </div>
      </div>
    </div>
  )
}
