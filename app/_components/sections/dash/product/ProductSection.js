'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FiEdit3, FiX } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrFormAdd } from 'react-icons/gr'

import useSWR, { mutate } from 'swr'
import useSWRMutation from 'swr/mutation'

import MediaLibraryModal from '../modal/MediaLibraryModal'

const PRODUCT_API = 'http://localhost:4000/api/product'
const BRAND_API = 'http://localhost:4000/api/brand'
const CATEGORY_API = 'http://localhost:4000/api/category'

const fetcher = (url) => fetch(url).then((res) => res.json())

async function DeleteProduct(url, { arg }) {
  return fetch(`${url}/${arg}`, {
    method: 'DELETE',
    credentials: 'include'
  }).then((res) => res.json())
}

async function EditProduct(url, { arg }) {
  const { _id, data } = arg

  return fetch(`${url}/${_id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

export default function ProductSection() {
  const { data: products, isLoading } = useSWR(PRODUCT_API, fetcher)

  const { data: brands } = useSWR(BRAND_API, fetcher)

  const { data: categories } = useSWR(CATEGORY_API, fetcher)

  const { trigger: deleteTrigger } = useSWRMutation(PRODUCT_API, DeleteProduct)

  const { trigger: editTrigger, isMutating } = useSWRMutation(PRODUCT_API, EditProduct)

  const [isOpen, setIsOpen] = useState(false)

  const [showGallery, setShowGallery] = useState(false)

  const [selectedProduct, setSelectedProduct] = useState(null)

  const [media, setMedia] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    sale: 0,
    brand: '',
    category: ''
  })

  const deleteHandler = async (id) => {
    await deleteTrigger(id)

    mutate(PRODUCT_API)
  }

  const openEditModal = (product) => {
    setSelectedProduct(product)

    setFormData({
      name: product.name || '',
      price: product.price || '',
      sale: product.sale || 0,
      brand: product.brand?._id || '',
      category: product.category?._id || ''
    })

    setMedia(product.media || [])

    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)

    setSelectedProduct(null)

    setMedia([])

    setFormData({
      name: '',
      price: '',
      sale: 0,
      brand: '',
      category: ''
    })
  }

  const changeHandler = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const toggleMediaSelection = (item) => {
    setMedia((prev) => {
      const exists = prev.find((i) => i._id === item._id)

      if (exists) {
        return prev.filter((i) => i._id !== item._id)
      }

      return [...prev, item]
    })
  }

  const submitEditHandler = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      name: formData.name,
      price: Number(formData.price),
      sale: Number(formData.sale),
      media: media.map((item) => item._id),
      category: formData.category,
      brand: formData.brand
    }

    await editTrigger({
      _id: selectedProduct._id,
      data: updatedProduct
    })

    mutate(PRODUCT_API)

    closeModal()
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section className="w-full h-full">
      <table className="w-full border border-[#f0f0f0] rounded-xl overflow-hidden text-center">
        <thead className="bg-[#f8f8f8]">
          <tr className="*:p-3 text-sm">
            <th>نام</th>

            <th>قیمت</th>

            <th>تخفیف</th>

            <th>دسته‌بندی</th>

            <th>برند</th>

            <th>ویرایش</th>

            <th>حذف</th>
          </tr>
        </thead>

        <tbody>
          {products?.map((product) => (
            <tr
              key={product._id}
              className="border-b border-[#f0f0f0] hover:bg-[#fafafa] transition"
            >
              <td className="p-3">{product.name}</td>

              <td className="p-3">{product.price.toLocaleString()}</td>

              <td className="p-3">{product.sale}%</td>

              <td className="p-3">{product.category?.name}</td>

              <td className="p-3">{product.brand?.name}</td>

              <td className="p-3">
                <button onClick={() => openEditModal(product)} className="cursor-pointer">
                  <FiEdit3 size={18} className="text-amber-400 hover:text-amber-500" />
                </button>
              </td>

              <td className="p-3">
                <button onClick={() => deleteHandler(product._id)} className="cursor-pointer">
                  <RiDeleteBin5Line size={18} className="text-red-400 hover:text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}

      {isOpen && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-5xl rounded-3xl p-6 relative overflow-y-auto max-h-[95vh]">
            <button onClick={closeModal} className="absolute top-5 left-5">
              <FiX size={22} />
            </button>

            <h2 className="text-2xl font-bold mb-8">ویرایش محصول</h2>

            <form onSubmit={submitEditHandler} className="flex flex-wrap gap-6">
              {/* NAME */}

              <section className="border border-[#f0f0f0] rounded-xl flex flex-col text-sm flex-1 min-w-75">
                <div className="p-3 bg-[#fcfeff] font-bold rounded-t-xl">نام محصول</div>

                <div className="p-4 flex flex-col gap-2">
                  <label htmlFor="name">نام محصول</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler}
                    placeholder="نام محصول"
                    className="border border-[#f0f0f0] rounded-xl p-2 outline-none"
                  />
                </div>
              </section>

              <section className="border border-[#f0f0f0] rounded-xl flex flex-col text-sm flex-1 min-w-75">
                <div className="p-3 bg-[#fcfeff] font-bold rounded-t-xl">قیمت محصول</div>

                <div className="p-4 flex flex-col gap-2 relative">
                  <label htmlFor="price">قیمت</label>

                  <input
                    id="price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={changeHandler}
                    placeholder="قیمت محصول"
                    className="border border-[#f0f0f0] rounded-xl p-2 pr-3 pl-16 outline-none"
                  />

                  <span className="absolute left-6 bottom-6 text-xs">تومان</span>
                </div>
              </section>

              <section className="border border-[#f0f0f0] rounded-xl flex flex-col text-sm flex-1 min-w-75">
                <div className="p-3 bg-[#fcfeff] font-bold rounded-t-xl">تخفیف محصول</div>

                <div className="p-4 flex flex-col gap-2 relative">
                  <label htmlFor="sale">درصد تخفیف</label>

                  <input
                    id="sale"
                    type="number"
                    name="sale"
                    min="0"
                    max="100"
                    value={formData.sale}
                    onChange={changeHandler}
                    placeholder="درصد تخفیف"
                    className="border border-[#f0f0f0] rounded-xl p-2 pr-3 pl-10 outline-none"
                  />

                  <span className="absolute left-6 bottom-6 text-xs">%</span>
                </div>

                <div className="border-t border-[#f0f0f0] p-4 flex justify-between items-center">
                  <span className="font-bold">قیمت نهایی:</span>

                  <span className="font-bold text-green-600">
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

              <section className="border border-[#f0f0f0] rounded-xl flex flex-col text-sm flex-1 min-w-75">
                <div className="p-3 bg-[#fcfeff] font-bold rounded-t-xl">برند محصول</div>

                <div className="p-4 flex flex-col gap-2">
                  <label htmlFor="brand">انتخاب برند</label>

                  <select
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={changeHandler}
                    className="border border-[#f0f0f0] rounded-xl p-2 bg-white"
                  >
                    <option value="">انتخاب برند</option>

                    {brands?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <section className="border border-[#f0f0f0] rounded-xl flex flex-col text-sm flex-1 min-w-75">
                <div className="p-3 bg-[#fcfeff] font-bold rounded-t-xl">دسته‌بندی محصول</div>

                <div className="p-4 flex flex-col gap-2">
                  <label htmlFor="category">انتخاب دسته‌بندی</label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={changeHandler}
                    className="border border-[#f0f0f0] rounded-xl p-2 bg-white"
                  >
                    <option value="">انتخاب دسته‌بندی</option>

                    {categories?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <section className="border border-[#f0f0f0] rounded-xl flex flex-col text-sm w-full">
                <div className="p-3 bg-[#fcfeff] font-bold rounded-t-xl">تصاویر محصول</div>

                <div className="p-4 flex flex-col gap-4">
                  <label>گالری تصاویر</label>

                  <MediaLibraryModal
                    isVisible={showGallery}
                    selectedItems={media}
                    onToggleSelection={toggleMediaSelection}
                    onClose={() => setShowGallery(false)}
                  />

                  <div className="flex flex-wrap gap-3">
                    {media?.map((item) => (
                      <div
                        key={item._id}
                        className="border border-[#f0f0f0] rounded-xl overflow-hidden"
                      >
                        <Image
                          src={item.url}
                          width={120}
                          height={120}
                          alt={item.url}
                          className="object-cover w-30 h-30"
                        />
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => setShowGallery(true)}
                      className="w-30 h-30 border border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 transition"
                    >
                      <GrFormAdd size={28} />
                    </button>
                  </div>
                </div>
              </section>

              <div className="w-full flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
                >
                  انصراف
                </button>

                <button
                  type="submit"
                  disabled={isMutating}
                  className="px-5 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
                >
                  {isMutating ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </section>
  )
}
