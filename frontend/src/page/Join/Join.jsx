import React, { useState } from 'react';
import styles from './Join.module.scss';
import instance from '../../api/axios';

export const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPassowrdConfirm] = useState('');
  const [username, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = e => {
    setPassowrdConfirm(e.target.value);
  };

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  const handleSignUp = async event => {
    event.preventDefault();

    try {
      const response = await instance.post(
        '/api/auth/signup',
        {
          email: email,
          password: password,
          username: username,
          phoneNumber: phoneNumber,
        },
        {
          withCredentials: true,
        },
      );
      console.log('회원가입 성공:', response.data);
    } catch (error) {
      console.log('회원가입 실패:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <h2 className={styles.subtitle}>원활한 이용을 위해 로그인해주세요.</h2>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="password">비밀번호 확인</label>
          <input
            type="password"
            id="password"
            name="password"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </div>
        {passwordConfirm.length !== 0 && password !== passwordConfirm && (
          <span className={styles.password_confirm}>비밀번호가 일치하지 않습니다.</span>
        )}
        <div className={styles.wrapper}>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={username}
            onChange={handleUserNameChange}
            placeholder="닉네임을 입력해주세요."
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="phone">전화번호</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="전화번호를 입력해주세요."
          />
        </div>
        <button className={styles.join_button} type="submit" onClick={handleSignUp}>
          회원가입
        </button>
      </form>
    </div>
  );
};
