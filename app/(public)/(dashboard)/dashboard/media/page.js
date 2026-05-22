import MediaSection from '@/app/_components/dash/MediaSection'

export const metadata = {
  title: 'تصاویر فروشگاه - تکنولایف'
}

export default async function Medias() {
  return (
    <>
      <div className="p-9 px-18 flex flex-col items-start justify-center text-[#223c76] gap-20">
        <MediaSection />
      </div>
    </>
  )
}
