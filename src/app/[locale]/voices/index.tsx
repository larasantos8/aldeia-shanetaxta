import React from 'react'
import { useTranslations } from 'next-intl';
import styles from './style.module.scss'
import Playlist from './playlist'

const Voices = ({ className = ''}) => {
  const t = useTranslations("Voices");

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
