'use client'
import Image from 'next/image'
import Logo from '@/public/media/white_logo.svg'
import { FaChevronUp } from 'react-icons/fa'

const FirstUl = [
  {
    id: 0,
    name: 'بلاگ',
    link: ''
  },
  {
    id: 1,
    name: 'تخفیف نوروزی',
    link: ''
  },
  {
    id: 2,
    name: 'خرید گوشی',
    link: ''
  },
  {
    id: 3,
    name: 'گوشی سامسونگ',
    link: ''
  },
  {
    id: 4,
    name: 'گوشی آیفون',
    link: ''
  },
  {
    id: 5,
    name: 'گوشی پوکو',
    link: ''
  },
  {
    id: 6,
    name: 'مقایسه گوشی',
    link: ''
  },
  {
    id: 7,
    name: 'خرید لپ‌تاپ',
    link: ''
  },
  {
    id: 8,
    name: 'هندزفری بلوتوثی',
    link: ''
  }
]

const SecondUl = [
  {
    id: 0,
    name: 'خرید طلا',
    link: ''
  },
  {
    id: 1,
    name: 'گیمینگ',
    link: ''
  },
  {
    id: 2,
    name: 'آیفون ۱۷',
    link: ''
  },
  {
    id: 3,
    name: 'آیفون ۱۷ پرومکس',
    link: ''
  },
  {
    id: 4,
    name: 'گوشی ۱۷ a',
    link: ''
  },
  {
    id: 5,
    name: 'گوشی s25 سامسونگ',
    link: ''
  },
  {
    id: 6,
    name: 'ساعت هوشمند',
    link: ''
  },
  {
    id: 7,
    name: 'مانیتور',
    link: ''
  },
  {
    id: 8,
    name: 'هارد اکسترنال',
    link: ''
  },
  {
    id: 9,
    name: 'لوازم خانگی',
    link: ''
  }
]

const ThirdUl = [
  {
    id: 0,
    name: 'تکنولایف در یک نگاه',
    link: ''
  },
  {
    id: 1,
    name: 'اهداف و تعهد‌های ما',
    link: ''
  },
  {
    id: 2,
    name: 'سوالات متداول',
    link: ''
  },
  {
    id: 3,
    name: 'فروشگاه‌های حضوری',
    link: ''
  },
  {
    id: 4,
    name: 'تماس با ما',
    link: ''
  },
  {
    id: 5,
    name: 'گزارش سال ۱۴۰۳',
    link: ''
  }
]

const FourthUl = [
  {
    id: 0,
    name: 'راهنمای خرید اقساطی',
    link: ''
  },
  {
    id: 1,
    name: 'خرید سازمانی',
    link: ''
  },
  {
    id: 2,
    name: 'راهنمای خرید از تکنولایف',
    link: ''
  },
  {
    id: 3,
    name: 'روش‌های خرید از تکنولایف',
    link: ''
  },
  {
    id: 4,
    name: 'ضمانت هفت‌روزه تکنولایف',
    link: ''
  },
  {
    id: 5,
    name: 'شیوه‌ها و هزینه ارسال',
    link: ''
  }
]

const FifthUl = [
  {
    id: 0,
    name: 'تضمین رجیستری',
    link: ''
  },
  {
    id: 1,
    name: 'تخفیف نوروزی',
    link: ''
  },
  {
    id: 2,
    name: 'رویه‌های بازگرداندن کالا',
    link: ''
  },
  {
    id: 3,
    name: 'سوالات متداول رجیستری',
    link: ''
  },
  {
    id: 4,
    name: 'رهگیری سفارش‌ها',
    link: ''
  },
  {
    id: 5,
    name: 'راهنمای مرجوعی در سایت',
    link: ''
  }
]

const SixthUl = [
  {
    id: 0,
    name: 'قوانین و مقررات',
    link: ''
  },
  {
    id: 1,
    name: 'حریم خصوصی کاربران',
    link: ''
  },
  {
    id: 2,
    name: 'از زبان مشتریان تکنولایف',
    link: ''
  },
  {
    id: 3,
    name: 'چرا تکنولایف؟',
    link: ''
  }
]

export default function Footerr() {
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

        <section className="grid grid-cols-3 gap-4 w-full text-sm">
          {FirstUl.length > 0 && (
            <nav className="flex flex-col gap-2 w-full mt-4">
              <div className="text-xl font-medium">دسترسی سریع</div>
              <ul className="flex flex-col gap-3">
                {FirstUl.map((item) => (
                  <li key={item.id}>
                    <div>{item.name}</div>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {SecondUl.length > 0 && (
            <nav className="flex flex-col gap-2 w-full mt-4">
              <div className="text-xl font-medium">پرفروش‌ترین محصولات</div>
              <ul className="flex flex-col gap-3">
                {SecondUl.map((item) => (
                  <li key={item.id}>
                    <div>{item.name}</div>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {ThirdUl.length > 0 && (
            <nav className="flex flex-col gap-2 w-full mt-4">
              <div className="text-xl font-medium">درباره‌ما</div>
              <ul className="flex flex-col gap-3">
                {ThirdUl.map((item) => (
                  <li key={item.id}>
                    <div>{item.name}</div>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {FourthUl.length > 0 && (
            <nav className="flex flex-col gap-2 w-full mt-4">
              <div className="text-xl font-medium">پیش از خرید</div>
              <ul className="flex flex-col gap-3">
                {FourthUl.map((item) => (
                  <li key={item.id}>
                    <div>{item.name}</div>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {FifthUl.length > 0 && (
            <nav className="flex flex-col gap-2 w-full mt-4">
              <div className="text-xl font-medium">پس از خرید</div>
              <ul className="flex flex-col gap-3">
                {FifthUl.map((item) => (
                  <li key={item.id}>
                    <div>{item.name}</div>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {SixthUl.length > 0 && (
            <nav className="flex flex-col gap-2 w-full mt-4">
              <div className="text-xl font-medium">قوانین و مقررات</div>
              <ul className="flex flex-col gap-3">
                {SixthUl.map((item) => (
                  <li key={item.id}>
                    <div>{item.name}</div>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </section>

        <hr className="w-full" />
      </footer>
    </>
  )
}
