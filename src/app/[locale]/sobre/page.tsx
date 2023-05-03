import { FullVideo, Track } from '@/components';
import styles from './page.module.scss';
import { catalog } from '@/catalog/images';
import { getTranslations } from 'next-intl/server';
import PicCard from '@/components/picCard/pickCard';
async function Sobre() {
  const t = await getTranslations('sobre');

  return (
    <main className={styles.main}>
      <FullVideo file={catalog.home.video6.url} type={catalog.home.video6.type} />
      <PicCard title={t('piccard1.title')} text={t('piccard1.text')} image={catalog.home.picture30.url} height={380} />
      <Track title={t('track1.title')} text={t('track1.text')} />
      <FullVideo file={catalog.home.video5.url} type={catalog.home.video5.type} />
    </main>
  );
}
export default Sobre;
