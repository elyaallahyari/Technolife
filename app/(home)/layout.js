import AdvertisingBanner from '@/app/_components/home/header/AdvertisingBanner'

export default function HomeLayout({ children }) {
  return (
    <>
      <section>
        <AdvertisingBanner />
      </section>
      {children}
    </>
  )
}
