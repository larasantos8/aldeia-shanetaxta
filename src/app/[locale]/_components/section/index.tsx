import React from 'react'
import styles from './style.module.scss'
import Image from "next/image";
import { SectionProps } from './types';

const Section = ({ title, image, alt, className = '', children, priority = false }: SectionProps) => {
  return (
    <div className={`${styles.section} ${className}`}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children ? (
        children
      ) : image && alt ? (
        <Image
          src={image}
          alt={alt}
          width={1012}
          height={569}
          sizes="100vw"
          priority={priority}
          style={{
            width: "100%",
            height: "auto"
          }} />
      ) : null}
    </div>
  );
}

export default Section;
