'use client';
import styles from './fullheightvideo.module.scss';
import { useEffect, useState } from 'react';
import FullVideo from '../fullVideo/fullVideo';
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';
import clsx from 'clsx';

function FullHeightVideo({
  file,
  type,
  controls = false,
  muted = true,
}: {
  file: string;
  type: string;
  controls?: boolean;
  muted?: boolean;
}) {
  const [height, setHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const scrollHandler = () => {
      setScrollY(window.scrollY);
    };
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  });
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  return (
    <div className={styles.fullheightvideo}>
      <div className={clsx({ [styles.logo]: true, [styles.scroll]: scrollY })}>
        <Image alt="logo" src="/images/header/logoresid.png" height={130} width={280} />
      </div>
      <div className={clsx({ [styles.arrow]: true, [styles.scroll]: scrollY })}>
        <FaArrowDown />
      </div>
      <FullVideo file={file} type={type} controls={controls} muted={muted} height={height} />
    </div>
  );
}

export default FullHeightVideo;
