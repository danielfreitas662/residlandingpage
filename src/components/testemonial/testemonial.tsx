'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './testemonials.module.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

export interface ITestemonial {
  avatar: string;
  text: string;
  name: string;
}
function Testemonial({ testemonial }: { testemonial: ITestemonial }) {
  return (
    <div
      className={clsx({
        [styles.testemonial]: true,
      })}
    >
      <div className={styles.avatar}>
        <Image src={testemonial.avatar} alt={testemonial.avatar} width={40} height={40} />
      </div>
      <div className={styles.text}>{testemonial.text}</div>
      <div className={styles.name}>{testemonial.name}</div>
    </div>
  );
}

export default Testemonial;
