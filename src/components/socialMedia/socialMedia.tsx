import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import styles from './socialMedia.module.scss';

interface SocialMediaProps {
  title: string;
  media: 'instagram' | 'facebook';
  href: string;
}
function SocialMedia({ title, media, href }: SocialMediaProps) {
  return (
    <div className={styles.socialmedia}>
      <div className={styles.icon}>{media === 'instagram' && <FaInstagram />}</div>
      <div className={styles.title}>
        <Link href={href} target="_blank">
          {title}
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
