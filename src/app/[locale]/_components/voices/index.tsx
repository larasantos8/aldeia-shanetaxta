import React from 'react'
import { getTranslations } from 'next-intl/server';
import styles from './style.module.scss'
import Playlist from './playlist'

interface VoicesProps {
  className?: string;
  locale: string;
}

const Voices = async ({ className = '', locale }: VoicesProps) => {
  const t = await getTranslations({ locale, namespace: 'Voices' });

  return (
    <div className={styles.voices}>
      <h2 className={styles.title}>{t('title')}</h2>
      <p className={styles.description}>
        {t('description')}
      </p>
      <div className={className}>
        <Playlist />
      </div>
    </div>
  )
}

export default Voices
