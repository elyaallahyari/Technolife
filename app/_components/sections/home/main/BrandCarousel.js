'use client'

import Image from 'next/image'
import useSWR from 'swr'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useRef } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function BrandCarousel() {
  const { data, error, isLoading } = useSWR(`${API_URL}/brand`, fetcher)

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
    <div className="relative mx-auto overflow-hidden h-full">
      {isLoading && <p className="text-center py-10">در حال بررسی...</p>}

      {error && <p className="text-center py-10 text-red-500">مشکلی پیش آمده...</p>}

      {data && (
        <>
          <div className="relative mx-auto overflow-hidden h-full px-5" ref={emblaRef} dir="rtl">
            <div className="flex items-center gap-4 h-full w-full">
              {data.map((item) => (
                <div
                  key={item._id}
                  className="flex-[0_0_auto] flex items-center border-l border-[#8a8f9a] p-9"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={116}
                    height={112}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute
              left-2
              top-1/2
              -translate-y-1/2
              z-10
              w-10
              h-10
              rounded-full
              bg-white/80
              shadow-xl
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
              shadow-xl
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
