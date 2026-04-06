'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import Section from '../section';
import { useIsMobile } from '@/hooks/useIsMobile';

interface CultureCard {
  image: string;
  imageAlt: string;
  label: string;
  href: string;
}

interface CultureCardsProps {
  title: string;
  cards: CultureCard[];
}

const CultureCards = ({ title, cards }: CultureCardsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <div className="wrapper">
      <Section title={title} className={styles.cultureCards}>
        <div className={styles.cultureCards__grid}>
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className={`${styles.cultureCards__card} ${!isMobile && hoveredIndex !== null && hoveredIndex !== index
                ? styles['cultureCards__card--dimmed']
                : ''
                }`}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              <div className={styles.cultureCards__imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className={styles.cultureCards__image}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className={styles.cultureCards__label}>
                <span>{card.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default CultureCards;
