'use client';
import { ReactNode, useState } from 'react';
import styles from './fullscreen.module.scss';
import clsx from 'clsx';
function Fullscreen({ children }: { children: ReactNode }) {
  const [full, setFull] = useState(false);

  return (
    <div className={clsx({ [styles.fullscreen]: true, [styles.full]: full })} onClick={() => setFull(true)}>
      <div className={clsx({ [styles.children]: true, [styles.full]: full })}>{children}</div>
      <div className={clsx({ [styles.mask]: true, [styles.full]: full })} onClick={() => setFull(false)} />
    </div>
  );
}
export default Fullscreen;
