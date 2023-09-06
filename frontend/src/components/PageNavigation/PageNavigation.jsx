import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PageNavigation.module.css';

export const PageNavigation = ({ nextPath }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button
        className={styles.previous_button}
        onClick={() => {
          navigate(-1);
        }}>
        이전으로
      </button>
      <button
        className={styles.next_button}
        onClick={() => {
          navigate(nextPath);
        }}>
        다음으로
      </button>
    </div>
  );
};
