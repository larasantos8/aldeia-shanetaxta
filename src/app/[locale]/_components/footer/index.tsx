import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/navigation';
import styles from './style.module.scss';

interface FooterProps {
    locale: string;
}

export default async function Footer({ locale }: FooterProps) {
    const t = await getTranslations({ locale, namespace: 'Footer' });
    
    const currentYear = new Date().getFullYear();

    const navItems = [
        { label: t('nav.home'), href: '/' },
        { label: t('nav.experiences'), href: '/experiences' },
        { label: t('nav.privacy'), href: '/privacy' },
        { label: t('nav.culture'), href: '/history' },
        { label: t('nav.support'), href: '/project' },
        { label: t('nav.terms'), href: '/terms' },
        { label: t('nav.history'), href: '/history' },
        { label: t('nav.contact'), href: '/contact' },
    ];

    const socialLinks = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/aldeiashanetatxakaya/',
            icon: '/assets/icons/social/instagram.svg',
        },
        {
            name: 'Spotify',
            href: 'https://open.spotify.com/artist/7dsxRtDSfhTAXXs8dg001F?si=r-gLrgXrTy-EavxwAS3Azg',
            icon: '/assets/icons/social/spotify.svg',
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <Image
                        src="/assets/icons/brand/brand-horizontal.svg"
                        alt="Shane Taxtá Kaya"
                        width={271}
                        height={40}
                        className={styles.logo}
                    />
                    <p className={styles.copyright}>
                        © Copyright 2026-{currentYear} Shane Taxtá Kaya.
                    </p>
                </div>

                <nav className={styles.navigation}>
                    <ul className={styles.navList}>
                        {navItems.map((item, index) => (
                            <li key={index} className={styles.navItem}>
                                <Link href={item.href} className={styles.navLink}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.socialSection}>
                    <p className={styles.socialTitle}>{t('stayConnected')}</p>
                    <div className={styles.socialLinks}>
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label={social.name}
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
