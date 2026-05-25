'use client'
import Image from 'next/image'
import { useState } from 'react'
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

export default function MediaSection() {
  const [editingItem, setEditingItem] = useState(null)
  const { data, isLoading, mutate } = useSWR('http://localhost:4000/api/media', fetcher)
  const { trigger: CreateTrigger } = useSWRMutation('http://localhost:4000/api/media', CreateBrand)
  const { trigger: EditTrigger } = useSWRMutation('http://localhost:4000/api/media', EditBrand)
  const { trigger: DeleteTrigger } = useSWRMutation('http://localhost:4000/api/media', DeleteBrand)

  const action = async (formData) => {
    const payload = {
      url: formData.get('url')
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
    <section className="flex flex-col items-center justify-start gap-4">
      <div className="font-extrabold">{isLoading ? 'تصاویر فروشگاه...' : 'تصاویر فروشگاه'}</div>
      <div className="flex gap-4 flex-wrap">
        {data &&
          data.map((item) => (
            <div
              key={item._id}
              className="flex flex-col items-center justify-center text-sm border border-[#f0f0f0] rounded-xl p-1 bg-[#fcfeff] gap-1"
            >
              <Image src={item.url} alt={`${item._id}-icon`} width={50} height={50}></Image>

              <hr className="text-[#f0f0f0] w-full" />
              <div className="flex justify-evenly gap-3">
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
            <label htmlFor="url">تصویر</label>
            <input
              type="text"
              name="url"
              defaultValue={editingItem?.url || ''}
              placeholder=" url تصویر را وارد کنید"
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
