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
      <div>{params[2]}</div>
      <a href={`https://ipfs.io/ipfs/${params[3]}`} target="_blank" rel="noopener noreferrer">
        녹음 URL
      </a>
      <div>{params[4]}</div>
    </div>
  );
};
