import React, { useState } from 'react';
import './Viewer.css';

export const ViewerGroup = () => {
  const [inputs, setInputs] = useState([{ name: '', phone: '', relation: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { name: '', phone: '', relation: '' }]);
  };

  const handleRemoveInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  return (
    <div className="formContainer">
      {inputs.map((input, index) => (
        <div className="inputGroup" key={index}>
          <div className="LastContainer">
            <div className="topGroup">
            <div className="inputField">
            <label>이름</label>
            <input
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={input.name}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <div className="inputField">
            <label>이메일</label>
            <input
              type="text"
              name="phone"
              placeholder="이메일을 입력하세요"
              value={input.phone}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          </div>
          <div className="bottomGroup">
            <div className="relationField">
            <label>관계</label>
            <input
              type="text"
              name="relation"
              placeholder="작성자와의 관계를 입력하세요"
              value={input.relation}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          </div>
          </div>
          <div className="BehindContainer">
            {index !== 0 && (
            <button
              type="button"
              onClick={() => handleRemoveInput(index)}
              className="removeButton"
            >
              <p className="Axe">x </p>
               삭제
            </button>
          )}
          </div>
        </div>
      ))}
      <p className="explain">열람인으로 추가하면 유언장 개봉 날짜에 자동으로 이메일이 전송됩니다</p>
      <button type="button" onClick={handleAddInput} className="addButton">
        추가하기
      </button>
    </div>

  );
};