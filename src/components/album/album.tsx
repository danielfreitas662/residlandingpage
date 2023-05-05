'use client';
import Image from 'next/image';
import styles from './album.module.scss';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import Carousel from '../carousel/carousel';
import { FaAt, FaIcons, FaPlus, FaProjectDiagram } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai';
import { BsHouseDoor, BsHouseFill } from 'react-icons/bs';
import { RxDimensions } from 'react-icons/rx';
import { MdDesignServices, MdOutlineDesignServices } from 'react-icons/md';

interface AlbumProps {
  cover: string;
  title: string;
  area: number;
  project: string;
  children: ReactNode[];
}
function Album({ cover, children, title, area, project }: AlbumProps) {
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
        <Image src={cover} alt="cover" width={400} height={400} style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.content}>
        <div className={clsx({ [styles.title]: true, [styles.item]: true })}>
          <div className={styles.icon}>
            <BsHouseDoor />
          </div>
          <div className={styles.text}>{title}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <MdDesignServices />
          </div>
          <div className={styles.text}>{project}</div>
        </div>
        <div className={clsx({ [styles.item]: true, [styles.area]: true })}>
          <div className={styles.icon}>
            <RxDimensions />
          </div>
          <div className={styles.text}>{area}</div>
        </div>
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
