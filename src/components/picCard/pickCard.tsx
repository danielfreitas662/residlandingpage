import Image from 'next/image';
import styles from './piccard.module.scss';
import clsx from 'clsx';

interface PicCardProps {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
  height?: number;
}
function PicCard({ image, title, text, reverse = false, height = 360 }: PicCardProps) {
  return (
    <div className={clsx({ [styles.piccard]: true, [styles.reverse]: reverse })} style={{ minHeight: height }}>
      <div className={styles.textside} style={{ height: height }}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.image} style={{ height: height }}>
        <Image src={image} alt={image} fill />
      </div>
    </div>
  );
}

export default PicCard;
