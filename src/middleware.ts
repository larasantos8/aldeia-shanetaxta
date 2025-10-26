import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '../next-intl.config.js';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'as-needed'
});

export const config = {
    matcher: [
        '/',
        '/(pt|en)/:path*',
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};