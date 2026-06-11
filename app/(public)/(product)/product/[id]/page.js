import { notFound } from 'next/navigation'
import Image from 'next/image'
import ProductGallery from '@/app/_components/sections/product/ProductGallery'
import Link from 'next/link'

export default async function SingleProduct({ params }) {
  const { id } = await params

  const response = await fetch(`http://localhost:4000/api/product/${id}`, {
    cache: 'no-store'
  })

  if (response.status === 404) {
    notFound()
  }

  const product = await response.json()

  const finalPrice =
    product.sale > 0 ? product.price - (product.price * product.sale) / 100 : product.price

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 text-sm text-gray-500 flex gap-2">
        <span>
          <Link href={'/'}>خانه</Link>
        </span>
        <span>/</span>
        <span>
          <Link href={`/${product.category?.en_name}Category`}>{product.category?.name}</Link>
        </span>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="flex flex-col-reverse gap-8 lg:flex-row">
        <div className="flex-1">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <ProductGallery images={product.media} />

            <div className="mt-8">
              <div className="mb-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-1 text-sm text-blue-600">
                  {product.category.name}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm">
                  {product.brand.name}
                </span>
              </div>

              <h1 className="mb-6 text-3xl font-bold text-gray-900">{product.name}</h1>

              <div className="mb-8 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border">
                  <Image
                    src={product.brand.logo}
                    alt={product.brand.name}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">برند</p>
                  <p className="font-medium">{product.brand.name}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="mb-4 font-bold">مشخصات محصول</h3>

                <div className="grid gap-3 text-sm">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">دسته‌بندی</span>
                    <span>{product.category.name}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">برند</span>
                    <span>{product.brand.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">شناسه محصول</span>
                    <span>{product._id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-87.5">
          <div className="sticky top-24">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-lg font-bold">اطلاعات خرید</h3>

              {product.sale > 0 && (
                <>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-gray-500">قیمت اصلی</span>

                    <span className="text-gray-400 line-through">
                      {product.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-gray-500">تخفیف</span>

                    <span className="rounded-lg bg-red-100 px-2 py-1 text-red-600">
                      {product.sale}%
                    </span>
                  </div>
                </>
              )}

              <div className="mb-6 rounded-2xl bg-green-50 p-4">
                <p className="mb-1 text-sm text-gray-500">قیمت نهایی</p>

                <p className="text-3xl font-bold text-green-600">{finalPrice.toLocaleString()}</p>

                <span className="text-sm text-gray-500">تومان</span>
              </div>

              <div className="mb-6 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">وضعیت</span>

                  <span className="font-medium text-green-600">موجود در انبار</span>
                </div>
              </div>

              <button className="mb-3 w-full rounded-xl bg-blue-600 py-4 font-medium text-white transition hover:bg-blue-700">
                افزودن به سبد خرید
              </button>

              <button className="w-full rounded-xl border py-4 font-medium">
                افزودن به علاقه‌مندی‌ها
              </button>

              <div className="mt-6 space-y-3 text-sm text-gray-500">
                <div>✓ ارسال سریع</div>
                <div>✓ ضمانت اصالت کالا</div>
                <div>✓ پشتیبانی ۲۴ ساعته</div>
                <div>✓ امکان بازگشت کالا</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
