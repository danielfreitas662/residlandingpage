import { FullVideo, IconCard, Track } from '@/components';
import styles from './page.module.scss';
import { catalog } from '@/catalog/images';
import { getTranslations } from 'next-intl/server';
import PicCard from '@/components/picCard/pickCard';
import { FaBuilding, FaStar, FaUsers } from 'react-icons/fa';

export const metadata = {
  title: 'Resid - Quem Somos',
  description: 'Quem somos',
};
async function Sobre() {
  const t = await getTranslations('sobre');
  const t2 = await getTranslations('sobre');

  return (
    <main className={styles.main}>
      <FullVideo file={catalog.home.video6.url} type={catalog.home.video6.type} controls muted={false} />
      <PicCard title={t('piccard1.title')} text={t('piccard1.text')} image={catalog.home.picture30.url} height={380} />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 50, marginBottom: 50 }}>
        <div style={{ flex: '1 1 200px' }}>
          <IconCard title={t('proposito.title')} text={t('proposito.text')} icon={<FaBuilding />} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <IconCard title={t('aspiracao.title')} text={t('aspiracao.text')} icon={<FaUsers />} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <IconCard
            title={t('valores.title')}
            text={
              <ul style={{ textAlign: 'left' }}>
                <li>{t('valores.text.a')}</li>
                <li>{t('valores.text.b')}</li>
                <li>{t('valores.text.c')}</li>
                <li>{t('valores.text.d')}</li>
                <li>{t('valores.text.e')}</li>
              </ul>
            }
            icon={<FaStar />}
          />
        </div>
      </div>
      <Track title={t('track1.title')} text={t('track1.text')} />
      <FullVideo file={catalog.home.video5.url} type={catalog.home.video5.type} />
    </main>
  );
}
export default Sobre;
