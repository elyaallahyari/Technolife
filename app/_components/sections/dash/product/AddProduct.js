'use client'

import Image from 'next/image'
import { useState } from 'react'
import useSWR from 'swr'
import MediaLibraryModal from '../modal/MediaLibraryModal'
import { GrFormAdd } from 'react-icons/gr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function AddProduct() {
  const { data: brand } = useSWR(`${API_URL}/brand`, fetcher)
  const { data: category } = useSWR(`${API_URL}/category`, fetcher)

  const [showGallery, setShowGallery] = useState(false)

  const [media, setMedia] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    sale: 0,
    brand: '',
    category: ''
  })

  const toggleMediaSelection = (item) => {
    setMedia((prev) => {
      const exists = prev.find((i) => i._id === item._id)

      if (exists) {
        return prev.filter((i) => i._id !== item._id)
      } else {
        return [...prev, item]
      }
    })
  }

  const changeHandler = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const submitHandler = async (e) => {
    e.preventDefault()

    const newProduct = {
      name: formData.name,
      price: Number(formData.price),
      sale: Number(formData.sale),
      media: media.map((item) => item._id),
      category: formData.category,
      brand: formData.brand
    }

    try {
      const res = await fetch(`${API_URL}/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(newProduct)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'خطا در افزودن محصول')
      }

      console.log('SUCCESS : ', data)

      alert('محصول با موفقیت اضافه شد')

      setFormData({
        name: '',
        price: '',
        sale: 0,
        brand: '',
        category: ''
      })

      setMedia([])
    } catch (err) {
      console.log(err)
      alert(err.message)
    }
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col md:flex-row flex-wrap gap-8">
      <section className="border border-[#f0f0f0] rounded-xl flex flex-col justify-between items-center text-sm">
        <div className="p-3 bg-[#fcfeff] font-bold w-full rounded-t-xl">نام محصول</div>

        <hr className="w-full" />

        <div className="flex justify-center items-center p-3 gap-3">
          <label htmlFor="name">نام</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="نام محصول را وارد کنید"
            className="border border-[#f0f0f0] rounded-xl p-1"
          />
        </div>
      </section>

      <section className="border border-[#f0f0f0] rounded-xl flex flex-col justify-between items-center text-sm">
        <div className="p-3 bg-[#fcfeff] font-bold w-full rounded-t-xl">قیمت محصول</div>

        <hr className="w-full" />

        <div className="flex justify-center items-center p-3 gap-3 relative">
          <label htmlFor="price">قیمت</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={changeHandler}
            placeholder="قیمت محصول را وارد کنید"
            className="border border-[#f0f0f0] rounded-xl p-1 pr-3 pl-6"
          />

          <span className="flex absolute left-3.25 bottom-3.25 bg-[#fcfeff] p-1 rounded-l-xl">
            تومان
          </span>
        </div>
      </section>

      <section className="border border-[#f0f0f0] rounded-xl flex flex-col justify-between items-center text-sm">
        <div className="p-3 bg-[#fcfeff] font-bold w-full rounded-t-xl">تخفیف محصول</div>

        <hr className="w-full" />

        <div className="flex justify-center items-center p-3 gap-3 relative">
          <label htmlFor="sale">تخفیف</label>

          <input
            type="number"
            name="sale"
            value={formData.sale}
            onChange={changeHandler}
            placeholder="درصد تخفیف"
            min="0"
            max="100"
            className="border border-[#f0f0f0] rounded-xl p-1 pr-3 pl-6"
          />

          <span className="flex absolute left-3.25 bottom-3.25 bg-[#fcfeff] p-1 rounded-l-xl">
            %
          </span>
        </div>

        <div className="w-full border-t border-[#f0f0f0] p-3 flex justify-between items-center">
          <span className="font-bold">قیمت نهایی:</span>

          <span className="text-green-600 font-bold">
            {formData.price
              ? (
                  Number(formData.price) -
                  (Number(formData.price) * Number(formData.sale)) / 100
                ).toLocaleString()
              : 0}{' '}
            تومان
          </span>
        </div>
      </section>

      <section className="border border-[#f0f0f0] rounded-xl flex flex-col justify-between items-center text-sm">
        <div className="p-3 bg-[#fcfeff] font-bold w-full rounded-t-xl">برند محصول</div>

        <hr className="w-full" />

        <div className="flex justify-center items-center p-3 gap-3 relative w-full">
          <label htmlFor="brand">برند را انتخاب کنید:</label>

          <select
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={changeHandler}
            className="border rounded bg-[#fcfeff] border-[#f0f0f0]"
          >
            <option value="">انتخاب برند</option>

            {brand &&
              brand.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </section>

      <section className="border border-[#f0f0f0] rounded-xl flex flex-col justify-between items-center text-sm">
        <div className="p-3 bg-[#fcfeff] font-bold w-full rounded-t-xl">دسته‌بندی محصول</div>

        <hr className="w-full" />

        <div className="flex justify-center items-center p-3 gap-3 relative w-full">
          <label htmlFor="category">دسته‌بندی را انتخاب کنید:</label>

          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={changeHandler}
            className="border rounded bg-[#fcfeff] border-[#f0f0f0]"
          >
            <option value="">انتخاب دسته‌بندی</option>

            {category &&
              category.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </section>

      <section className="border border-[#f0f0f0] rounded-xl flex flex-col justify-between items-center text-sm">
        <div className="p-3 bg-[#fcfeff] font-bold w-full rounded-t-xl">تصاویر محصول</div>

        <hr className="w-full" />

        <div className="flex justify-center items-center p-3 gap-3 relative w-full">
          <label>گالری تصاویر</label>
        </div>

        <MediaLibraryModal
          isVisible={showGallery}
          selectedItems={media}
          onToggleSelection={toggleMediaSelection}
          onClose={() => setShowGallery(false)}
        />

        <div className="flex flex-row justify-center items-center input cursor-pointer gap-3">
          <div className="flex flex-row gap-1">
            {media &&
              media.map((item) => (
                <div key={item._id} className="border border-gray-100 rounded">
                  <Image src={item?.url} width={90} height={90} alt={item?.url} />
                </div>
              ))}
          </div>

          <div
            className="flex flex-row justify-center items-center w-full input"
            onClick={() => setShowGallery(!showGallery)}
          >
            <GrFormAdd />
          </div>
        </div>
      </section>

      <div className="flex gap-3">
        <button type="submit" className="bg-green-400 p-2 rounded-xl cursor-pointer text-sm">
          افزودن محصول
        </button>

        <button type="button" className="bg-gray-300 rounded-xl cursor-pointer p-2 text-sm">
          انصراف
        </button>
      </div>
    </form>
  )
}
