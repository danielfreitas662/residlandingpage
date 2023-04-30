import Image from 'next/image';
import styles from './piccard.module.scss';
import clsx from 'clsx';

interface PicCardProps {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
}
function PicCard({ image, title, text, reverse = false }: PicCardProps) {
  return (
    <div className={clsx({ [styles.piccard]: true, [styles.reverse]: reverse })}>
      <div className={styles.textside}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.image}>
        <Image src={image} alt={image} fill />
      </div>
    </div>
  );
}

export default PicCard;
