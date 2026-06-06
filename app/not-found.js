import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.'
}

export default async function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-6 border">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="bg-blue-500 text-white rounded-xl p-3">
        Return Home
      </Link>
    </div>
  )
}
