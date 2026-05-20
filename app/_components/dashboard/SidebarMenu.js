import { FaUserEdit } from 'react-icons/fa'
import { SiBrandfetch } from 'react-icons/si'
import { MdPermMedia } from 'react-icons/md'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { IoExit } from 'react-icons/io5'
import { BiSolidCategory } from 'react-icons/bi'

const menuItem = [
  {
    id: 0,
    icon: <FaUserEdit />,
    name: 'مشخصات فردی'
  },
  {
    id: 1,
    icon: <SiBrandfetch />,
    name: 'برندها'
  },
  {
    id: 2,
    icon: <BiSolidCategory />,
    name: 'دسته‌بندی‌ها'
  },
  {
    id: 3,
    icon: <MdPermMedia />,
    name: 'تصاویر'
  },
  {
    id: 4,
    icon: <MdProductionQuantityLimits />,
    name: 'محصولات'
  },
  {
    id: 5,
    icon: <IoExit />,
    name: 'خروج'
  }
]

export default function SidebarMenu() {
  return (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center h-full w-full lg:w-50 text-[#223c76] p-5">
        <ul className="flex flex-col items-center gap-6">
          {menuItem &&
            menuItem.map((item) => (
              <li
                key={item.id}
                className="flex flex-row items-center w-full gap-2 hover:bg-gray-100 p-3 rounded-xl cursor-pointer"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
