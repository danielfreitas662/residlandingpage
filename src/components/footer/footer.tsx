import styles from './footer.module.scss';
import logo from '../../images/header/logoresid.png';
import Image from 'next/image';
import SocialMedia from '../socialMedia/socialMedia';
import { FaHome, FaPhone } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
function Footer() {
  const t = useTranslations('home');
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div>
          <Image alt="logo" src={logo} height={50} />
        </div>
        <SocialMedia title="@sigaresid" href="https://www.instagram.com/sigaresid/" media="instagram" />
      </div>
      <div className={styles.column}>
        <h4>{t('footer.faleconosco')}</h4>
        <div>
          <FaHome /> Av. Campos Sales, 901, Petrópolis, Sala 808, Natal - RN
        </div>
        <div>
          <FaPhone /> (84) 98178-8383
        </div>
        <div>
          <AiFillMail /> contato@grupoelevar.com
        </div>
      </div>
      <div className={styles.column}>
        <h4>{t('footer.menu')}</h4>
        <div>
          <Link href="/realizacoes">{t('footer.realizacoes')}</Link>
        </div>
        <div>
          <Link href="/sobre">{t('footer.sobre')}</Link>
        </div>
        <div>
          <Link href="/servicos">{t('footer.servicos')}</Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
