import React, { useState } from 'react';
import styles from './SearchComplete.module.scss';
import { useNavigate } from 'react-router';

export const SearchComplete = () => {
  const name = sessionStorage.getItem('name');
  const code = sessionStorage.getItem('code');
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <form className={styles.search_container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>이름</div>
          <div className={styles.text} style={{ marginLeft: '77.46px' }}>
            {name}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.title}>보안코드</div>
          <div className={styles.text} style={{ marginLeft: '44.46px' }}>
            {code}
          </div>
        </div>
      </form>
      <div className={styles.result_container}>
        <img className="img" alt="Image" src="images/searchComplete.png" />
        <div className={styles.title} style={{ fontSize: '24px', marginTop: '30px' }}>
          유언장 찾기 요청이 완료되었습니다.{' '}
        </div>
        <div className={styles.subtitle} style={{ marginTop: '10px' }}>
          이메일로 유언장 텍스트 파일과 녹음 파일이 전송되었습니다.{' '}
        </div>
        <button className={styles.search_button} onClick={() => navigate('/')}>
          홈으로 가기
        </button>
      </div>
    </div>
  );
};
