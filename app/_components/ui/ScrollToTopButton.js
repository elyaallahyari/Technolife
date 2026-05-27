'use client'

import { FaChevronUp } from 'react-icons/fa'

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div
        className="flex flex-row justify-center items-center bg-white p-2 rounded-xl w-45 h-12 text-[#223c78] gap-2 cursor-pointer hover:bg-gray-50"
        onClick={scrollToTop}
      >
        <FaChevronUp />
        <span>بازگشت به بالا</span>
      </div>
    </>
  )
}
