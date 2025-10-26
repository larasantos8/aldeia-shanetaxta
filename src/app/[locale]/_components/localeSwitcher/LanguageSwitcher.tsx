"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

const LOCALES = {
    'pt': 'Português',
    'en': 'English'
} as const;

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();

    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

    return (
        <div className={styles.switcher}>
            {Object.entries(LOCALES).map(([lang, label]) => {
                const isActive = locale === lang;
                return (
                    <Link
                        key={lang}
                        href={`/${lang}${pathnameWithoutLocale}`}
                        className={isActive ? styles.active : ''}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
}