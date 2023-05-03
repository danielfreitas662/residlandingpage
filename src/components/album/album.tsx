'use client';
import Image from 'next/image';
import styles from './album.module.scss';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import Carousel from '../carousel/carousel';
import { FaPlus } from 'react-icons/fa';

interface AlbumProps {
  cover: string;
  children: ReactNode[];
}
function Album({ cover, children }: AlbumProps) {
  const [full, setFull] = useState(false);
  const [transitionOn, setTransitionOn] = useState(false);
  const [transitionOff, setTransitionOff] = useState(false);
  const handleOn = () => {
    setTransitionOn(true);
    setFull(true);
    setTimeout(() => {
      setTransitionOn(false);
    }, 500);
  };
  const handleOff = () => {
    setTransitionOff(true);
    setTimeout(() => {
      setFull(false);
      setTransitionOff(false);
    }, 500);
  };
  return (
    <div className={styles.album}>
      <div className={styles.cover} onClick={() => handleOn()}>
        <Image src={cover} alt="cover" width={200} height={200} style={{ objectFit: 'cover' }} />
      </div>
      <div className={clsx({ [styles.fullscreen]: true, [styles.full]: full })}>
        <div className={styles.close} onClick={() => handleOff()}>
          <FaPlus />
        </div>
        <div
          className={clsx({
            [styles.mask]: true,
            [styles.full]: full,
            [styles.transitionOn]: transitionOn,
            [styles.transitionOff]: transitionOff,
          })}
          onClick={() => handleOff()}
        />
        <div
          className={clsx({
            [styles.body]: true,
            [styles.full]: full,
            [styles.transitionOn]: transitionOn,
            [styles.transitionOff]: transitionOff,
          })}
        >
          <div className={styles.images}>
            <Carousel width="100%" height="100vh">
              {children}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Album;
