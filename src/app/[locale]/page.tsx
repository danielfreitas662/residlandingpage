import PicCard from '@/components/picCard/pickCard';
import styles from './page.module.css';
import { FullVideo, IconCard, Track } from '@/components';
import { getTranslations } from 'next-intl/server';
import Gallery from '@/components/gallery/gallery';
import Testemonial, { ITestemonial } from '@/components/testemonial/testemonial';
import { useLocale } from 'next-intl';
import Carousel from '@/components/carousel/carousel';
import Image from 'next/image';
import { FaBuilding, FaStar, FaUsers } from 'react-icons/fa';

const domain = process.env.NEXT_PUBLIC_DOMAIN as string;
export default async function Home() {
  const locale = useLocale();
  const t = await getTranslations('home');
  const testemonials = (await import(`../../messages/${locale}.json`)).default.home.testemonials;
  const catalog = (await import('../../catalog/images.json')).default;
  const video1 = await fetch(domain + `/api/content/home/${catalog.home.video1}`).then((res) => res.text());
  const video2 = await fetch(domain + `/api/content/home/${catalog.home.video2}`).then((res) => res.text());
  const piccard1 = await fetch(domain + `/api/content/home/${catalog.home.piccard1}`).then((res) => res.text());
  const piccard2 = await fetch(domain + `/api/content/home/${catalog.home.piccard2}`).then((res) => res.text());
  return (
    <main className={styles.main}>
      <FullVideo src={video1} />
      <PicCard image={piccard1} title={t('piccard1.title')} text={t('piccard1.text')} />
      <Track title="Corpo técnico capacitado" text="" />
      <FullVideo src={video2} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
      <PicCard reverse image={piccard1} title={t('piccard1.title')} text={t('piccard1.text')} />
      <Track title={t('track1.title')} text={t('track1.text')} />
      <PicCard reverse image={piccard2} title={t('piccard2.title')} text={t('piccard2.text')} />
      <Track title={t('track2.title')} text={t('track2.text')} />
      <Gallery images={[piccard1, piccard2]} />
      <Track title={t('track3.title')} text="" />
      <Carousel width={800}>
        <Image src={piccard1} height={500} width={800} alt="image1" />
        <Image src={piccard2} height={500} width={800} alt="image2" />
      </Carousel>
      <Track title={t('track3.title')} text="" />
      <Carousel width={600} height={250}>
        {testemonials.map((c: ITestemonial, index: number) => (
          <Testemonial key={index} testemonial={c} />
        ))}
      </Carousel>
    </main>
  );
}
