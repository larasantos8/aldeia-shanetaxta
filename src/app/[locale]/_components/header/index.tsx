'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import styles from './style.module.scss';
import Menu from '../menu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.brandWrapper}>
          <img
            src="/assets/icons/brand/brand-horizontal.svg"
            alt="Logo"
            className={styles.logo}
          />
        </Link>
        <button 
          className={styles.menuWrapper}
          onClick={handleOpenMenu}
          aria-label="Abrir menu"
        >
          <img
            src="/assets/icons/navigation/menu.svg"
            alt="Menu"
            className={styles.menuIcon}
          />
        </button>
      </header>

      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
