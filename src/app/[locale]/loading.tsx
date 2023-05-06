import styles from './page.module.scss';
export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spin} />
      <div className={styles.mask} />
    </div>
  );
}
