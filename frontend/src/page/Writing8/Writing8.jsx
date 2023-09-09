import React from 'react';
import styles from './Writing8.module.css';

export const Writing8 = () =>{
      return (
        <div className={styles.container}>
          <div className="group">
            <div className="text-wrapper">블록체인 유언장을 생성 중입니다...</div>
            <p className="div">
              <span className="span">저장된 유언장은 </span>
              <span className="text-wrapper-2">블록체인 기술</span>
              <span className="span">
                을 통해 <br />
                타인에 의해 훼손되지 않고 안전하게 보관됩니다.
              </span>
            </p>
          </div>
        </div>
      );
};