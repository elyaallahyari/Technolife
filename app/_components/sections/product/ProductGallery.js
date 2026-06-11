'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images?.[0]?.url)

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-112.5 overflow-hidden rounded-2xl border border-gray-100 bg-white">
        <Image
          src={selectedImage}
          alt="product image"
          fill
          priority
          className="object-contain p-5"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {images?.map((image) => (
          <button
            key={image._id}
            onClick={() => setSelectedImage(image.url)}
            className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition ${
              selectedImage === image.url ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <Image
              src={image.url}
              alt="thumbnail"
              fill
              className="object-contain bg-white p-1"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
