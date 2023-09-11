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
    <div>
      <h1>Login</h1>
      <form className={styles.form}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <button type="submit" onClick={handleLogin}>
          Sign In
        </button>
        <button type="button" onClick={() => navigate('/join')}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
