import styles from './BottomBack.module.css';
import { lawyers } from "utils/Lawyers";
import { useState } from 'react';

export const BottomBack = ({index}) => {
  const [isBookmarked, setIsBookmarked] = useState(false); // 북마크 상태를 저장하는 상태와 해당 상태를 업데이트하는 함수를 추가해주세요.

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked); // 북마크 상태를 토글합니다.
  }

  const lawyerData = lawyers[index];
  
  return (
    <div className={styles.container}>
        <button
        className={`${styles.bookmarkButton} ${isBookmarked ? styles.bookmarked : ''}`}
        onClick={toggleBookmark}
      >
         <span className={styles.bookmarkIcon}></span>
         </button>
      <img src={lawyerData.profile} className={styles.image} />
      <p className={styles.name}>
        {lawyerData.name}
        <span className={styles.text}>변호사</span>
      </p>
      <p className={styles.info}>
        {lawyerData.company}
        <br />
      </p>
      <p className={styles.info}>
        {lawyerData.realarea}
      </p>
      <p className={styles.info2}>
        {lawyerData.phone}
      </p>
      <div className={styles.put}>
        <p className={styles.pushing}>빠른 상담</p>
      </div>
    </div>
  );
};