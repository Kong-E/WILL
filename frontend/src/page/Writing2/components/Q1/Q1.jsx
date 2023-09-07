import React, { useState } from 'react';
import styles from './Q1.module.css';
import { useRecoilState } from 'recoil';
import { selectedOptionState } from '../../state';
export const Q1 = () => {
  const [selectedOption, setSelectedOption] = useRecoilState(selectedOptionState);
  const [clickedOption, setClickedOption] = useState(null);

  const handleOptionClick = option => {
    setSelectedOption(option);
    setClickedOption(option); // 클릭된 버튼의 값을 저장
    sessionStorage.setItem('selectedOption', option); // 세션 스토리지에 저장
  };

  //희망사항 입력
  const handleCommentSubmit = event => {
    event.preventDefault();
    // 여기에 댓글을 서버에 제출하는 로직을 추가할 수 있습니다.
  };
  return (
    <div className={styles.root}>
      <div className={styles.q1_container}>
        <div className={styles.title}>질문1. 어떤 장례식을 원하시나요?</div>

        <div className={styles.q1Select_container}>
          <button
            className={`${styles.selectBox} ${clickedOption === '일반 3일장' && styles.clicked}`}
            onClick={() => handleOptionClick('일반 3일장')}>
            <div className={`${styles.title_text} ${clickedOption === '일반 3일장' && styles.clicked}`}>일반 3일장</div>
            <div className={`${styles.content_text} ${clickedOption === '일반 3일장' && styles.clicked}`}>
              가족과 지인이
              <br />
              함께 했으면
              <br />
              좋겠어요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption === '가족장' && styles.clicked}`}
            onClick={() => handleOptionClick('가족장')}>
            <div className={`${styles.title_text} ${clickedOption === '가족장' && styles.clicked}`}>가족장</div>
            <div className={`${styles.content_text} ${clickedOption === '가족장' && styles.clicked}`}>
              가족이랑만
              <br />
              장례를 치르고
              <br />
              싶어요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption === '무빈소 장례식' && styles.clicked}`}
            onClick={() => handleOptionClick('무빈소 장례식')}>
            <div className={`${styles.title_text} ${clickedOption === '무빈소 장례식' && styles.clicked}`}>
              무빈소 장례식
            </div>
            <div className={`${styles.content_text} ${clickedOption === '무빈소 장례식' && styles.clicked}`}>
              빈소를 차리지
              <br />
              않고 간소하게 <br />
              하고싶어요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption === '종교장' && styles.clicked}`}
            onClick={() => handleOptionClick('종교장')}>
            <div className={`${styles.title_text} ${clickedOption === '종교장' && styles.clicked}`}>종교장</div>
            <div className={`${styles.content_text} ${clickedOption === '종교장' && styles.clicked}`}>
              제가 믿는 종교에 <br />
              따라 진행하고 <br />
              싶어요.
            </div>
          </button>

          <button
            className={`${styles.selectBox} ${clickedOption === '기타' && styles.clicked}`}
            onClick={() => handleOptionClick('기타')}>
            <div className={`${styles.title_text} ${clickedOption === '기타' && styles.clicked}`}>기타</div>
            <div className={`${styles.content_text} ${clickedOption === '기타' && styles.clicked}`}>
              저만의 희망하는
              <br />
              장례방식이
              <br />
              있어요.
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
