import SaleTimer from '@/app/_components/ui/SaleTimer'
import Image from 'next/image'

export const metadata = {
  title: 'دسته‌بندی آیفون',
  description: 'لیست موبایل‌های آیفون'
}

async function getMobileCategories() {
  const res = await fetch('http://localhost:4000/api/product/category/iphone', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  return res.json()
}

export default async function IphoneCategory() {
  const data = await getMobileCategories()

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-8 p-2 my-4">
        {data &&
          data.products.map((item) => (
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
            </div>
          ))}
      </div>
    </>
  )
}
