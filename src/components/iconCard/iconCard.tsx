import { ReactNode } from 'react';
import styles from './iconcard.module.scss';

interface IconCardProps {
  title: string;
  text: string | ReactNode;
  icon: ReactNode;
}
function IconCard({ title, text, icon }: IconCardProps) {
  return (
    <div className={styles.iconcard}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
export default IconCard;
