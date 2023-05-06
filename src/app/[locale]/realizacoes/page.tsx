import { Album, Track } from '@/components';
import styles from './page.module.scss';
import { catalog } from '@/catalog/images';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
async function Realizacoes() {
  const t = await getTranslations('realizacoes');
  return (
    <main className={styles.main}>
      <Image
        src="/images/real.jpg"
        alt="main"
        width={2348}
        height={1029}
        style={{ objectFit: 'cover', width: '100%', height: 460 }}
      />
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
