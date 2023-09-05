import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import instance from '../../api/axios';

const SignUp = () => {
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
    <div className={styles.root}>
      <h1>회원가입</h1>
      <form className={styles.form}>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        <label htmlFor="password">비밀번호 확인</label>
        <input
          type="password"
          id="password"
          name="password"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
        {passwordConfirm.length !== 0 && password !== passwordConfirm && <span>비밀번호가 일치하지 않습니다.</span>}
        <label htmlFor="nickname">닉네임</label>
        <input type="text" id="nickname" name="nickname" value={username} onChange={handleUserNameChange} />
        <label htmlFor="phone">전화번호</label>
        <input type="tel" id="phone" name="phone" value={phoneNumber} onChange={handlePhoneNumberChange} />
        <button type="submit" onClick={handleSignUp}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
