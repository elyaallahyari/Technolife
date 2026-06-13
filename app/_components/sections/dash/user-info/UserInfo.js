import { BiUser } from 'react-icons/bi'

export default function UserInfo({ userId }) {
  return (
    <div className="flex flex-row items-center gap-3 w-full relative">
      <div className="flex items-center justify-center p-8 bg-white border border-[#f0f0f0] rounded-full shadow-xl z-10">
        <BiUser size={24} className="font-extralight" />
      </div>

      <section className="bg-[#f0f2f5] flex flex-row items-center justify-evenly flex-wrap relative gap-8 px-8 py-6 rounded-lg before:absolute before:w-11 before:h-1 before:-right-11 before:bg-[#f0f2f5] before:top-1/2">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#5f6c91]">نام و نام‌خانوادگی</span>
          <span>-</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#5f6c91]">پست الکترونیکی</span>
          <span>-</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#5f6c91]">شماره موبایل</span>
          <span>-</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#5f6c91]">کد ملی</span>
          <span className="text-xs text-[#000511]">{userId}</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#5f6c91]">دریافت خبرنامه</span>
          <span className="text-[#000511]">خیر</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#5f6c91]">شماره کارت</span>
          <span>-</span>
        </div>
      </section>

      <div className="absolute z-10 top-full -left-3 md:left-28 md:top-[90%]">
        <button
          className="text-white bg-[#223c78] p-1 md:p-2 md
        :px-4  text-sm rounded-lg"
        >
          ویرایش اطلاعات
        </button>
      </div>
    </div>
  )
}
