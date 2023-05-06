import { IconCard, Track } from '@/components';
import styles from './page.module.scss';
import Image from 'next/image';
import { MdManageAccounts, MdOutlineDesignServices } from 'react-icons/md';
import { RiFileSettingsLine } from 'react-icons/ri';
import { getTranslations } from 'next-intl/server';
export const metadata = {
  title: 'Resid - Nossos Serviços',
  description: 'Nossos serviços',
};
async function Servicos() {
  const t = await getTranslations('servicos');
  return (
    <main className={styles.main}>
      <Image
        src="/images/servicos/main.jpg"
        alt="main"
        width={2348}
        height={1029}
        style={{ objectFit: 'cover', width: '100%', height: 460 }}
      />
      <Track title={t('track1.title')} text={t('track1.text')} />
      <div className={styles.grid}>
        <div className={styles.item}>
          <IconCard
            title={t('icon1.title')}
            text={
              <ul>
                <li>{t('icon1.list.a')}</li>
                <li>{t('icon1.list.b')}</li>
                <li>{t('icon1.list.c')}</li>
                <li>{t('icon1.list.d')}</li>
                <li>{t('icon1.list.e')}</li>
                <li>{t('icon1.list.f')}</li>
              </ul>
            }
            icon={<MdOutlineDesignServices />}
          />
        </div>
        <div className={styles.item}>
          <IconCard
            title={t('icon2.title')}
            text={
              <ul>
                <li>{t('icon2.list.a')}</li>
                <li>{t('icon2.list.b')}</li>
                <li>{t('icon2.list.c')}</li>
                <li>{t('icon2.list.d')}</li>
                <li>{t('icon2.list.e')}</li>
              </ul>
            }
            icon={<MdManageAccounts />}
          />
        </div>
        <div className={styles.item}>
          <IconCard
            title={t('icon3.title')}
            text={
              <ul>
                <li>{t('icon3.list.a')}</li>
                <li>{t('icon3.list.b')}</li>
                <li>{t('icon3.list.c')}</li>
                <li>{t('icon3.list.d')}</li>
              </ul>
            }
            icon={<RiFileSettingsLine />}
          />
        </div>
      </div>
    </main>
  );
}
export default Servicos;
