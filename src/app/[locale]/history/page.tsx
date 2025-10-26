'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Voices from '../_components/voices';
import Section from '../_components/section';
import styles from './style.module.scss';

export default function History() {
  const t = useTranslations('HistoryPage');

  return (
    <div className='wrapper'>
      <Section image='/assets/images/history/image-01.png' alt={t('alt')} title={t('title')} />
      <div className={styles.content}>
        <div className={styles.description}>
          <p>{t('description.paragraph1')}</p>
          <p>{t('description.paragraph2')}</p>
          <p>{t('description.paragraph3')}</p>
          <p>{t('description.paragraph4')}</p>
        </div>
        <Section image='/assets/images/history/image-03.png' alt={t('alt')} title={t('title')} />
        <div className={styles.description}>
          <p>{t('language.paragraph1')}</p>
          <p>{t('language.paragraph2')}</p>
          <p>{t('language.paragraph3')}</p>
        </div>
        <Section image='/assets/images/history/image-02.png' alt={t('alt')} title={t('title')} />
        <div className={styles.description}>
          <div>
            <h3 className={styles.subtitle}>{t('food.farming.title')}</h3>
            <p>{t('food.farming.paragraph')}</p>
          </div>
          <div>
            <h3 className={styles.subtitle}>{t('food.hunting.title')}</h3>
            <p>{t('food.hunting.paragraph')}</p>
          </div>
          <div>
            <h3 className={styles.subtitle}>{t('food.fishing.title')}</h3>
            <p>{t('food.fishing.paragraph')}</p>
          </div>
          <div>
            <h3 className={styles.subtitle}>{t('food.caicuma.title')}</h3>
            <p>{t('food.caicuma.paragraph')}</p>
          </div>
          <div>
            <h3 className={styles.subtitle}>{t('food.dietaryRestrictions.title')}</h3>
            <p>{t('food.dietaryRestrictions.paragraph')}</p>
          </div>
          <div>
            <h3 className={styles.subtitle}>{t('food.handicraft.title')}</h3>
            <p>{t('food.handicraft.paragraph')}</p>
          </div>
        </div>
      </div>
      <Voices className={styles.content} />
    </div>
  )
}
