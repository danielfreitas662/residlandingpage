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
      <FullVideo file={catalog.home.video1.url} type={catalog.home.video1.type} />
      <PicCard image={catalog.home.picture24.url} title={t('piccard1.title')} text={t('piccard1.text')} />
      <PicCard image={catalog.home.picture3.url} title={t('piccard2.title')} text={t('piccard2.text')} reverse />
      <PicCard image={catalog.home.picture8.url} title={t('piccard3.title')} text={t('piccard3.text')} />
      <Track title={t('track1.title')} text={t('track1.text')} />
      <Carousel width={800}>
        <Image src={catalog.home.picture25.url} height={500} width={800} alt="image1" />
        <Image src={catalog.home.picture26.url} height={500} width={800} alt="image2" />
        <Image src={catalog.home.picture27.url} height={500} width={800} alt="image3" />
        <Image src={catalog.home.picture28.url} height={500} width={800} alt="image4" />
        <Image src={catalog.home.picture29.url} height={500} width={800} alt="image5" />
      </Carousel>
      <PicCard image={catalog.home.picture20.url} title={t('piccard4.title')} text={t('piccard4.text')} reverse />
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
      <Track title={t('track2.title')} text={t('track2.text')} />
      <Carousel height={200}>
        {testemonials.map((c: ITestemonial, index: number) => (
          <Testemonial key={index} testemonial={c} />
        ))}
      </Carousel>
    </main>
  );
}
