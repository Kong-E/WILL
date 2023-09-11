import React, { useState } from 'react';
import styles from './Searching.module.scss';
import { useNavigate } from 'react-router-dom';

export const Searching = () => {
  const [name, setName] = useState('');
  const [firstCode, setFirstCode] = useState('');
  const [lastCode, setLastCode] = useState('');
  const navigate = useNavigate();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleFirstCodeChange = e => {
    setFirstCode(e.target.value);
  };

  const handleLastCodeChange = e => {
    setLastCode(e.target.value);
  };

  const handleSave = () => {
    const code = `${firstCode}-${lastCode}`;
    // 여기에서 주민번호 `code`를 활용하거나 저장할 수 있습니다.
    console.log('주민번호:', code);

        // 주민번호와 이름을 검사하여 존재하면 성공 페이지 이동
        if (name && code) {
          navigate('/'); // 페이지 이동
        } else {
          navigate('/searchResult'); // 실패페이지 이동
        }
  };

    return (
    <div className={styles.container}>
    <h1 className={styles.title}>          유언장 찾기
</h1>
    <h2 className={styles.subtitle}>          가족의 유언장이 보관되어 있는지 확인해보세요.
</h2>

    <form className={styles.form}>
    <div className={styles.wrapper}>
        <label htmlFor="name" style={{ marginLeft: '1.9em', marginRight: '10px'}}>이름</label>
        <input type="text" id="name" placeholder="이름을 입력해주세요" value={name} onChange={handleNameChange} />

      </div>
      <div className={styles.wrapper}>
        <label htmlFor="code" style={{ marginRight: '10px'}}>주민번호</label>
        <input type="text" id="code" placeholder="주민번호 앞자리" value={firstCode} onChange={handleFirstCodeChange} />
              <div className={styles.text} style={{ marginLeft: '10px',marginRight: '10px'}}>-</div>
              <input type="text" id="code" placeholder="주민번호 뒷자리" value={lastCode} onChange={handleLastCodeChange} />
      </div>
      <button className={styles.search_button} type="submit" onClick={handleSave}>
        검색하기
      </button>
    </form>
  </div>
  );
};
