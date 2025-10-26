import React from 'react'
import Section from '../_components/section'
import { useTranslations } from 'next-intl';
import styles from './style.module.scss'
import Voices from '../_components/voices';

const Resistance = () => {
  const t = useTranslations("ResistancePage");

  return (
    <div className='wrapper'>
      <Section image='/assets/images/resistance/image-01.png' alt={t('alt')} title={t('title')}/>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>{t('description.paragraph1')}</p>
          <p>{t('description.paragraph2')}</p>
          <p>{t('description.paragraph3')}</p>
          <p>{t('description.paragraph4')}</p>
          <p>{t('description.paragraph5')}</p>
        </div>
      </div>
      <Voices className={styles.content}/>
    </div>
  )
}

export default Resistance
