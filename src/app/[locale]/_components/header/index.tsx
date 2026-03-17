'use client';

import React from 'react';
import styles from './style.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brandWrapper}>
        <img
          src="/assets/icons/brand/brand-horizontal.svg"
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.menuWrapper}>
        <img
          src="/assets/icons/navigation/menu.svg"
          alt="Menu"
          className={styles.menuIcon}
        />
      </div>
    </header>
  );
};

export default Header;
