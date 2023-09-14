import React, { useState } from 'react';
import styles from './SearchResultSuccess.module.scss';
import { useNavigate } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ParamsState, TxHashState } from 'stores/search-store';

export const SearchResultSuccess = () => {
  const [txHash, setTxHash] = useRecoilState(TxHashState);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <form className={styles.search_container}>
        {/* <div className={styles.wrapper}>
          <div className={styles.title}>이름</div>
          <div className={styles.text} style={{ marginLeft: '77.46px' }}>
            {name}
          </div>
        </div> */}
        <div className={styles.wrapper}>
          <div className={styles.title}>보안코드</div>
          <div className={styles.text} style={{ marginLeft: '44.46px' }}>
            {txHash}
          </div>
        </div>
      </form>
      <div className={styles.result_container}>
        <img className="img" alt="Image" src="images/searchSuccess.png" />
        <div className={styles.title} style={{ fontSize: '24px', marginTop: '30px' }}>
          작성된 유언장이 있습니다.
        </div>
        <div className={styles.subtitle} style={{ marginTop: '10px' }}>
          유언장을 찾으시겠습니까?
        </div>
        <button className={styles.search_button} onClick={() => navigate('/searchComplete')}>
          유언장 찾기
        </button>
      </div>
    </div>
  );
};
