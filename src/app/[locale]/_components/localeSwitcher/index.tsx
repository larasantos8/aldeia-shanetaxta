"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import styles from './style.module.scss';

const LOCALES = {
    'pt': 'PT',
    'en': 'EN'
} as const;

export default function LanguageSwitcher() {
    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleLocaleChange = (newLocale: string) => {
        if (newLocale === currentLocale || isPending) return;
        
        let pathWithoutLocale = pathname;
        
        if (pathname.startsWith('/pt/') || pathname.startsWith('/en/')) {
            pathWithoutLocale = pathname.substring(3);
        } else if (pathname === '/pt' || pathname === '/en') {
            pathWithoutLocale = '/';
        } else if (!pathname.startsWith('/pt') && !pathname.startsWith('/en')) {
            pathWithoutLocale = pathname;
        }
        
        const newPath = `/${newLocale}${pathWithoutLocale}`;
        
        console.log('Switching locale:', {
            from: currentLocale,
            to: newLocale,
            currentPath: pathname,
            pathWithoutLocale,
            newPath
        });
        
        startTransition(() => {
            router.push(newPath);
            router.refresh();
        });
    };

    return (
        <div className={styles.switcher}>
            {Object.entries(LOCALES).map(([lang, label]) => {
                const isActive = currentLocale === lang;
                return (
                    <button
                        key={lang}
                        onClick={() => handleLocaleChange(lang)}
                        className={`${styles.languageButton} ${isActive ? styles.active : ''}`}
                        aria-current={isActive ? 'page' : undefined}
                        disabled={isPending || isActive}
                        type="button"
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}