import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import instance from '../../api/axios';
import { LoginState, UserState } from '../../stores/login-store';
import { useSetRecoilState } from 'recoil';

export const Login = () => {
  // Get the setter for LoginState and UserState atoms
  const setIsLoggedIn = useSetRecoilState(LoginState);
  const setUserState = useSetRecoilState(UserState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleLogin = async event => {
    event.preventDefault();

    try {
      const tokenResponse = await instance.post(
        '/api/auth/signin',
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        },
      );
      const { token } = tokenResponse.data;
      const currentDate = new Date().getTime();
      const expirationDate = new Date(currentDate + 60 * 60 * 1000);
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate.toString());
      console.log('로그인 성공:', tokenResponse.data);

      // 유저 정보 받아오기
      const userResponse = await instance.get('/api/mypage', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = userResponse.data;
      console.log('유저정보:', user);

      // 로그인 성공 후
      setIsLoggedIn(true);
      setUserState(user);
      /* 
      navigate('/');
      window.location.reload(); */
    } catch (error) {
      console.error('로그인 실패:', error.response.data.reason);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>로그인</h1>
      <h2 className={styles.subtitle}>원활한 이용을 위해 로그인해주세요.</h2>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
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
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <button className={styles.login_button} type="submit" onClick={handleLogin}>
          로그인
        </button>
        <button className={styles.join_button} type="button" onClick={() => navigate('/join')}>
          회원가입
        </button>
      </form>
    </div>
  );
};
