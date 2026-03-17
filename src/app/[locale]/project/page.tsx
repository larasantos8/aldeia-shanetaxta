import React from 'react'
import { getTranslations } from 'next-intl/server';
import Section from '../_components/section'
import Voices from '../_components/voices';
import styles from './style.module.scss'

const Project = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ProjectPage' });

  return (
    <div className='wrapper'>
      <Section image='/assets/images/home/banners/image-03.png' alt={t('alt1')} title={t('title')}/>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>{t('description.paragraph1')}</p>
          <p>{t('description.paragraph2')}</p>
          <p>{t('description.paragraph3')}</p>
          <p>{t('description.paragraph4')}</p>
          <p>{t('description.paragraph5')}</p>
          <p>{t('description.paragraph6')}</p>
        </div>
      </div>
      <Voices className={styles.content} locale={locale}/>
    </div>
  )
}

export default Project
