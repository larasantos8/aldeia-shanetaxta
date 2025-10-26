import React from 'react'
import { useTranslations } from 'next-intl';
import styles from './style.module.scss'
import Voices from '../_components/voices';
import Section from '../_components/section';
// import Accordion from '../_components/accordion';

const About = () => {
  const t = useTranslations("AboutPage");

  // const items = [
  //   {
  //     title: 'Seção 1',
  //     content: 'Conteúdo da Seção 1',
  //   },
  //   {
  //     title: 'Seção 2',
  //     content: 'Conteúdo da Seção 2',
  //   },
  //   {
  //     title: 'Seção 3',
  //     content: 'Conteúdo da Seção 3',
  //   },
  // ];

  return (
    <div className='wrapper'>
      <Section image='/assets/images/about/image-01.png' alt={t('alt')} title={t('title')}/>
      <div className={`${styles.description} ${styles.content}`}>
        <p>{t('description.paragraph1')}</p>
        <p className={styles.narrative}>{t('description.paragraph2')}</p>
        <p>{t('description.paragraph3')}</p>
        <p className={styles.narrative}>{t('description.paragraph4')}</p>
      </div>
        <Voices className={styles.content}/>
      {/* <Accordion items={items}/> */}
    </div>
  )
}

export default About

