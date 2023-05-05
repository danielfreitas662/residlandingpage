import { Album, FullVideo, Track } from '@/components';
import styles from './page.module.scss';
import { catalog } from '@/catalog/images';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
async function Realizacoes() {
  const t = await getTranslations('realizacoes');
  return (
    <main className={styles.main}>
      <FullVideo file={catalog.home.video2.url} type={catalog.home.video2.type} muted={true} controls={false} />
      <Track title={t('track1.title')} text={t('track1.text')} />
      <div className={styles.grid}>
        {catalog.realizacoes.map((r, index) => (
          <Album key={index} cover={r.photos[0]} title={r.title} project={r.projeto} area={r.area}>
            {r.photos.map((p, pi) => (
              <img key={pi} src={p} alt={p} style={{ maxWidth: '90%', height: 'auto' }} />
            ))}
          </Album>
        ))}
      </div>
    </main>
  );
}

export default Realizacoes;
