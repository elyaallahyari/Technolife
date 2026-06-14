import { requireAuth } from '@/lib/dal/Auth.dal'
import { BiUser } from 'react-icons/bi'

export const metadata = {
  title: 'مشخصات فردی - تکنولایف'
}

export const dynamic = 'force-dynamic'

export default async function Profile() {
  const session = await requireAuth()

  return (
    <section className="flex flex-col items-start justify-center gap-12 px-4 py-6 md:gap-20 md:px-10 lg:px-18 text-[#223c76]">
      <div className="flex items-center gap-2">
        <BiUser size={24} />
        <p className="text-lg font-extrabold md:text-xl">مشخصات فردی</p>
      </div>

      <div className="relative flex w-full flex-col items-center gap-4 md:flex-row md:items-center md:gap-3">
        <div className="z-10 flex items-center justify-center rounded-full border border-[#f0f0f0] bg-white p-6 shadow-xl md:p-8">
          <BiUser size={24} className="font-extralight" />
        </div>

        <section
          className="
            relative flex w-full flex-wrap items-center
            justify-center gap-y-6 gap-x-8
            rounded-lg bg-[#f0f2f5]
            px-4 py-6 md:px-8
            md:justify-evenly
            md:before:absolute
            md:before:top-1/2
            md:before:-right-11
            md:before:h-1
            md:before:w-11
            md:before:bg-[#f0f2f5]
          "
        >
          <div className="flex min-w-30 flex-col items-center">
            <span className="text-[#5f6c91]">نام و نام‌خانوادگی</span>
            <span>-</span>
          </div>

          <div className="flex min-w-30 flex-col items-center">
            <span className="text-[#5f6c91]">پست الکترونیکی</span>
            <span>-</span>
          </div>

          <div className="flex min-w-30 flex-col items-center">
            <span className="text-[#5f6c91]">شماره موبایل</span>
            <span>-</span>
          </div>

          <div className="flex min-w-30 flex-col items-center gap-2">
            <span className="text-[#5f6c91]">کد ملی</span>
            <span className="text-xs text-[#000511] break-all">{session.id}</span>
          </div>

          <div className="flex min-w-30 flex-col items-center">
            <span className="text-[#5f6c91]">دریافت خبرنامه</span>
            <span className="text-[#000511]">خیر</span>
          </div>

          <div className="flex min-w-30 flex-col items-center">
            <span className="text-[#5f6c91]">شماره کارت</span>
            <span>-</span>
          </div>
        </section>

        <div className="md:absolute md:top-[90%] md:left-28 md:z-10">
          <button className="rounded-lg bg-[#223c78] px-4 py-2 text-sm text-white">
            ویرایش اطلاعات
          </button>
        </div>
      </div>
    </section>
  )
}
