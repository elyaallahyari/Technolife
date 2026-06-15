import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'

export const revalidate = 300

async function getCategoryProducts(slug) {
  const response = await fetch(`${API_URL}/product/category/${slug}`)

  if (!response.ok) {
    return null
  }

  return response.json()
}

export async function generateStaticParams() {
  const response = await fetch(`${API_URL}/category`)

  if (!response.ok) {
    return []
  }

  const categories = await response.json()

  return categories.map((category) => ({
    slug: category.en_name
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  const data = await getCategoryProducts(slug)

  if (!data) {
    return {
      title: 'دسته‌بندی یافت نشد',
      description: 'دسته‌بندی مورد نظر پیدا نشد.'
    }
  }

  const categoryName = data.category?.name || slug

  return {
    title: `${categoryName} | تکنولایف`,
    description: `مشاهده محصولات دسته‌بندی ${categoryName}`
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params

  const data = await getCategoryProducts(slug)

  if (!data) {
    notFound()
  }

  if (!data.products?.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-10 py-20 text-center">
        <p>محصولی در این دسته‌بندی وجود ندارد.</p>

        <Link href="/" className="rounded-xl bg-blue-500 p-3 text-white">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{data.category?.name || slug}</h1>

        <p className="mt-2 text-sm text-gray-500">تعداد محصولات: {data.products.length}</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {data.products.map((item) => {
          const finalPrice =
            item.sale > 0 ? item.price - (item.price * item.sale) / 100 : item.price

          return (
            <Link
              href={`/product/${item._id}`}
              key={item._id}
              className="flex-[0_0_85%] cursor-pointer sm:flex-[0_0_45%] lg:flex-[0_0_20%]"
            >
              <div className="h-full rounded-2xl bg-white p-4 shadow">
                <div className="flex justify-center">
                  <Image
                    src={item.media?.[0]?.url}
                    alt={item.name}
                    width={186}
                    height={186}
                    className="h-45 w-auto object-contain"
                    unoptimized
                    priority
                  />
                </div>

                <h2 className="mt-4 line-clamp-2 text-sm font-bold">{item.name}</h2>

                <div className="mt-8 flex w-full justify-between">
                  {item.sale > 0 ? (
                    <div className="flex w-full justify-between">
                      <div className="flex min-w-6 items-center justify-center gap-0.5 rounded bg-[#a2191f] px-1 text-xs text-white h-4">
                        <span>%</span>
                        <span>{item.sale}</span>
                      </div>

                      <div>
                        <div className="flex items-center justify-end gap-1">
                          <span>{finalPrice.toLocaleString()}</span>

                          <span className="text-sm">تومان</span>
                        </div>

                        <div className="flex items-center justify-end gap-1 text-sm text-gray-400">
                          <del>{item.price.toLocaleString()}</del>

                          <span>تومان</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full items-center justify-end gap-1">
                      <span>{item.price.toLocaleString()}</span>

                      <span className="text-sm">تومان</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
