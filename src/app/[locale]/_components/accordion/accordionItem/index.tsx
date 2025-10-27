"use client";
import React, { useState } from 'react'
import styles from './style.module.scss'
import ArrowIcon from '../../../../../../public/assets/icons/navigation/expand-more.svg';
import Image from "next/image";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.item}>
      <div className={styles.header} onClick={toggleAccordion}>
        <h2 className={styles.title}>{title}</h2>
        {isOpen ? '−' : <Image
          className={styles.icon}
          src={ArrowIcon}
          alt="Expand Icon"
          width={24}
          height={14}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />}
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default AccordionItem
