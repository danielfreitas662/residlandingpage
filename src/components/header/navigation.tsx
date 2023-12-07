'use client';
import { useTranslations } from 'next-intl';
import styles from './header.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

function Navigation() {
  const t = useTranslations('home');
  const [show, setShow] = useState(false);
  const [transitionOn, setTransitionOn] = useState(false);
  const [transitionOff, setTransitionOff] = useState(false);
  const ref = useRef<any>();
  const handleOn = () => {
    setTransitionOn(true);
    setShow(true);
    setTimeout(() => {
      setTransitionOn(false);
    }, 500);
  };
  const handleOff = () => {
    setTransitionOff(true);
    setTimeout(() => {
      setShow(false);
      setTransitionOff(false);
    }, 500);
  };
  useEffect(() => {
    const eventHandle = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOff();
      }
    };
    document.addEventListener('click', eventHandle);
    return () => document.removeEventListener('click', eventHandle);
  }, []);
  return (
    <div className={styles.navigation}>
      <div
        ref={ref}
        className={clsx({
          [styles.menubutton]: true,
          [styles.show]: show,
          [styles.transitionOn]: transitionOn,
          [styles.transitionOff]: transitionOff,
        })}
        onClick={() => (show ? handleOff() : handleOn())}
      >
        <AiOutlineMenu />
      </div>
      <nav
        className={clsx({
          [styles.nav]: true,
          [styles.show]: show,
          [styles.transitionOn]: transitionOn,
          [styles.transitionOff]: transitionOff,
        })}
      >
        <Link href="/">{t('footer.inicio')}</Link>
        <Link href="/realizacoes">{t('footer.realizacoes')}</Link>
        <Link href="/sobre">{t('footer.sobre')}</Link>
        <Link href="/servicos">{t('footer.servicos')}</Link>
      </nav>
    </div>
  );
}
export default Navigation;
