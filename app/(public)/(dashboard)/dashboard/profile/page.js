import UserInfo from '@/app/_components/dash/UserInfo'
import { BiUser } from 'react-icons/bi'

export default async function Profile() {
  return (
    <section className="p-9 px-18 flex flex-col items-start justify-center text-[#223c76] gap-20">
      <div className="flex flex-row items-center gap-2">
        <BiUser size={24} />
        <p className="font-extrabold text-xl">مشخصات فردی</p>
      </div>

      <UserInfo />
    </section>
  )
}
