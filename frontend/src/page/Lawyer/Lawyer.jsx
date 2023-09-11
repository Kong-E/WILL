import styles from './LawyerMain.module.css';
import { BottomBack } from "./components";
import React, { useState } from 'react';

export const LawyerMain = () => {
  const [showMoreBottomBack, setShowMoreBottomBack] = useState(false);

  const handleMoreButtonClick = () => {
    setShowMoreBottomBack(true);
  };

  return (
    <div className={styles.root}>
     <div className={styles.container} style={{ height: 'auto', padding: '147px 197px' }}>
        <div className={styles.image1}>
          <p
            className={styles.text}
            style={{
              fontSize: '40px',
              fontWeight: '700',
              marginTop: '70px',
              textShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
              position: 'absolute',
            }}>
            변호사 알아보기
          </p>
          <p
            className={styles.text}
            style={{
              marginTop: '140px',
              textShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
              position: 'absolute',
            }}>
            상속과 관련된 법률적 고민을 함께할 변호사를 찾아보세요.
          </p>
        </div>

      <div className={styles.search}>
        <p className={styles.text3}>분야 / 지역 / 변호사 이름을 검색해보세요.</p>
        <div className={styles.search2}/>
      </div>
        <div className={styles.info_container}>
          <div className={styles.title1}>서울 지역 변호사</div>
        </div>
      <div className={styles.lawyerContainer}>
          <BottomBack index={0} />
          <BottomBack index={1} />
          <BottomBack index={2} />
          <BottomBack index={3} />
        </div>
      <div className={styles.info_container}>
          <div className={styles.title}>전체</div>
        </div>
        <div className={styles.lawyerContainer}>
          <BottomBack index={0} />
          <BottomBack index={1} />
          <BottomBack index={2} />
          <BottomBack index={3} />
        </div>
        <div className={styles.lawyerContainer2}>
          <BottomBack index={0} />
          <BottomBack index={1} />
          <BottomBack index={2} />
          <BottomBack index={3} />
        </div>
      </div>
      {!showMoreBottomBack && (
        <button className={styles.more} onClick={handleMoreButtonClick}>
          <div className={styles.moretext}>더보기</div>
        </button>
      )}
      {showMoreBottomBack && (
        <div className={styles.lawyerContainer3}>
          <BottomBack index={0} />
          <BottomBack index={1} />
          <BottomBack index={2} />
          <BottomBack index={3} />
        </div>
      )}
      {showMoreBottomBack && (
        <div className={styles.lawyerContainer4}>
          <BottomBack index={0} />
          <BottomBack index={1} />
          <BottomBack index={2} />
          <BottomBack index={3} />
        </div>
      )}
    </div>
  );
};
