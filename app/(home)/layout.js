import AdvertisingBanner from '@/app/_components/home/header/AdvertisingBanner'
import MainHeader from '@/app/_components/home/header/MainHeader'

export default function HomeLayout({ children }) {
  return (
    <>
      <section>
        <AdvertisingBanner />
      </section>
      <section>
        <MainHeader />
      </section>
      <div>{children}</div>
    </>
  )
}
