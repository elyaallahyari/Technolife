'use client'
import { FaUserEdit } from 'react-icons/fa'
import { SiBrandfetch } from 'react-icons/si'
import { MdPermMedia } from 'react-icons/md'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { IoExit } from 'react-icons/io5'
import { BiSolidCategory } from 'react-icons/bi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const menuItem = [
  {
    id: 0,
    icon: <FaUserEdit />,
    name: 'مشخصات فردی',
    href: '/dashboard/profile'
  },
  {
    id: 1,
    icon: <SiBrandfetch />,
    name: 'برندها',
    href: '/dashboard/brand'
  },
  {
    id: 2,
    icon: <BiSolidCategory />,
    name: 'دسته‌بندی‌ها',
    href: '/dashboard/category'
  },
  {
    id: 3,
    icon: <MdPermMedia />,
    name: 'تصاویر',
    href: '/dashboard/media'
  },
  {
    id: 4,
    icon: <MdProductionQuantityLimits />,
    name: 'محصولات',
    href: '/dashboard/product'
  }
]

export default function SidebarDashboard() {
  const pathname = usePathname()

  return (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center h-full w-full lg:w-50 text-[#223c76] p-5">
        <ul className="flex flex-col items-center gap-6">
          {menuItem &&
            menuItem.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.id} className="flex w-full">
                  <Link
                    href={item.href}
                    className={`flex flex-row items-center gap-2 hover:bg-gray-100 p-3 rounded-xl cursor-pointer transition-all z-10
                  
                  ${isActive ? 'w-65 px-3 border-y border-r border-[#f0f0f0] bg-white rounded-r-full' : ''}
                `}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}

          <li className="flex flex-row items-center w-full ">
            <div className=" hover:bg-gray-100 w-30 flex items-center gap-2 p-3 rounded-xl cursor-pointer">
              <span>
                <IoExit />
              </span>
              <span>خروج</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
