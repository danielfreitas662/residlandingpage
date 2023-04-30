'use client';
import { ReactNode, useEffect, useState } from 'react';
import styles from './carousel.module.scss';
import clsx from 'clsx';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

interface CarouselProps {
  children: ReactNode[];
  width?: number | string;
  height?: number | string;
}

function Carousel({ children, width = 500, height = 500 }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(-1);
  const [leavingIndex, setLeavingIndex] = useState(-1);
  const [leftTransition, setLeftTransition] = useState(false);
  const [rightTransition, setRightTransition] = useState(false);

  const handleClickPrev = (index?: number) => {
    setLeavingIndex(activeIndex);
    setRightTransition(true);
    setActiveIndex(index || (activeIndex === 0 ? children.length - 1 : activeIndex - 1));
    setNextIndex(index || (activeIndex === 0 ? children.length - 1 : activeIndex - 1));
  };

  const handleClickNext = (index?: number) => {
    setLeavingIndex(activeIndex);
    setLeftTransition(true);
    setActiveIndex(index || (activeIndex === children.length - 1 ? 0 : activeIndex + 1));
    setNextIndex(index || (activeIndex === children.length - 1 ? 0 : activeIndex + 1));
  };
  useEffect(() => {
    const timerNext = setTimeout(() => {
      setLeftTransition(false);
      setRightTransition(false);
      setLeavingIndex(-1);
    }, 500);
    return () => {
      clearTimeout(timerNext);
    };
  }, [activeIndex, nextIndex]);
  useEffect(() => {
    const timerLeave = setTimeout(() => {
      setNextIndex(-1);
    }, 500);
    return () => {
      clearTimeout(timerLeave);
    };
  }, [activeIndex, nextIndex]);
  return (
    <div className={styles.carousel} style={{ maxWidth: width, maxHeight: height, minHeight: height }}>
      <div className={styles.menu} style={{ maxWidth: width }}>
        <div className={styles.dots}>
          {children.map((_, index) => (
            <button
              key={index}
              className={clsx({ [styles.dot]: true, [styles.active]: index === activeIndex })}
              onClick={() => (index > activeIndex ? handleClickNext(index) : handleClickPrev(index))}
            />
          ))}
        </div>
        <div className={clsx({ [styles.button]: true, [styles.prev]: true })} onClick={() => handleClickPrev()}>
          <FaChevronCircleLeft />
        </div>
        <div className={clsx({ [styles.button]: true, [styles.next]: true })} onClick={() => handleClickNext()}>
          <FaChevronCircleRight />
        </div>
      </div>
      <div className={styles.inner} style={{ maxWidth: width, maxHeight: height, minHeight: height }}>
        {children.map((child, index) => (
          <div
            key={index}
            className={clsx({
              [styles.item]: true,
              [styles.next]: index === nextIndex,
              [styles.leaving]: index === leavingIndex,
              [styles.righttransition]: rightTransition && (index === leavingIndex || index === activeIndex),
              [styles.lefttransition]: leftTransition && (index === leavingIndex || index === activeIndex),
              [styles.active]: index === activeIndex || index === nextIndex,
            })}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
