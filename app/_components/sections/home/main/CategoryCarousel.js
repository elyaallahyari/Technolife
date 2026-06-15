'use client'

import Image from 'next/image'
import useSWR from 'swr'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useRef } from 'react'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api' || 'http://localhost:4000/api'

export default function CategoryCarousel() {
  const { data, error, isLoading } = useSWR(`${API_URL}/category`, fetcher)

  const autoplay = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false
    })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      direction: 'rtl',
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true
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
    <div className="relative w-full text-[#1b3570]">
      {isLoading && <p className="text-center py-10">در حال بررسی...</p>}

      {error && <p className="text-center py-10 text-red-500">مشکلی پیش آمده...</p>}

      {data && (
        <>
          <div className="relative max-w-330 mx-auto px-4 overflow-hidden" ref={emblaRef} dir="rtl">
            <div className="flex items-center gap-16 p-4 my-9">
              {data.map((item) => (
                <Link
                  key={item._id}
                  href={`/category/${item.en_name}`}
                  className="
                    flex-[0_0_auto]
                    flex
                    flex-col
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex justify-center items-center rounded-full border-4 box-border transition-colors duration-300 border-[#14a1de7b] hover:border-[#14a1de]
                    "
                  >
                    <Image
                      unoptimized
                      src={item.image}
                      alt={item.name}
                      width={112}
                      height={112}
                      className="w-28 h-28 rounded-full border border-[#f0f0f0] m-1 object-cover cursor-pointer"
                      priority
                    />
                  </div>

                  <span className="font-medium text-center whitespace-nowrap">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              z-10
              w-10
              h-10
              rounded-full
              bg-white/80
              shadow-md
              backdrop-blur
              transition
              hover:scale-105
            "
          >
            ←
          </button>

          <button
            onClick={scrollPrev}
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              z-10
              w-10
              h-10
              rounded-full
              bg-white/80
              shadow-md
              backdrop-blur
              transition
              hover:scale-105
            "
          >
            →
          </button>
        </>
      )}
    </div>
  )
}
