import UserInfo from '@/app/_components/sections/dash/user-info/UserInfo'
import { requireAuth } from '@/lib/dal/Auth.dal'
import { BiUser } from 'react-icons/bi'

export const metadata = {
  title: 'مشخصات فردی - تکنولایف'
}

export const dynamic = 'force-dynamic'

export default async function Profile() {
  const session = await requireAuth()

  return (
    <section className="p-9 px-18 flex flex-col items-start justify-center text-[#223c76] gap-20">
      <div className="flex flex-row items-center gap-2">
        <BiUser size={24} />
        <p className="font-extrabold text-xl">مشخصات فردی</p>
      </div>

      <UserInfo userId={session.id} />
    </section>
  )
}
