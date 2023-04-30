import Image from 'next/image';
import styles from './header.module.scss';
import logo from '../../images/header/logoresid.png';
import Link from 'next/link';
function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image alt="logo" src={logo} height={50} />
      </Link>
    </div>
  );
}

export default Logo;
