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
        <div className={styles.item}>
          <Album cover={catalog.realizacoes.roberto[0]} title="Casa R&B" project="Priscilla Mendes" area={413.0}>
            {catalog.realizacoes.roberto.map((c, index) => (
              <Image
                key={index}
                src={c}
                alt={c}
                width={2000}
                height={2000}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
            ))}
          </Album>
        </div>
        <div className={styles.item}>
          <Album cover={catalog.realizacoes.ipoanca[0]} title="Casa I&S" project="Thiago Santana" area={274.64}>
            {catalog.realizacoes.ipoanca.map((c, index) => (
              <Image
                key={index}
                src={c}
                alt={c}
                width={2000}
                height={2000}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
            ))}
          </Album>
        </div>
        <div className={styles.item}>
          <Album cover={catalog.realizacoes.daniel[9]} title="Casa D&P" project="360 Arquitetura" area={232.32}>
            {catalog.realizacoes.daniel.map((c, index) => (
              <Image
                key={index}
                src={c}
                alt={c}
                width={2000}
                height={2000}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
            ))}
          </Album>
        </div>
        <div className={styles.item}>
          <Album cover={catalog.realizacoes.lisandra[0]} title="Casa L" project="Thiago Santana" area={205.35}>
            {catalog.realizacoes.lisandra.map((c, index) => (
              <Image
                key={index}
                src={c}
                alt={c}
                width={2000}
                height={2000}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
            ))}
          </Album>
        </div>
        <div className={styles.item}>
          <Album cover={catalog.realizacoes.nikolas[0]} title="Casa A&E" project="Thiago Santana" area={232.61}>
            {catalog.realizacoes.nikolas.map((c, index) => (
              <Image
                key={index}
                src={c}
                alt={c}
                width={2000}
                height={2000}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
            ))}
          </Album>
        </div>
        <div className={styles.item}>
          <Album cover={catalog.realizacoes.paulo[8]} title="Casa P&A" project="Thiago Santana" area={167.9}>
            {catalog.realizacoes.paulo.map((c, index) => (
              <Image
                key={index}
                src={c}
                alt={c}
                width={2000}
                height={2000}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
            ))}
          </Album>
        </div>
      </div>
    </main>
  );
}

export default Realizacoes;
