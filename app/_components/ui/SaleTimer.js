'use client'

import { useEffect, useState } from 'react'

const DAY_IN_SECONDS = 23 * 60 * 60

export default function SaleTimer() {
  const [timeLeft, setTimeLeft] = useState(DAY_IN_SECONDS)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return DAY_IN_SECONDS
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0')
  const seconds = String(timeLeft % 60).padStart(2, '0')

  return (
    <div className="font-bold text-[#750e13] text-sm underline tracking-wider">
      {hours}:{minutes}:{seconds}
    </div>
  )
}
