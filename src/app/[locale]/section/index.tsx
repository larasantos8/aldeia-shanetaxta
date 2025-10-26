import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image';
import { SectionProps } from './types';

const Section = ({ title, image, alt, className = '' }: SectionProps) => {
  return (
    <div className={`${styles.section} ${className}`}>
      <h1 className={styles.title}>{title}</h1>
      <Image
        src={image}
        alt={alt}
        width={1012}
        height={569}
        layout="responsive"
      />
    </div>
  )
}

export default Section;
