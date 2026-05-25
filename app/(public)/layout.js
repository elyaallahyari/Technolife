import AdvertisingBanner from '@/app/_components/sections/home/header/AdvertisingBanner'
import MainHeader from '@/app/_components/sections/home/header/MainHeader'
import HorizontalMenu from '@/app/_components/sections/home/header/HorizontalMenu'
import Footerr from '@/app/_components/sections/home/footer/Footer'

export default function HomeLayout({ children }) {
  return (
    <>
      <section>
        <AdvertisingBanner />
      </section>
      <section>
        <MainHeader />
      </section>
      <section>
        <HorizontalMenu />
      </section>
      <div>{children}</div>
      <footer className="flex flex-col justify-center items-center p-5">
        <Footerr />
      </footer>
    </>
  )
}
