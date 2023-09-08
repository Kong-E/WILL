import React, { useState } from 'react';
import styles from './Q2.module.css';
import { useRecoilState } from 'recoil';
import { selectedOptionState4 } from '../../state';

export const Q2 = () => {
  const [selectedOption4, setSelectedOption4] = useRecoilState(selectedOptionState4);
  const [clickedOption4, setClickedOption4] = useState(null);

  const handleOptionClick4 = option => {
    setSelectedOption4(option);
    setClickedOption4(option); // 클릭된 버튼의 값을 저장
    sessionStorage.setItem('selectedOption4', option); // 세션 스토리지에 저장
  };

  return (
    <div className={styles.root}>
      <div className={styles.q2_container}>
        <div className={styles.title}>질문4. 장기기증을 신청하셨나요?</div>

        <div className={styles.q2Select_container}>
          <button
            className={`${styles.selectBox} ${clickedOption4 === '장기기증을 신청하였습니다.' && styles.clicked}`}
            onClick={() => handleOptionClick4('장기기증을 신청하였습니다.')}>
            <div className={`${styles.title_text} ${clickedOption4 === '장기기증을 신청하였습니다.' && styles.clicked}`}>장기기증을 신청하였습니다.</div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption4 === '장기기증을 신청하지 않았습니다' && styles.clicked}`}
            onClick={() => handleOptionClick4('장기기증을 신청하지 않았습니다')}>
            <div className={`${styles.title_text} ${clickedOption4 === '장기기증을 신청하지 않았습니다' && styles.clicked}`}>장기기증을 신청하지 않았습니다</div>
          </button>
        </div>
       
      </div>
    </div>
  );
};
