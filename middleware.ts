import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n.config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip Next.js internal paths, static files, and images
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return
  }

  // Check if the pathname already has a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Basic language detection
    const acceptLanguage = request.headers.get('accept-language') || ''
    let locale: string = i18n.defaultLocale
    
    if (acceptLanguage.includes('en')) {
      locale = 'en'
    } else if (acceptLanguage.includes('fr')) {
      locale = 'fr'
    }

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
