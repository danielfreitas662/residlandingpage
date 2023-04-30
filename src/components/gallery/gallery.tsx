'use client';
import Image from 'next/image';
import styles from './gallery.module.scss';
import { FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import clsx from 'clsx';

interface GalleryProps {
  images: string[];
}
function Gallery({ images = [] }: GalleryProps) {
  const [active, setActive] = useState(0);
  const [indicators] = useState(Array(images.length).fill(0));
  const [transitionOn, setTransitionOn] = useState(false);
  const [transitionOff, setTransitionOff] = useState(false);
  const [fullScreen, setFullScreen] = useState<string | null>(null);
  const [fullTransitionOn, setFullTransitionOn] = useState(false);
  const [fullTransitionOff, setFulltransitionOff] = useState(false);

  const handleLeft = () => {
    setActive((pv) => {
      if (pv === 0) return images.length - 1;
      return pv - 1;
    });
    setTransitionOff(false);
    setTransitionOn(false);
  };
  const handleRight = () => {
    setActive((pv) => {
      if (pv === images.length - 1) return 0;
      return pv + 1;
    });
    setTransitionOff(false);
    setTransitionOn(false);
  };
  const handleFullscreenOn = () => {
    setFullTransitionOn(false);
  };
  const handleFullscreenOff = () => {
    setFulltransitionOff(false);
    setFullScreen(null);
  };
  return (
    <div className={styles.gallery}>
      <div className={clsx({ [styles.passer]: true, [styles.visible]: !!fullScreen })}>
        <div
          className={styles.button}
          onClick={() => {
            setTransitionOff(true);
            setTransitionOn(true);
            setTimeout(handleLeft, 1000);
          }}
        >
          <FaArrowLeft />
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setTransitionOff(true);
            setTransitionOn(true);
            setTimeout(handleRight, 1000);
          }}
        >
          <FaArrowRight />
        </div>
      </div>
      <div className={styles.images}>
        {images.map((c, index) => (
          <div
            key={index}
            onClick={() => {
              setFullScreen(c);
              setFullTransitionOn(true);
              setTimeout(handleFullscreenOn, 1000);
              setTimeout(handleFullscreenOn, 500);
            }}
            className={clsx({
              [styles.image]: true,
              [styles.active]: index === active,
              [styles.transitionOff]: index === active && transitionOff,
              [styles.transitionOn]: index !== active && transitionOn,
            })}
          >
            <Image alt={c} src={c} height={400} width={800} placeholder="empty" />
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {indicators.map((_, index) => (
          <div
            key={index}
            className={clsx({ [styles.indicator]: true, [styles.active]: active === index })}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
      <div className={clsx({ [styles.fullscreen]: true, [styles.visible]: !!fullScreen })}>
        <div
          className={clsx({
            [styles.image]: true,
            [styles.transitionOn]: fullTransitionOn,
            [styles.transitionOff]: fullTransitionOff,
          })}
        >
          {fullScreen && <Image placeholder="empty" src={fullScreen} alt="fullscreenimage" fill loading="lazy" />}
        </div>
        <div
          className={clsx({
            [styles.mask]: true,
            [styles.transitionOn]: fullTransitionOn,
            [styles.transitionOff]: fullTransitionOff,
          })}
          onClick={() => {
            setFulltransitionOff(true);
            setTimeout(handleFullscreenOff, 500);
          }}
        ></div>
        <div
          className={styles.close}
          onClick={() => {
            setFulltransitionOff(true);
            setTimeout(handleFullscreenOff, 500);
          }}
        >
          <FaPlus style={{ transform: 'rotate(45deg' }} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
