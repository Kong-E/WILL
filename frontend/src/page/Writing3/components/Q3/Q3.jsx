import React, { useState } from 'react';
import styles from './Q3.module.css';
import { useRecoilState } from 'recoil';
import { Option } from 'components';
import { WillState } from 'stores/will-store';

const lifeSupportOptions = [
  {
    id: 1,
    title: '연명치료를 원합니다.',
  },
  {
    id: 2,
    title: '연명치료를 원하지 않습니다.',
  },
];

export const Q3 = () => {
  const [willState, setWillState] = useRecoilState(WillState);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = option => {
    setSelectedOption(option);
    setWillState(prevWillState => ({
      ...prevWillState,
      lifeSupport: {
        ...prevWillState.lifeSupport,
        selected: option,
      },
    }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.q3_container}>
        <div className={styles.title}>질문3. 연명치료에 대해 결정된 사항이 있나요?</div>

        <div className={styles.q3Select_container}>
          {lifeSupportOptions.map(option => (
            <Option
              key={option.id}
              onClick={() => handleOptionClick(option.title)}
              active={selectedOption === option.title || willState.lifeSupport.selected === option.title}>
              {option.title}
            </Option>
          ))}
        </div>
      </div>
    </div>
  );
};
