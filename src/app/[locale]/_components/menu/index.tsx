'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import LanguageSwitcher from '../localeSwitcher';
import styles from './style.module.scss';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('Menu');

  const menuItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('experiences'), href: '/experiences' },
    { label: t('history'), href: '/history' },
    { label: t('resistance'), href: '/resistance' },
    { label: t('spirituality'), href: '/spirituality' },
    { label: t('project'), href: '/project' },
    { label: t('gallery'), href: '/gallery' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.menuOverlay}>
      <div className={styles.menuContainer}>
        <Link href="/" className={styles.logoWrapper} onClick={onClose}>
          <img
            src="/assets/icons/brand/brand-horizontal.svg"
            alt="Shane Tatxá Kawa"
            className={styles.logo}
          />
        </Link>

        <div className={styles.topActions}>
          <LanguageSwitcher />
          
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <img
              src="/assets/icons/navigation/close.svg"
              alt="Fechar"
            />
          </button>
        </div>

        <div className={styles.mobileSwitcher}>
          <LanguageSwitcher />
        </div>

        <nav className={styles.menuNav}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <Link 
                  href={item.href} 
                  className={styles.menuLink}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
