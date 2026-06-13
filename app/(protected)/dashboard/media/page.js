import MediaSection from '@/app/_components/sections/dash/media/MediaSection'
import { requireAuth } from '@/lib/dal/Auth.dal'

export const metadata = {
  title: 'تصاویر فروشگاه - تکنولایف'
}

export const dynamic = 'force-dynamic'

export default async function Medias() {
  await requireAuth()

  return (
    <>
      <div className="p-2 px-18 flex flex-col items-start justify-center text-[#223c76] gap-20">
        <MediaSection />
      </div>
    </>
  )
}
