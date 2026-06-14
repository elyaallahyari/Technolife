import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 300

export async function generateMetadata({ params }) {
  const { slug } = params

  return {
    title: `محصولات دسته‌بندی ${slug}`,
    description: `محصولات دسته ${slug}`
  }
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default async function CategoryPage({ params }) {
  const { slug } = params

  const response = await fetch(`${API_URL}/product/category/${slug}`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) {
    notFound()
  }

  const product = await response.json()

  if (!product || !product.products || product.products.length === 0) {
    return (
      <div className="text-center py-20 flex flex-col items-center justify-center gap-10">
        <p>محصولی در این دسته‌بندی وجود ندارد.</p>
        <Link href="/" className="bg-blue-500 text-white rounded-xl p-3">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-8 p-2 my-4">
        {product &&
          product.products.map((item) => (
            <Link
              href={`/product/${item._id}`}
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
                  {item.sale > 0 ? (
                    <div className="flex justify-between w-full">
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
                  ) : (
                    <div className="w-full flex flex-row justify-end items-center gap-1">
                      <span>{item.price.toLocaleString()}</span>
                      <span className="text-sm"> تومان</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}
