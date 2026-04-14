"use client";
import React from 'react'
import styles from './style.module.scss'
import ArrowIcon from '../../../../../../public/assets/icons/navigation/expand-more.svg';
import Image from "next/image";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ title, children, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.header} onClick={onToggle}>
        <h2 className={styles.title}>{title}</h2>
        <Image
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
          src={ArrowIcon}
          alt={isOpen ? "Collapse Icon" : "Expand Icon"}
          width={24}
          height={14}
        />
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default AccordionItem
