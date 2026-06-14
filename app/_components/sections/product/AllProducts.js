import Image from 'next/image'
import Link from 'next/link'

const API_URL = process.env.NEXT_PUBLIC_API_URL

async function getProducts() {
  const res = await fetch(`${API_URL}/product`, {
    next: { revalidate: 300 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  return res.json()
}

export default async function AllProducts() {
  const data = await getProducts()

  return (
    <section className="flex flex-row justify-center items-center flex-wrap gap-6">
      {data.map((item) => (
        <Link
          href={`/product/${item._id}`}
          key={item._id}
          className="flex flex-col items-center justify-center p-2 rounded-lg border border-[#f0f0f0] shadow max-w-60 w-full"
        >
          <Image
            unoptimized
            src={item.media[0]?.url}
            alt="image"
            width={206}
            height={206}
            className="w-full h-auto"
          />

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
                  <div className="bg-red-500 rounded h-4 min-w-6 px-1 text-white text-xs flex justify-center items-center">
                    % {item.sale}
                  </div>

                  <div>
                    <div className="text-right">
                      {(
                        Number(item.price) -
                        (Number(item.price) * Number(item.sale)) / 100
                      ).toLocaleString()}{' '}
                      تومان
                    </div>

                    <div className="text-gray-400 text-sm text-right">
                      <del>{item.price.toLocaleString()} تومان</del>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full text-right">{item.price.toLocaleString()} تومان</div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}
