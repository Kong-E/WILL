import React, { useEffect } from 'react';
import styles from './Writing8.module.css';
import { useNavigate } from 'react-router-dom';

export const Writing8 = () =>{
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Writing9'); // 일정 시간이 지나면 '/nextPage'로 이동
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

      return (
        <div className={styles.container}>
          <p className={styles.textBig} style={{ marginTop: '150px' }}>
            블록체인 유언장을 생성 중입니다...
          </p>
          <p className={styles.text} style={{ marginTop: '0px' }}>
            저장된 유언장은 블록체인 기술
            <span className={styles.text} style={{ fontWeight: '500' }}>
            </span>
            을 통해 <br />
            타인에 의해 훼손되지 않고 안전하게 보관됩니다.
          </p>
          <img width="252px" height="170px" marginTop="27px" src="CreatWill.svg" />
        </div>
      );
};