'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

const fetcher = (url) => fetch(url).then((res) => res.json())

async function CreateBrand(url, { arg }) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(arg)
  }).then((res) => res.json())
}

async function EditBrand(url, { arg }) {
  const { _id, ...data } = arg
  return fetch(`${url}/${_id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

async function DeleteBrand(url, { arg }) {
  return fetch(`${url}/${arg}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then((res) => res.json())
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'

export default function BrandSection() {
  const [editingItem, setEditingItem] = useState(null)
  const { data, isLoading, mutate } = useSWR(`${API_URL}/brand`, fetcher)
  const { trigger: CreateTrigger, isMutating: isCreateMutating } = useSWRMutation(
    `${API_URL}/brand`,
    CreateBrand
  )
  const { trigger: EditTrigger, isMutating: isEditMutating } = useSWRMutation(
    `${API_URL}/brand`,
    EditBrand
  )
  const { trigger: DeleteTrigger, isMutating: isDeleteMutating } = useSWRMutation(
    `${API_URL}/brand`,
    DeleteBrand
  )

  const action = async (formData) => {
    const payload = {
      name: formData.get('name'),
      logo: formData.get('logo')
    }
    try {
      if (editingItem) {
        await EditTrigger({ _id: editingItem._id, ...payload })
      } else {
        await CreateTrigger(payload)
      }
      mutate()
      setEditingItem(null)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    document.getElementById('form')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const handleDelete = async (id) => {
    if (!confirm('آیا مایل به حذف هستید؟')) return

    try {
      await DeleteTrigger(id)
      mutate()
    } catch (error) {
      alert('خطا در حذف: ' + error.message)
    }
  }

  return (
    <section className="flex flex-col items-center justify-start gap-4 w-full">
      <div className="font-extrabold">{isLoading ? 'برندهای فروشگاه...' : 'برندهای فروشگاه'}</div>
      <div className="flex gap-4 flex-wrap">
        {data &&
          data.map((item) => (
            <div
              key={item._id}
              className="flex flex-col items-center justify-center text-sm border border-[#f0f0f0] rounded-xl p-1 bg-[#fcfeff] gap-1"
            >
              <Image
                unoptimized
                src={item.logo}
                alt={`${item.name}-icon`}
                width={50}
                height={50}
                priority
              ></Image>
              <hr className="text-[#f0f0f0] w-full" />
              {item.name}
              <hr className="text-[#f0f0f0] w-full" />
              <div className="flex justify-evenly gap-3">
                <span
                  className="hover:bg-amber-200 rounded p-1 cursor-pointer"
                  onClick={() => handleEdit(item)}
                >
                  <FiEdit3 />
                </span>
                <span
                  className="hover:bg-red-300 rounded p-1 cursor-pointer"
                  onClick={() => handleDelete(item._id)}
                >
                  <RiDeleteBin5Line />
                </span>
              </div>
            </div>
          ))}
      </div>
      <hr className="text-[#f0f0f0] w-full" />
      <div className="border border-[#f0f0f0] rounded-xl bg-[#fcfeff]">
        <form
          id="form"
          action={action}
          className="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5"
        >
          <div className="flex gap-2 items-center">
            <label htmlFor="name">نام برند</label>
            <input
              type="text"
              name="name"
              defaultValue={editingItem?.name || ''}
              placeholder="نام برند را وارد کنید"
              className="p-2 rounded-xl border border-[#f0f0f0]"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="logo">آیکون برند</label>
            <input
              type="text"
              name="logo"
              defaultValue={editingItem?.logo || ''}
              placeholder=" url آیکون را وارد کنید"
              className="p-2 rounded-xl border border-[#f0f0f0]"
            />
          </div>

          <button type="submit" className="p-2 bg-[#223c76] text-sm text-white rounded-xl">
            ارسال
          </button>
        </form>
      </div>
    </section>
  )
}
