import { FaUserEdit } from 'react-icons/fa'
import { SiBrandfetch } from 'react-icons/si'
import { MdPermMedia } from 'react-icons/md'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { IoExit } from 'react-icons/io5'
import { BiSolidCategory } from 'react-icons/bi'
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

export default function SidebarMenu() {
  return (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center h-full w-full lg:w-50 text-[#223c76] p-5">
        <ul className="flex flex-col items-center gap-6">
          {menuItem &&
            menuItem.map((item) => (
              <li key={item.id} className="flex w-full">
                <Link
                  href={item.href}
                  className="flex flex-row items-center gap-2 hover:bg-gray-100 p-3 rounded-xl cursor-pointer w-full"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}

          <li className="flex flex-row items-center w-full gap-2 hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
            <span>
              <IoExit />
            </span>
            <span>خروج</span>
          </li>
        </ul>
      </div>
    </>
  )
}
