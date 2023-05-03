import { Album, FullVideo, Track } from '@/components';
import styles from './page.module.scss';
import { catalog } from '@/catalog/images';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
async function Realizacoes() {
  const t = await getTranslations('realizacoes');
  return (
    <main className={styles.main}>
      <FullVideo file={catalog.home.video3.url} type={catalog.home.video3.type} />
      <Track title={t('track1.title')} text={t('track1.text')} />
      <div className={styles.grid}>
        <div className={styles.item}>
          <Album cover={catalog.home.picture1.url}>
            <Image
              src={catalog.home.picture10.url}
              alt="image1"
              width={2000}
              height={2000}
              style={{ maxWidth: '90%', height: 'auto' }}
            />
            <Image
              src={catalog.home.picture11.url}
              alt="image2"
              width={2000}
              height={2000}
              style={{ maxWidth: '90%', height: 'auto' }}
            />
            <Image
              src={catalog.home.picture12.url}
              alt="image3"
              width={2000}
              height={2000}
              style={{ maxWidth: '90%', height: 'auto' }}
            />
          </Album>
        </div>
      </div>
    </main>
  );
}

export default Realizacoes;
