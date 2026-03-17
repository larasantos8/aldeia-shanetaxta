'use client';

import React, { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './style.module.scss';
import Menu from '../menu';
import LocaleSwitcher from '../localeSwitcher';
import { useScrolled } from '@/hooks/useScrolled';

interface PageTitles {
  [key: string]: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled();
  const t = useTranslations('Menu');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Remove o locale do pathname para obter a rota base
  const currentPath = pathname.replace(/^\/(pt|en)/, '') || '/';
  const isHomePage = currentPath === '/';

  // Mapeamento de rotas para títulos
  const pageTitles: PageTitles = {
    '/about': t('about'),
    '/experiences': t('experiences'),
    '/history': t('history'),
    '/resistance': t('resistance'),
    '/spirituality': t('spirituality'),
    '/project': t('project'),
    '/gallery': t('gallery'),
  };

  const pageTitle = pageTitles[currentPath];

  // Define se deve usar o header transparente (apenas na home sem scroll)
  // Usa isMounted para evitar erro de hidratação
  const isTransparent = isMounted && isHomePage && !scrolled;
  const useVerticalLogo = isMounted && isHomePage && !scrolled;

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
        <Link href="/" className={styles.brandWrapper}>
          <Image
            src={useVerticalLogo ? "/assets/icons/brand/brand-vertical.svg" : "/assets/icons/brand/brand-horizontal.svg"}
            alt="Logo"
            className={useVerticalLogo ? styles.logoVertical : styles.logoHorizontal}
            width={200}
            height={40}
            priority
          />
        </Link>
        
        {pageTitle && (
          <h1 className={styles.pageTitle}>{pageTitle.toUpperCase()}</h1>
        )}

        <div className={styles.rightSection}>
          <div className={styles.localeSwitcherWrapper}>
            <LocaleSwitcher />
          </div>
          <button 
            className={styles.menuWrapper}
            onClick={handleOpenMenu}
            aria-label="Abrir menu"
          >
            <Image
              src="/assets/icons/navigation/menu.svg"
              alt="Menu"
              className={styles.menuIcon}
              width={32}
              height={32}
            />
          </button>
        </div>
      </header>

      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
