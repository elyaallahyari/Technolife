import SaleTimer from '@/app/_components/ui/SaleTimer'
import Image from 'next/image'
import Loading from './loading'
import { Suspense } from 'react'

export const metadata = {
  title: 'محصولات تخفیف‌دار',
  description: 'لیست محصولات دارای تخفیف'
}

async function getSaleProducts() {
  const res = await fetch('http://localhost:4000/api/product/sale', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  return res.json()
}

export default async function Sale() {
  const data = await getSaleProducts()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-wrap justify-center items-center gap-8 p-2 my-4">
          {data &&
            data.map((item) => (
              <div
                key={item._id}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_20%] cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-4 h-full shadow">
                  <div className="flex justify-center">
                    <Image
                      src={item.media?.[0]?.url}
                      alt={item.name}
                      width={186}
                      height={186}
                      className=" object-contain h-45 w-auto"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-bold line-clamp-2">{item.name}</h3>

                  <div className="flex justify-between w-full mt-8">
                    <div className="bg-[#a2191f] rounded h-4 min-w-6 px-1 text-white text-xs flex justify-center items-center gap-0/5">
                      <span>%</span>
                      <span>{item.sale}</span>
                    </div>

                    <div>
                      <div className="flex flex-row justify-end items-center gap-1 w-full">
                        <div>
                          {(
                            Number(item.price) -
                            (Number(item.price) * Number(item.sale)) / 100
                          ).toLocaleString()}
                        </div>
                        <span className="text-sm"> تومان</span>
                      </div>
                      <div className="w-full flex flex-row justify-end items-center gap-1 text-gray-400 text-sm">
                        <del>{item.price.toLocaleString()}</del>
                        <span className="text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>

                  <hr className="my-3 text-gray-300" />

                  <div className="text-cente flex items-center justify-between">
                    <div className="text-xs text-gray-500">زمان باقی مانده</div>

                    <div className="font-bold text-[#750e13] text-sm underline tracking-wider">
                      <SaleTimer />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Suspense>
    </>
  )
}
