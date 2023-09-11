import React, { useState } from 'react';
import styles from './SearchResultFail.module.scss';
import { useNavigate } from 'react-router';

export const SearchResultFail = () => {
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
        <img className="img" alt="Image" src="images/searchFail.png" />
        <div className={styles.title} style={{ fontSize: '25px', marginTop: '30px' }}>
          작성된 유언장이 없습니다.
        </div>
        <button className={styles.search_button} onClick={() => navigate('/searching')}>
          다시 검색하기
        </button>
      </div>
    </div>
  );
};
