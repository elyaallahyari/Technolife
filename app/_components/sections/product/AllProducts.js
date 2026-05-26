'use client'

import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function AllProducts() {
  const { data } = useSWR('http://localhost:4000/api/product', fetcher)
  return (
    <section className="flex flex-row justify-center items-center flex-wrap gap-6">
      {data &&
        data.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center justify-center p-2 rounded-xl border border-[#f0f0f0]"
          >
            <Image src={item.media[0]?.url} alt="image" width={80} height={150}></Image>
            <div> {item.name}</div>
            <div>{item.price}تومان</div>
            <div>{item.sale}%</div>
            <div>{item.category?.name}</div>
            <div>{item.brand?.name}</div>
          </div>
        ))}
    </section>
  )
}
