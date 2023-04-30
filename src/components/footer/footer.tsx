import styles from './footer.module.scss';
import logo from '../../images/header/logoresid.png';
import Image from 'next/image';
import SocialMedia from '../socialMedia/socialMedia';
import { FaHome, FaPhone } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { Link, useTranslations } from 'next-intl';
function Footer() {
  const t = useTranslations('home');
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div>
          <Image alt="logo" src={logo} height={50} />
        </div>
        <div>Casa com o seu jeito</div>
        <SocialMedia title="@sigaresid" href="https://www.instagram.com/sigaresid/" media="instagram" />
      </div>
      <div className={styles.column}>
        <h3>{t('footer.faleconosco')}</h3>
        <div>
          <FaHome /> Av. Olavo Lacerda Montenegro, 5400, Parque das Nações, Sala Resid, Parnamirim - RN
        </div>
        <div>
          <FaPhone /> (84) 98178-8383
        </div>
        <div>
          <AiFillMail /> contato@grupoelevar.com
        </div>
      </div>
      <div className={styles.column}>
        <h3>{t('footer.menu')}</h3>
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
