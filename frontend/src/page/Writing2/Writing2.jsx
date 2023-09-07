import React from 'react';
import styles from './Writing2.module.css';
import { Progress } from './components/Progress';
import { PageNavigation } from 'components';
import { Q1 } from './components/Q1';
import { Q2 } from './components/Q2';

export const Writing2 = () => {
  return (
    <div className={styles.root}>
      <Progress />
      <div className={styles.container}>
        <Q1 />
        <Q2 />
        <PageNavigation nextPath="/writing6" />
      </div>
    </div>
  );
};
