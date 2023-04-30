'use client';
import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import Logo from './logo';
import Navigation from './navigation';
function Header() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const scrollHandler = () => {
      setScrollY(window.scrollY);
    };
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  });
  return (
    <header className={clsx({ [styles.header]: true, [styles.scroll]: scrollY > 0 })}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
