'use client'

import useSWRMutation from 'swr/mutation'
import { mutate } from 'swr'

async function SendData(url, { arg }) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    credentials: 'include',
    body: JSON.stringify(arg)
  }).then((res) => res.json())
}

export default function SignUpForm() {
  const { trigger, isMutating } = useSWRMutation('http://localhost:4000/api/auth/sign-up', SendData)

  const formHandler = async (formData) => {
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    await trigger(payload)
    mutate()
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

      <button
        type="submit"
        disabled={isMutating}
        className="w-full p-3 bg-[#223c76] rounded-xl text-white cursor-pointer mt-20 text-sm font-bold"
      >
        {isMutating ? 'در حال بررسی' : 'ادامه'}
      </button>
    </form>
  )
}
