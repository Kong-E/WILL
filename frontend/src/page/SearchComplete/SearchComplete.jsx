import React, { useEffect, useState } from 'react';
import styles from './SearchComplete.module.scss';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { ParamsState, TxHashState } from 'stores/search-store';

export const SearchComplete = () => {
  const [txHash, setTxHash] = useRecoilState(TxHashState);
  const [params, setParams] = useRecoilState(ParamsState);

  useEffect(() => {
    setTxHash('');
  }, []);

  return (
    <div className={styles.will_textarea}>
      <div className={styles.will_title}>{params[1]}님의 유언장</div>
      <div>
        저는 {params[1]}입니다. 오늘은 {params[4]}입니다. 나의 취지는 이 세상을 떠남으로써 내 사랑과 감사를 표현하고, 내
        가족과 사랑하는 모든 사람들에게 힘과 위로를 전하는 것입니다.
      </div>
      <br />
      <div>{params[2]}</div>
      <a href={`https://ipfs.io/ipfs/${params[3]}`} target="_blank" rel="noopener noreferrer">
        녹음 URL 바로가기
      </a>
    </div>
  );
};
