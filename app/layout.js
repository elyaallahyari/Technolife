import './globals.css'
import localFont from 'next/font/local'

const farsiFont = localFont({
  src: [
    {
      path: '../public/fonts/PlaypenSansArabic-Regular.woff',
      weight: '400'
    },
    {
      path: '../public/fonts/PlaypenSansArabic-Medium.woff',
      weight: '500'
    },
    {
      path: '../public/fonts/PlaypenSansArabic-SemiBold.woff',
      weight: '600'
    },
    {
      path: '../public/fonts/PlaypenSansArabic-Bold.woff',
      weight: '700'
    },
    {
      path: '../public/fonts/PlaypenSansArabic-ExtraBold.woff',
      weight: '800'
    }
  ]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className={farsiFont.className}>
      <body>{children}</body>
    </html>
  )
}
