import React from 'react';
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <header className={styles.nav}>
      <p
        className={styles.text}
        style={{
          fontSize: '28px',
          color: '#000',
          marginLeft: '58px',
        }}>
        별세
        <span className={styles.text} style={{ fontSize: '25px', padding: '0px 0px', color: '#000' }}>
          (別世)
        </span>
      </p>
      <div className={styles.bannerContainer}>
        <p className={styles.text}>서비스 소개</p>
        <p className={styles.text}>유언장 작성하기</p>
        <p className={styles.text}>유언장 찾기</p>
        <p className={styles.text}>변호사 알아보기</p>
        <p className={styles.text}>법률 문의 게시판</p>
        <button className={styles.button}>
          <p className={styles.text} style={{ color: '#fff', padding: 'px 17px' }}>
            로그인/회원가입
          </p>
        </button>
      </div>
    </header>
  );
};
