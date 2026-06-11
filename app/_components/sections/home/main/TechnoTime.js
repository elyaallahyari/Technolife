'use client'

import Image from 'next/image'
import Background from '@/public/media/technoTime_background.webp'
import logo from '@/public/media/technotime_logo.webp'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import useSWR from 'swr'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { useRef, useCallback } from 'react'
import SaleTimer from '@/app/_components/ui/SaleTimer'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function TechnoTime() {
  const { data, isLoading, error } = useSWR('http://localhost:4000/api/product/sale', fetcher)

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
      <section
        className="px-1 relative overflow-hidden rounded-2xl bg-cover bg-center h-129"
        style={{
          backgroundImage: `url(${Background.src})`
        }}
      >
        <div className="flex items-center justify-between p-3 px-6 text-white">
          <div className="flex items-center gap-3">
            <Image src={logo} width={28} height={28} alt="technotime logo" />

            <span className="font-bold text-xl">تکنو تایم</span>
          </div>

          <Link
            href={'/sale'}
            className="flex items-center gap-1 text-sm hover:opacity-80 transition"
          >
            <span>نمایش همه</span>
            <FiChevronLeft />
          </Link>
        </div>

        {isLoading && <p className="text-center text-white py-10">در حال بارگذاری...</p>}

        {error && <p className="text-center text-red-300 py-10">خطا در دریافت اطلاعات</p>}

        {data && (
          <>
            <div className="overflow-hidden p-2 mt-4" ref={emblaRef} dir="rtl">
              <div className="flex gap-2">
                {data.map((item) => (
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
                        rounded-2xl
                        p-4
                        h-full
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
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
