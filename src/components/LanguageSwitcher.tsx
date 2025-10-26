import Link from 'next/link';
import { getLocale, type Locale } from '@/lib/i18n';
import styles from './LanguageSwitcher.module.css';

const LOCALES = {
    'pt-BR': 'Português',
    'en': 'English'
} as const;

export default async function LanguageSwitcher() {
    const currentLocale = await getLocale();

    return (
        <div className={styles.switcher}>
            {Object.entries(LOCALES).map(([locale, label]) => (
                <Link
                    key={locale}
                    href={`/${locale}`}
                    className={currentLocale === locale ? styles.active : ''}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}