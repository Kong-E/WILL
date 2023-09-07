import React, { useState } from 'react';
import styles from './Q2.module.css';
import { useRecoilState } from 'recoil';
import { selectedOptionState2 } from '../../state';

export const Q2 = () => {
  const [selectedOption2, setSelectedOption2] = useRecoilState(selectedOptionState2);
  const [clickedOption2, setClickedOption2] = useState(null);

  const handleOptionClick2 = option => {
    setSelectedOption2(option);
    setClickedOption2(option); // 클릭된 버튼의 값을 저장
    sessionStorage.setItem('selectedOption2', option); // 세션 스토리지에 저장
  };

  //희망사항 입력
  const handleCommentSubmit = event => {
    event.preventDefault();
    // 여기에 댓글을 서버에 제출하는 로직을 추가할 수 있습니다.
  };

  return (
    <div className={styles.root}>
      <div className={styles.q2_container}>
        <div className={styles.title}>질문2. 원하시는 묘는 무엇인가요?</div>

        <div className={styles.q2Select_container}>
          <button
            className={`${styles.selectBox} ${clickedOption2 === '매장묘' && styles.clicked}`}
            onClick={() => handleOptionClick2('매장묘')}>
            <div className={`${styles.title_text} ${clickedOption2 === '매장묘' && styles.clicked}`}>매장묘</div>
            <img className={styles.img} alt="매장묘" src="/images/q2-1.png" />
            <div className={`${styles.content_text} ${clickedOption2 === '매장묘' && styles.clicked}`}>
              전통 방식대로 <br />
              터에 묻히길 원해요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption2 === '봉안묘' && styles.clicked}`}
            onClick={() => handleOptionClick2('봉안묘')}>
            <div className={`${styles.title_text} ${clickedOption2 === '봉안묘' && styles.clicked}`}>봉안묘</div>
            <img className={styles.img} alt="매장묘" src="/images/q2-1.png" />
            <div className={`${styles.content_text} ${clickedOption2 === '봉안묘' && styles.clicked}`}>
              화장 후 실외 시설물에
              <br />
              안치되길 원해요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption2 === '납골당' && styles.clicked}`}
            onClick={() => handleOptionClick2('납골당')}>
            <div className={`${styles.title_text} ${clickedOption2 === '납골당' && styles.clicked}`}>납골당</div>
            <img className={styles.img} alt="매장묘" src="/images/q2-1.png" />
            <div className={`${styles.content_text} ${clickedOption2 === '납골당' && styles.clicked}`}>
            화장 후 실내 시설물에
          <br />
          안치되길 원해요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption2 === '수목장' && styles.clicked}`}
            onClick={() => handleOptionClick2('수목장')}>
            <div className={`${styles.title_text} ${clickedOption2 === '수목장' && styles.clicked}`}>수목장</div>
            <img className={styles.img} alt="매장묘" src="/images/q2-1.png" />
            <div className={`${styles.content_text} ${clickedOption2 === '수목장' && styles.clicked}`}>
            화장 후 나무 아래
          <br />
          안치되길 원해요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption2 === '잔디장' && styles.clicked}`}
            onClick={() => handleOptionClick2('잔디장')}>
            <div className={`${styles.title_text} ${clickedOption2 === '잔디장' && styles.clicked}`}>잔디장</div>
            <img className={styles.img} alt="매장묘" src="/images/q2-1.png" />
            <div className={`${styles.content_text} ${clickedOption2 === '잔디장' && styles.clicked}`}>
            화장 후 잔디 아래
          <br />
          묻히길 원해요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption2 === '기타' && styles.clicked}`}
            onClick={() => handleOptionClick2('기타')}>
            <div className={`${styles.title_text} ${clickedOption2 === '기타' && styles.clicked}`}>기타</div>
            <img className={styles.img} alt="매장묘" src="/images/q2-1.png" />
            <div className={`${styles.content_text} ${clickedOption2 === '기타' && styles.clicked}`}>
            저만의 원하는 방식이
          <br />
          따로 있어요.
            </div>
          </button>
        </div>
        <form onSubmit={handleCommentSubmit}>
          <textarea className={styles.hope_container} placeholder="희망사항을 남겨주세요" />
        </form>
      </div>
    </div>
  );
};
