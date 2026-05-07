'use client'
import { PiCoinsLight } from 'react-icons/pi'
import { TfiWallet } from 'react-icons/tfi'
import { ImGift } from 'react-icons/im'
import { CiShoppingBasket } from 'react-icons/ci'
import { RxTimer } from 'react-icons/rx'
import Image from 'next/image'
import Link from 'next/link'

export default function HorizontalMenu() {
  return (
    <nav className="flex flex-row items-center justify-start gap-11 p-3 text-gray-600 text-sm">
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="w-5 h-0 border border-b"></span>
          <span className="w-5 h-0 border border-b"></span>
          <span className="w-5 h-0 border border-b"></span>
        </div>
        دسته‌بندی محصولات
        <Image src={RxTimer} alt="f" width={10} hidden={10} />
      </div>

      <Link href={'/'} className="flex flex-row justify-center items-center gap-2 align-middle">
        <RxTimer className="w-5 h-5" />
        تونل زمان
      </Link>

      <Link href={'/'} className="flex flex-row justify-center items-center gap-2 align-middle">
        <CiShoppingBasket className="w-5 h-5" />
        خرید سازمانی
      </Link>

      <Link href={'/'} className="flex flex-row justify-center items-center gap-2 align-middle">
        <ImGift className="w-5 h-5" />
        کارت هدیه
      </Link>

      <Link href={'/'} className="flex flex-row justify-center items-center gap-2 align-middle">
        <TfiWallet className="w-5 h-5" />
        خرید اقساطی
      </Link>

      <Link href={'/'} className="flex flex-row justify-center items-center gap-2 align-middle">
        <PiCoinsLight className="w-5 h-5" />
        خرید طلای دیجیتال
      </Link>

      <Link
        href={'/'}
        className="flex flex-row justify-center items-center gap-2 align-middle text-[#223c78]"
      >
        فروشنده‌شو
      </Link>
    </nav>
  )
}
