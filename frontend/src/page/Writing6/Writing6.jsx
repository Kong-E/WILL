import React, { useEffect } from 'react';
import styles from './Writing6.module.scss';
import { PageNavigation, Progress } from 'components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { WillState } from 'stores/will-store';

export const Writing6 = () => {
  const [willState, setWillState] = useRecoilState(WillState);
  return (
    <>
      <Progress step={5} />
      <div className={styles.container}>
        <div className={styles.info_container}>
          <div className={styles.title}>녹음하기</div>
          <div className={styles.text}>
            법적 효력이 있는 유언장을 저장하기 위해 작성해주신 유언장 내용을 바탕으로 녹음을 진행합니다.
          </div>
          <div className={styles.legal_effect_wrapper}>
            <img className={styles.legal_effect_img} src="/images/QuestionMark.svg" alt="question_mark" />
            법적 효력 안내
          </div>
        </div>
        <div className={styles.record_container}>
          <img className={styles.record_img} src="/images/record.svg" alt="record" />
          <div className={styles.record_button}>녹음 시작하기</div>
          <div className={styles.text}>녹음이 시작되면 유언장 내용을 읽어주세요.</div>
        </div>
        <div className={styles.will_textarea}>
          <div>{willState.funeral.selected}</div>
          <div>{willState.funeral.note}</div>
          <div>{willState.grave.selected}</div>
          <div>{willState.grave.note}</div>
          <div>{willState.lifeSupport.selected}</div>
          <div>{willState.organDonation.selected}</div>
          <div>{willState.inheritance.selected}</div>
          <div>{willState.inheritance.note}</div>
        </div>
        <PageNavigation nextPath="/writing7" />
        <div className={styles.date_text}>작성일자 서기 YYYY년 MM월 DD일</div>
      </div>
    </>
  );
};
