import React, { useState } from 'react';
import styles from './Q4.module.css';
import { useRecoilState } from 'recoil';
import { WillState } from 'stores/will-store';
import { Option } from 'components';

const organDonationOptions = [
  {
    id: 1,
    title: '장기기증을 신청하였습니다.',
  },
  {
    id: 2,
    title: '장기기증을 신청하지 않았습니다.',
  },
];

export const Q4 = () => {
  const [willState, setWillState] = useRecoilState(WillState);
  const [clickedOption, setClickedOption] = useState('');

  const handleOptionClick = option => {
    setClickedOption(option); // 클릭된 버튼의 값을 저장
    setWillState(prevWillState => ({
      ...prevWillState,
      organDonation: {
        ...prevWillState.organDonation,
        selected: option,
      },
    }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.q2_container}>
        <div className={styles.title}>질문4. 장기기증을 신청하셨나요?</div>

        <div className={styles.q2Select_container}>
          {organDonationOptions.map(option => (
            <Option
              key={option.id}
              onClick={() => handleOptionClick(option.title)}
              active={clickedOption === option.title || willState.organDonation.selected === option.title}>
              {option.title}
            </Option>
          ))}
        </div>
      </div>
    </div>
  );
};
