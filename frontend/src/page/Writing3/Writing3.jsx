import React, { useState } from 'react';
import styles from './Writing3.module.css';
import { useNavigate } from 'react-router';

import { Progress } from '../../components/Progress';
import { PageNavigation } from 'components';
import { Q3 } from './components/Q3';
import { Q4 } from './components/Q4';

export const Writing3 = () => {
  return (
    <div className={styles.root}>
      <Progress step={2} />
      <div className={styles.container}>
        <Q3 />
        <Q4 />
        <PageNavigation nextPath="/writing6" />
      </div>
    </div>
  );
};
