import AdvertisingBanner from '@/app/_components/home/header/AdvertisingBanner'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <section>
        <AdvertisingBanner />
      </section>
      <body>{children}</body>
    </html>
  )
}
