import React from 'react'
import { useTranslations } from 'next-intl';
import Section from '../_components/section';
import Voices from '../_components/voices';
import styles from './style.module.scss'
import Image from "next/image";

const Spirituality = () => {
  const t = useTranslations("SpiritualityPage");

  return (
    <div className='wrapper'>
      <Section image='/assets/images/spirituality/image-01.png' alt={t('alt1')} title={t('title')}/>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>{t('description.paragraph1')}</p>
          <p>{t('description.paragraph2')}</p>
          <p>{t('description.paragraph3')}</p>
          <p>{t('description.paragraph4')}</p>
          <div className={styles.images}>
            <Image
              src='/assets/images/spirituality/image-02.png'
              alt={t('alt2')}
              width={356}
              height={266}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
              <Image
                src='/assets/images/spirituality/image-03.png'
                alt={t('alt3')}
                width={356}
                height={266}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto"
                }} />
          </div>
          <h1 className={styles.title}>{t('games.title')}</h1>
          <p>{t('games.description.paragraph1')}</p>
          <p>{t('games.description.paragraph2')}</p>
          <p>{t('games.description.paragraph3')}</p>
          <p>{t('games.description.paragraph4')}</p>
        </div>
      </div>
      <Voices className={styles.content}/>
    </div>
  );
}

export default Spirituality
