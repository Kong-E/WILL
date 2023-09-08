import React, { useState } from 'react';
import styles from './Q3.module.css';
import { useRecoilState } from 'recoil';
import { selectedOptionState3 } from '../../state';

export const Q3 = () => {
  const [selectedOption3, setSelectedOption3] = useRecoilState(selectedOptionState3);
  const [clickedOption3, setClickedOption3] = useState(null);

  const handleOptionClick3 = option => {
    setSelectedOption3(option);
    setClickedOption3(option); // 클릭된 버튼의 값을 저장
    sessionStorage.setItem('selectedOption3', option); // 세션 스토리지에 저장
  };

  return (
    <div className={styles.root}>
      <div className={styles.q3_container}>
        <div className={styles.title}>질문3. 연명치료에 대해 결정된 사항이 있나요?</div>

        <div className={styles.q3Select_container}>
          <button
            className={`${styles.selectBox} ${clickedOption3 === '연명치료를 원해요' && styles.clicked}`}
            onClick={() => handleOptionClick3('연명치료를 원해요')}>
            <div className={`${styles.title_text} ${clickedOption3 === '연명치료를 원해요' && styles.clicked}`}>연명치료를 원해요</div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption3 === '연명치료를 원하지 않아요' && styles.clicked}`}
            onClick={() => handleOptionClick3('연명치료를 원하지 않아요')}>
            <div className={`${styles.title_text} ${clickedOption3 === '연명치료를 원하지 않아요' && styles.clicked}`}>연명치료를 원하지 않아요</div>
          </button>
        </div>


      </div>
    </div>
  );
};
