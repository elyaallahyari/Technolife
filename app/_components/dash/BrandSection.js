'use client'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function BrandSection() {
  const { data, isLoading } = useSWR('http://localhost:4000/api/brand', fetcher)
  return (
    <section className="flex flex-col items-center justify-start gap-4">
      <div className="font-extrabold">{isLoading ? 'برندهای فروشگاه...' : 'برندهای فروشگاه'}</div>
      <div className="flex gap-4 flex-wrap">
        {data &&
          data.map((item) => (
            <div
              key={item._id}
              className="text-sm border border-[#f0f0f0] rounded-xl p-1 bg-[#fcfeff]"
            >
              <Image src={item.logo} alt={`${item.name}-icon`} width={50} height={50}></Image>
              <hr className="text-[#f0f0f0]" />
              {item.name}
            </div>
          ))}
      </div>
      <hr className="text-[#f0f0f0] w-full" />
      <div className="border border-[#f0f0f0] rounded-xl bg-[#fcfeff]">
        <form action="" className="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
          <div className="flex gap-2 items-center">
            <label htmlFor="name">نام برند</label>
            <input
              type="text"
              name="name"
              placeholder="نام برند را وارد کنید"
              className="p-2 rounded-xl border border-[#f0f0f0]"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="logo">آیکون برند</label>
            <input
              type="text"
              name="logo"
              placeholder=" url آیکون را وارد کنید"
              className="p-2 rounded-xl border border-[#f0f0f0]"
            />
          </div>

          <button type="submit" className="p-2 bg-[#223c76] text-sm text-white rounded-xl">
            ارسال
          </button>
        </form>
      </div>
    </section>
  )
}
