'use client'

import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useSWR from 'swr'
import Link from 'next/link'
import { useRef, useCallback } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

const fetcher = (url) => fetch(url).then((res) => res.json())

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function LaptopCategorySection() {
  const { data, isLoading, error } = useSWR(`${API_URL}/product/category/laptop`, fetcher)

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false
    })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      direction: 'rtl',
      align: 'start',
      containScroll: 'trimSnaps'
    },
    [autoplay.current]
  )

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <div className="p-8">
      <section className="relative overflow-hidden rounded-xl border bg-transparent border-gray-400 h-129">
        <div className="flex items-center justify-between p-9">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl">دسته‌بندی لپ‌تاپ</span>
          </div>

          <Link
            href={'/laptopCategory'}
            className="flex items-center gap-1 text-sm hover:opacity-80 transition"
          >
            <span>نمایش همه</span>
            <FiChevronLeft />
          </Link>
        </div>

        {isLoading && <p className="text-center py-10">در حال بارگذاری...</p>}

        {error && <p className="text-center text-red-300 py-10">خطا در دریافت اطلاعات</p>}

        {data && (
          <>
            <div className="overflow-hidden p-2 mt-4" ref={emblaRef} dir="rtl">
              <div className="flex gap-2">
                {data.products.map((item) => (
                  <Link
                    href={`/product/${item._id}`}
                    key={item._id}
                    className="
                              flex-[0_0_85%]
                              sm:flex-[0_0_45%]
                              lg:flex-[0_0_16%]
                            "
                  >
                    <div
                      className="
                                bg-white
                                px-4
                                h-full border-l border-gray-300
                              "
                    >
                      <div className="flex justify-center">
                        <Image
                          src={item.media?.[0]?.url}
                          alt={item.name}
                          width={186}
                          height={186}
                          className="
                                    object-contain
                                    h-45
                                    w-auto
                                  "
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
            </div>

            <button
              onClick={scrollPrev}
              className="
                        absolute
                        top-1/2
                        right-3
                        -translate-y-1/2
                        z-20
                        w-11
                        h-11
                        rounded-full
                        bg-white/99
                        shadow-lg
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        transition
                        cursor-pointer
                      "
            >
              <FiChevronRight size={20} />
            </button>

            <button
              onClick={scrollNext}
              className="
                        absolute
                        top-1/2
                        left-3
                        -translate-y-1/2
                        z-20
                        w-11
                        h-11
                        rounded-full
                        bg-white/99
                        shadow-lg
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        transition
                        cursor-pointer
                      "
            >
              <FiChevronLeft size={20} />
            </button>
          </>
        )}
      </section>
    </div>
  )
}
