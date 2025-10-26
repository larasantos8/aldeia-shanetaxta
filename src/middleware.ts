import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['pt-BR', 'en']
const defaultLocale = 'pt-BR'

function getLocale(request: NextRequest) {
    // Check if there's a locale in the pathname
    const pathname = request.nextUrl.pathname
    const pathnameLocale = locales.find(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameLocale) return pathnameLocale

    // Check for locale in accept-language header
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
        const headerLocale = acceptLanguage.split(',')[0].split('-')[0]
        if (headerLocale === 'pt') return 'pt-BR'
        if (headerLocale === 'en') return 'en'
    }

    return defaultLocale
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if the pathname starts with a locale
    const pathnameIsMissingLocale = locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(
            new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico).*)',
    ],
}