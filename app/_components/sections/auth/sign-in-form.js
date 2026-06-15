'use client'

import useSWRMutation from 'swr/mutation'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
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

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'

export default function SignInForm() {
  const router = useRouter()
  const [errors, setErrors] = useState([])

  const { trigger, isMutating } = useSWRMutation(`${API_URL}/auth/sign-in`, SendData)

  const formHandler = async (formData) => {
    setErrors([])
    const payload = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    try {
      const result = await trigger(payload)

      if (result.success) {
        toast.success('ورود با موفقیت انجام شد!')
        router.replace('/dashboard/profile')
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      setErrors(error.errors || [])
    }
  }

  return (
    <>
      <form action={formHandler} className="flex flex-col w-full">
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
          className="w-full p-3 bg-[#223c76] rounded-xl text-white cursor-pointer mt-20 text-sm font-bold"
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
    </>
  )
}
