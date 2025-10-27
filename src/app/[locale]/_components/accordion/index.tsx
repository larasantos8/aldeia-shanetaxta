import React from 'react'
import styles from './style.module.scss'
import AccordionItem from './accordionItem';

type AccordionEntry = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  items: AccordionEntry[];
};

const Accordion: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
