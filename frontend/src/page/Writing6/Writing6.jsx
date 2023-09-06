import { Option, PageNavigation } from 'components';
import React, { useState } from 'react';

export const Writing6 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = option => {
    setSelectedOption(option);
  };
  return (
    <div>
      <h1>Writing6</h1>
      <Option active={selectedOption === '옵션1'} onClick={() => handleOptionClick('옵션1')}>
        옵션1
      </Option>
      <Option active={selectedOption === '옵션2'} onClick={() => handleOptionClick('옵션2')}>
        옵션2
      </Option>
      <PageNavigation nextPath="/writing7" />
    </div>
  );
};
