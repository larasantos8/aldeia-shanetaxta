import { headers } from 'next/headers';

const dictionaries = {
    'en': () => import('@/messages/en.json').then((module: any) => module.default),
    'pt-BR': () => import('@/messages/pt-BR.json').then((module: any) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) => {
    if (!locale || !(locale in dictionaries)) {
        locale = 'pt-BR'; // Fallback to default locale
    }
    return dictionaries[locale as Locale]();
};

export const getLocale = async () => {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '';
    return (pathname.split('/')[1] || 'pt-BR') as Locale;
};