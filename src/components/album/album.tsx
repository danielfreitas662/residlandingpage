'use client';
import Image from 'next/image';
import styles from './album.module.scss';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import Carousel from '../carousel/carousel';

interface AlbumProps {
  cover: string;
  children: ReactNode[];
}
function Album({ cover, children }: AlbumProps) {
  const [full, setFull] = useState(false);
  return (
    <div className={styles.album}>
      <div className={styles.cover} onClick={() => setFull(true)}>
        <Image src={cover} alt="cover" width={200} height={200} style={{ objectFit: 'cover' }} />
      </div>
      <div className={clsx({ [styles.fullscreen]: true, [styles.full]: full })}>
        <div className={clsx({ [styles.mask]: true, [styles.full]: full })} onClick={() => setFull(false)} />
        <div className={clsx({ [styles.body]: true, [styles.full]: full })}>
          <Carousel width="100%" height="100vh">
            {children}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Album;
