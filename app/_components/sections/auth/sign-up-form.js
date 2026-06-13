'use client'

import useSWRMutation from 'swr/mutation'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

async function SendData(url, { arg }) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(arg)
  })

  const data = await res.json()

  if (!res.ok) {
    throw data
  }

  return data
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function SignUpForm() {
  const router = useRouter()
  const [errors, setErrors] = useState([])

  const { trigger, isMutating } = useSWRMutation(`${API_URL}/auth/sign-up`, SendData)

  const formHandler = async (formData) => {
    setErrors([])
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    try {
      const result = await trigger(payload)

      if (result.success) {
        toast.success(result.message || 'ثبت نام با موفقیت انجام شد')

        router.replace('/sign-in')
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      setErrors(error.errors || [])
    }
  }

  return (
    <form action={formHandler} className="flex flex-col w-full">
      <label htmlFor="name" className="text-gray-500 text-sm p-3">
        نام خود را وارد کنید
      </label>
      <input type="text" name="name" className="border border-gray-200 p-3 rounded-xl" />

      <label htmlFor="email" className="text-gray-500 text-sm p-3">
        ایمیل خود را وارد کنید
      </label>
      <input type="email" name="email" className="border border-gray-200 p-3 rounded-xl" />

      <label htmlFor="password" className="text-gray-500 text-sm p-3">
        رمز خود را وارد کنید
      </label>
      <input type="password" name="password" className="border border-gray-200 p-3 rounded-xl" />

      {errors.length > 0 && (
        <div className="mt-4 space-y-1">
          {errors.map((err, index) => (
            <p key={index} className="text-xs text-red-500">
              {err}
            </p>
          ))}
        </div>
      )}

      <button
        type="submit"
        disabled={isMutating}
        className="w-full p-3 bg-[#223c76] rounded-xl text-white cursor-pointer mt-6 text-sm font-bold"
      >
        {isMutating ? 'در حال بررسی' : 'ادامه'}
      </button>

      <div>
        <p className="pt-4 text-[11px] font-medium w-full text-gray-500 sm:pt-6">
          ورود | ثبت‌نام شما به معنای پذیرش
          <span className="text-blue-300 cursor-pointer">&nbsp;قوانین و مقررات&nbsp;</span> و
          <span className="text-blue-300 cursor-pointer">&nbsp;حریم خصوصی کاربران&nbsp;</span>
          تکنولایف است.
        </p>
      </div>
    </form>
  )
}
