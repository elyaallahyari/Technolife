'use client'

import Image from 'next/image'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function AllProducts() {
  const { data } = useSWR(`${API_URL}/product`, fetcher)
  return (
    <section className="flex flex-row justify-center items-center flex-wrap gap-6">
      {data ? (
        data.map((item) => (
          <Link
            href={`/product/${item._id}`}
            key={item._id}
            className="flex flex-col items-center justify-center p-2 rounded-lg border border-[#f0f0f0] shadow max-w-60 h-full max-h-120 w-full"
          >
            <Image
              src={item.media[0]?.url}
              alt="image"
              width={206}
              height={206}
              className="w-full"
            ></Image>
            <div className="px-2 pt-6 text-sm w-full">
              <div>{item.name}</div>
              <div className="flex flex-row justify-end pt-2 text-gray-700 text-sm">
                {item.category?.name}
              </div>
            </div>
            <div className="pt-6 w-full">
              <div className="flex justify-between px-2 pb-2 w-full">
                {item.sale > 0 ? (
                  <div className="flex justify-between w-full">
                    <div className="bg-red-500 rounded h-4 min-w-6 px-1 text-white text-xs flex justify-center items-center gap-0/5">
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
                ) : (
                  <div className="w-full flex flex-row justify-end items-center gap-1">
                    <span>{item.price.toLocaleString()}</span>
                    <span className="text-sm"> تومان</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="text-sm pt-15 pb-30 text-red-500">مشکل در برقراری اطلاعات با سرور...</div>
      )}
    </section>
  )
}
