import React from 'react'
import { getTranslations } from 'next-intl/server';
import styles from './style.module.scss'
import Section from '../_components/section';

const About = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return (
    <div className='page-wrapper'>
      <Section image='/assets/images/about/image-01.png' alt={t('alt')} title={t('title')} priority />
      <div className={`${styles.description} ${styles.content}`}>
        <p>{t('description.paragraph1')}</p>
        <p className={styles.narrative}>{t('description.paragraph2')}</p>
        <p>{t('description.paragraph3')}</p>
        <p className={styles.narrative}>{t('description.paragraph4')}</p>
      </div>
    </div>
  )
}

export default About

