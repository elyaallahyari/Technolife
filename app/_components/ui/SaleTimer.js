'use client'

import { useEffect, useState } from 'react'

const EXPIRY_KEY = 'technotime-expiry'
const DURATION = 23 * 60 * 60 * 1000

export default function SaleTimer() {
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    let expiry = localStorage.getItem(EXPIRY_KEY)

    if (!expiry) {
      expiry = Date.now() + DURATION
      localStorage.setItem(EXPIRY_KEY, expiry)
    }

    const interval = setInterval(() => {
      let expiryTime = Number(localStorage.getItem(EXPIRY_KEY))

      const remaining = expiryTime - Date.now()

      if (remaining <= 0) {
        expiryTime = Date.now() + DURATION

        localStorage.setItem(EXPIRY_KEY, expiryTime)

        setTimeLeft(DURATION)
      } else {
        setTimeLeft(remaining)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hours = String(Math.floor(timeLeft / (1000 * 60 * 60))).padStart(2, '0')

  const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')

  const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0')

  return (
    <div className="font-bold text-[#750e13] text-sm underline tracking-wider">
      {hours}:{minutes}:{seconds}
    </div>
  )
}
