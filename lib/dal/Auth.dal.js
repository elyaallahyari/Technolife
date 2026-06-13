import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { cache } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const SESSION_ENDPOINT = `${API_URL}/auth/session`
const LOGIN_PATH = '/sign-in'
const SESSION_COOKIE_NAME = 'token'

export const getSession = cache(async () => {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)

    if (!sessionCookie?.value) {
      return {
        authorized: false,
        session: null,
        error: 'NO_COOKIE'
      }
    }

    const response = await fetch(SESSION_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${SESSION_COOKIE_NAME}=${sessionCookie.value}`
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      return {
        authorized: false,
        session: null,
        error: `SERVER_ERROR_${response.status}`
      }
    }

    const data = await response.json()

    if (!data.authorized || !data.session?.id) {
      return {
        authorized: false,
        session: null,
        error: 'UNAUTHORIZED'
      }
    }

    return {
      authorized: true,
      session: data.session
    }
  } catch (err) {
    console.error('[DAL] Session fetch failed:', err)
    return {
      authorized: false,
      session: null,
      error: 'NETWORK_ERROR'
    }
  }
})

export async function requireAuth() {
  const result = await getSession()

  if (!result.session) {
    redirect(LOGIN_PATH)
  }

  return result.session
}

export async function getOptionalSession() {
  const result = await getSession()
  return result.authorized ? result.session : null
}

export async function verifySession() {
  return getSession()
}
