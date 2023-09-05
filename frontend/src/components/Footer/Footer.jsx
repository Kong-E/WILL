import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <footer className={styles.footer}>
        <p className={styles.text} style={{ fontSize: '25px', marginRight: '250px', marginTop: '49px' }}>
          별세(別世)
          <p className={styles.text} style={{ fontSize: '10px' }}>
            블록체인 유언장 법률 커뮤니티
          </p>
        </p>
        <p className={styles.text} style={{ marginLeft: '250px', marginTop: '49px' }}>
          (주)별세
          <br />
          오시는 길 : (도로명)[04620] 서울특별시 중구 필동로 1길 30
          <br />
          TEL : 010-1234-6289
          <br />
          우편 : 04620
          <br />
          <br />
          copyright © 별세팀
        </p>
      </footer>
    </div>
  );
};