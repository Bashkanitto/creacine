import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const i18n = { defaultLocale: 'en', locales: ['en', 'ru'] }

function getPreferredLocale(req: NextRequest): string {
  const header = req.headers.get('accept-language') || ''
  const langs = header.split(',').map((l) => l.split(';')[0].trim())
  return langs.find((l) => i18n.locales.includes(l)) || i18n.defaultLocale
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip if already includes locale
  const hasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (!hasLocale) {
    const locale = getPreferredLocale(req)
    const url = req.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Применяем middleware ко всем путям кроме admin, api, _next, favicon
    '/((?!admin|api|_next|favicon\\.ico).*)',
  ],
}
