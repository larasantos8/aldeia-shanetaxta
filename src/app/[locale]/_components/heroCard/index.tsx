import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';

interface HeroCardProps {
  image: string;
  imageAlt: string;
  subtitle?: string;
  title: string;
  ctaText: string;
  ctaLink: string;
}

const HeroCard = ({
  image,
  imageAlt,
  subtitle,
  title,
  ctaText,
  ctaLink,
}: HeroCardProps) => {
  return (
    <div className={styles.heroCard}>
      <div className={styles.heroCard__imageContainer}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className={styles.heroCard__image}
          sizes="100vw"
        />
      </div>
      
      <div className={styles.heroCard__content}>
        {subtitle && (
          <p className={styles.heroCard__subtitle}>{subtitle}</p>
        )}
        <Link href={ctaLink} className={styles.heroCard__titleLink}>
          <h1 className={styles.heroCard__title}>{title}</h1>
        </Link>
        <Link href={ctaLink} className={styles.heroCard__cta}>
          {ctaText}
          <Image
            src="/assets/icons/navigation/arrow-forward.svg"
            alt=""
            width={24}
            height={24}
            className={styles.heroCard__ctaIcon}
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
