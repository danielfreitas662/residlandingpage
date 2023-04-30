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
    <Link href={href} className={styles.socialmedia} target="_blank">
      <div className={styles.icon}>{media === 'instagram' && <FaInstagram />}</div>
      <div className={styles.title}>{title}</div>
    </Link>
  );
}

export default SocialMedia;
