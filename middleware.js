import { NextResponse } from 'next/server'

export default function middleware(request) {
  const cookies = request.cookies
  const token = cookies.get('token')
  if (token) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*']
}
