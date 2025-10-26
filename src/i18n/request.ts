import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from '@/config/i18n.config';

export default getRequestConfig(async ({ locale }) => {
    const resolvedLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;

    return {
        messages: await import(`@/messages/${resolvedLocale}.json`).then(module => module.default),
        locale: resolvedLocale,
        timeZone: 'America/Sao_Paulo'
    };
});