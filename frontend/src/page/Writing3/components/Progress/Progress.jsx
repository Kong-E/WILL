import React from 'react';
import styles from './Progress.module.css';

export const Progress = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}> 유언장 작성하기</div>
        <img className={styles.line} alt="Line" src="/images/line.svg" />

        <div className={styles.stepAll_container}>
        <div className={styles.step_container}>
            <div className={styles.numberBox}>
              <div className={styles.text}>1</div>
            </div>
            <img className={styles.polygon} alt="Polygon" src="/images/Polygon_small.svg" />
            <div className={styles.text} style={{ marginTop:"6px"}}>장례식</div>
          </div>

          <div className={styles.step_container}>
            <div className={styles.numberBox} style={{ backgroundColor: "#2e2e30"}}>
              <div className={styles.text} style={{ color: "#fff" }}>2</div>
            </div>
            <img className={styles.polygon} alt="Polygon" src="/images/Polygon_smallBlack.svg" />
            <div className={styles.text} style={{ color: "#2e2e30" , marginTop:"6px"}}>의료</div>
          </div>


          <div className={styles.step_container}>
            <div className={styles.numberBox}>
              <div className={styles.text}>3</div>
            </div>
            <img className={styles.polygon} alt="Polygon" src="/images/Polygon_small.svg" />
            <div className={styles.text} style={{ marginTop:"6px"}}>상속 재산</div>
          </div>

          <div className={styles.step_container}>
            <div className={styles.numberBox}>
              <div className={styles.text}>4</div>
            </div>
            <img className={styles.polygon} alt="Polygon" src="/images/Polygon_small.svg" />
            <div className={styles.text} style={{ marginTop:"6px"}}>유언</div>
          </div>
          <div className={styles.step_container}>
            <div className={styles.numberBox}>
              <div className={styles.text}>5</div>
            </div>
            <img className={styles.polygon} alt="Polygon" src="/images/Polygon_small.svg" />
            <div className={styles.text} style={{ marginTop:"6px"}}>녹음</div>
          </div>
          <div className={styles.step_container}>
            <div className={styles.numberBox}>
              <div className={styles.text}>6</div>
            </div>
            <img className={styles.polygon} alt="Polygon" src="/images/Polygon_small.svg" />
            <div className={styles.text} style={{ marginTop:"6px"}}>열람인 지정</div>
          </div>
        </div>
      </div>
    </div>
  );
};
