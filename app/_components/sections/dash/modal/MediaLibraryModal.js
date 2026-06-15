'use client'
import Image from 'next/image'
import useSWR from 'swr'
import { CgClose } from 'react-icons/cg'
import { FaCheck } from 'react-icons/fa6'

const fetcher = (url) => fetch(url).then((res) => res.json())

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function MediaLibraryModal({
  isVisible,
  selectedItems,
  onToggleSelection,
  onClose
}) {
  const { data: media } = useSWR(`${API_URL}/media`, fetcher)

  if (!isVisible) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>

      <section className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div
          className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col pointer-events-auto overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-xl font-bold">کتابخانه تصاویر</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl">
              <CgClose />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {media && Array.isArray(media) && media.length > 0 ? (
                media.map((item) => {
                  const isSelected = selectedItems?.some((i) => i._id === item._id)
                  return (
                    <div
                      key={item?._id}
                      onClick={() => onToggleSelection(item)}
                      className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-transparent hover:border-gray-300'}`}
                    >
                      <Image
                        unoptimized
                        src={item?.url}
                        alt={item.url}
                        width={200}
                        height={50}
                        priority
                        className="object-cover"
                      />
                    </div>
                  )
                })
              ) : (
                <p className="col-span-full text-center text-gray-500">تصویری یافت نشد.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
