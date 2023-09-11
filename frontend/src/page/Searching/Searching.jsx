import React, { useState } from 'react';
import styles from './Searching.module.scss';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { nameState, codeState } from '../../stores/search-store';

export const Searching = () => {
  const [name, setName] = useRecoilState(nameState);
  const [code, setCode] = useRecoilState(codeState);
  const navigate = useNavigate();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleCodeChange = e => {
    setCode(e.target.value);
  };

  const handleSave = () => {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('code', code);
    // 보안코드와 이름을 검사하여 존재하면 성공 페이지 이동
    if (name && code) {
      navigate('/searchResultSuccess');
    } else {
      navigate('/searchResultFail');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> 유언장 찾기</h1>
      <h2 className={styles.subtitle}> 가족의 유언장이 보관되어 있는지 확인해보세요.</h2>

      <form className={styles.form}>
        <div className={styles.wrapper}>
          <label htmlFor="name" style={{  marginRight: '26px' }}>
          이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input type="text" id="name" placeholder="이름을 입력해주세요." value={name} onChange={handleNameChange} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="code" style={{ marginRight: '26px' }}>
            보안코드
          </label>
          <input
            type="text"
            id="code"
            placeholder="보안코드를 입력해주세요."
            value={code}
            onChange={handleCodeChange}
          />
        </div>
        <button className={styles.search_button} type="submit" onClick={handleSave}>
          검색하기
        </button>
      </form>
    </div>
  );
};
