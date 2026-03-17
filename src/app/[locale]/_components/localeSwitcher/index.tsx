"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';

const LOCALES = {
    'pt': 'PT',
    'en': 'EN'
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
                        className={`${styles.languageButton} ${isActive ? styles.active : ''}`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
}