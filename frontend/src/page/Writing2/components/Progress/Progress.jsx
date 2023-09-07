import React from 'react';
import styles from './Progress.module.css';

export const Progress = () => {
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <p className={styles.text} style={{ fontSize: '32px', marginTop: '70px' }}>
          유언장 작성하기
        </p>
      </div>

      <div className={styles.totalBox}>
        <div className={styles.box2}>
          <div className={styles.navbar}>
            <img className={styles.line} alt="Line" src="line-1.svg" />

            <div className={styles.group1}>
              <div className={styles.overlapGroup}>
                <div className={styles.rectangle1} />
                <img className={styles.polygon} alt="Polygon" src="/images/polygon.svg" />
              </div>
            </div>
            <div className={styles.group1} style={{ left: '152px' }}>
              <div className={styles.overlapGroup}>
                <div className={styles.rectangle1} />
                <img className={styles.polygon} alt="Polygon" src="/images/polygon.svg" />
              </div>
            </div>
            <div className={styles.group1} style={{ left: '304px' }}>
              <div className={styles.overlapGroup}>
                <div className={styles.rectangle1} />
                <img className={styles.polygon} alt="Polygon" src="/images/polygon.svg" />
              </div>
            </div>
            <div className={styles.group1} style={{ left: '456px' }}>
              <div className={styles.overlapGroup}>
                <div className={styles.rectangle1} />
                <img className={styles.polygon} alt="Polygon" src="/images/polygon.svg" />
              </div>
            </div>
          </div>

          <div className={styles.group1} style={{ left: '608px' }}>
            <div className={styles.overlapGroup}>
              <div className={styles.rectangle1} />
              <img className={styles.polygon} alt="Polygon" src="/images/polygon.svg" />
            </div>
          </div>

          <div className={styles.group1} style={{ left: '760px' }}>
            <div className={styles.overlapGroup}>
              <div className={styles.rectangle1} />
              <img className={styles.polygon} alt="Polygon" src="/images/polygon.svg" />
            </div>
          </div>
          <div className={styles.numberText} style={{ left: '18px' }}>
            1
          </div>
          <div className={styles.numberText} style={{ left: '171px' }}>
            2
          </div>
          <div className={styles.numberText} style={{ left: '324px' }}>
            3
          </div>
          <div className={styles.numberText} style={{ left: '476px' }}>
            4
          </div>
          <div className={styles.numberText} style={{ left: '627px' }}>
            5
          </div>
          <div className={styles.numberText} style={{ left: '779px' }}>
            6
          </div>

          <div className={styles.progressText}>장례식</div>
          <div className={styles.progressText} style={{ left: '154px' }}>
            의료
          </div>
          <div className={styles.progressText} style={{ left: '280px' }}>
            상속 재산
          </div>
          <div className={styles.progressText} style={{ left: '458px' }}>
            유언
          </div>
          <div className={styles.progressText} style={{ left: '610px' }}>
            녹음
          </div>
          <div className={styles.progressText} style={{ left: '712px', width: '150px' }}>
            열람인 지정
          </div>
        </div>
      </div>
    </div>
  );
};
