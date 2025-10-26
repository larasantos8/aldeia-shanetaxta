"use client";
import React, { useState } from 'react'
import styles from './style.module.scss'
import ArrowIcon from '../../../../../../public/assets/icons/navigation/expand-more.svg';
import Image from 'next/image';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.item}>
      <div className={styles.header} onClick={toggleAccordion}>
        <h2 className={styles.title}>{title}</h2>
        {isOpen ? '−' : <img className={styles.icon} src={ArrowIcon} alt="Expand Icon" style={{ width: "24px", height: "14px" }} />}
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default AccordionItem
