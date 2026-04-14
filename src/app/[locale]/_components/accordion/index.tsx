'use client';

import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import AccordionItem from './accordionItem';
import { usePathname } from 'next/navigation';

type AccordionEntry = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  items: AccordionEntry[];
};

const Accordion: React.FC<Props> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
