import PicCard from '@/components/picCard/pickCard';
import styles from './page.module.css';
import { FullVideo, IconCard, Track } from '@/components';
import { getTranslations } from 'next-intl/server';
import Testemonial, { ITestemonial } from '@/components/testemonial/testemonial';
import { useLocale } from 'next-intl';
import Carousel from '@/components/carousel/carousel';
import Image from 'next/image';
import { FaBuilding, FaStar, FaUsers } from 'react-icons/fa';
import { catalog } from '@/catalog/images';

export default async function Home() {
  const locale = useLocale();
  const t = await getTranslations('home');
  const testemonials = (await import(`../../messages/${locale}.json`)).default.home.testemonials;
  return (
    <main className={styles.main}>
      <FullVideo file={catalog.home.video1} />
      <PicCard image={catalog.home.piccard1} title={t('piccard1.title')} text={t('piccard1.text')} />
      <Track title="Corpo técnico capacitado" text="" />
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
      <PicCard reverse image={catalog.home.piccard1} title={t('piccard1.title')} text={t('piccard1.text')} />
      <Track title={t('track1.title')} text={t('track1.text')} />
      <PicCard reverse image={catalog.home.piccard2} title={t('piccard2.title')} text={t('piccard2.text')} />
      <Track title={t('track2.title')} text={t('track2.text')} />
      <Track title={t('track3.title')} text="" />
      <Carousel width={800}>
        <Image src={'/home/pic5'} height={500} width={800} alt="image1" />
        <Image src={'/home/pic6'} height={500} width={800} alt="image2" />
      </Carousel>
      <Track title={t('track3.title')} text="" />
      <Carousel height={300}>
        {testemonials.map((c: ITestemonial, index: number) => (
          <Testemonial key={index} testemonial={c} />
        ))}
      </Carousel>
    </main>
  );
}
