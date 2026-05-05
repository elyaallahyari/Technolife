import Image from 'next/image'
import Logo from '@/public/media/logo_new.svg'

export const metadata = {
  title: 'ورود | ثبت‌نام فروشگاه تکنولایف',
  description: 'ورود به فروشگاه اینترنتی تکنولایف'
}

export default async function Account() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full! p-4 pt-8 w-[452px] pb-8  2xl:h-screen! 2xl:p-[42px] 2xl::shadow-1800">
        <Image alt="Technolife logo" width={184} height={50} priority src={Logo}></Image>
        <div className="mb-[55px] mt-8 flex flex-col items-center justify-center gap-4 gap-[42px] tall:mb-[50px] tall:mt-[92px]">
          <div className="font-medium text-[22px] flex items-center gap-3">
            <span>ورود</span>
            <span className="flex w-0 h-[18px] border-l-2 border-gray-700 sm:border-l-[1.5px"></span>
            <span>ثبت‌نام</span>
          </div>
          <p className="font-bold text-sm">خوش اومدی :)</p>
        </div>
        <form action="" className="flex flex-col w-full">
          <label htmlFor="phoneNumber" className="text-gray-500 text-sm p-3">
            شماره موبایل خود را وارد کنید{' '}
          </label>
          <input type="number" className="border border-gray-200 p-3 rounded-xl" />
          <button
            type="submit"
            className="w-full p-3 bg-[#223c76] rounded-xl text-white cursor-pointer mt-[132px] text-sm font-bold"
          >
            ادامه
          </button>
        </form>
        <div>
          <p className="pt-4 text-[11px] font-medium w-full text-gray-500 sm:pt-6 2xl:fixed 2xl:bottom-[42px] 2xl:px-4">
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
