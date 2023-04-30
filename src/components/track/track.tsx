import styles from './track.module.scss';
interface TrackProps {
  title: string;
  text: string;
}
function Track({ title, text }: TrackProps) {
  return (
    <div className={styles.track}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
export default Track;
