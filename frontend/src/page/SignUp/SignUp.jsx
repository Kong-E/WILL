import React from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.root}>
      <h1>회원가입</h1>
      <form className={styles.form}>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="password">비밀번호 확인</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="nickname">닉네임</label>
        <input type="text" id="nickname" name="nickname" />
        <label htmlFor="phone">전화번호</label>
        <input type="tel" id="phone" name="phone" />
      </form>
    </div>
  );
};

export default SignUp;
