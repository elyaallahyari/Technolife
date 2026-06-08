'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import Slider01 from '@/public/media/SlideHeroBanner01.webp'
import Slider02 from '@/public/media/SlideHeroBanner02.webp'
import Slider03 from '@/public/media/SlideHeroBanner03.webp'
import Slider04 from '@/public/media/SlideHeroBanner04.webp'
import Slider05 from '@/public/media/SlideHeroBanner05.webp'
import Slider06 from '@/public/media/SlideHeroBanner06.webp'
import Slider07 from '@/public/media/SlideHeroBanner07.webp'
import Slider08 from '@/public/media/SlideHeroBanner08.webp'
import Slider09 from '@/public/media/SlideHeroBanner09.webp'
import Slider10 from '@/public/media/SlideHeroBanner10.webp'
import Slider11 from '@/public/media/SlideHeroBanner11.gif'
import Slider12 from '@/public/media/SlideHeroBanner12.webp'
import Slider13 from '@/public/media/SlideHeroBanner13.webp'
import Slider14 from '@/public/media/SlideHeroBanner14.webp'

const slides = [
  Slider14,
  Slider13,
  Slider01,
  Slider02,
  Slider03,
  Slider04,
  Slider05,
  Slider06,
  Slider07,
  Slider08,
  Slider09,
  Slider10,
  Slider11,
  Slider12
]

export default function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      direction: 'rtl',
      align: 'start',
      containScroll: 'trimSnaps'
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false
      })
    ]
  )

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef} dir="rtl">
        <div className="flex">
          {slides.map((src, index) => (
            <div key={index} className="relative flex-[0_0_100%]">
              <Image
                src={src}
                alt={`slide-${index}`}
                className="w-full h-auto block cursor-pointer"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollNext}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 w-10 h-10 rounded-full"
      >
        ←
      </button>
      <button
        onClick={scrollPrev}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 w-10 h-10 rounded-full"
      >
        →
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-black w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
