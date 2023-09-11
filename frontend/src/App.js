import React from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Navigate, Route, Routes, redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  Home,
  Intro,
  Searching,
  SearchResultFail,
  Writing1,
  Writing2,
  Writing3,
  Writing4,
  Writing5,
  Writing6,
  Writing7,
  Writing8,
  Writing9,
  Faq,
  Login,
  Join,
  MyPage,
  LawyerMain,
  LawyerProfile,
} from './page';
import { LoginState } from 'stores/login-store';
import { Layout } from './Routes/Layout';

const App = () => {
  const isLogin = useRecoilValue(LoginState);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/searching" element={<Searching />} />
          <Route path="/searchResultFail" element={<SearchResultFail />} />
          <Route path="/writing1" element={isLogin ? <Writing1 /> : <Navigate to="/login" />} />
          <Route path="/writing2" element={isLogin ? <Writing2 /> : <Navigate to="/login" />} />
          <Route path="/writing3" element={isLogin ? <Writing3 /> : <Navigate to="/login" />} />
          <Route path="/writing4" element={isLogin ? <Writing4 /> : <Navigate to="/login" />} />
          <Route path="/writing5" element={isLogin ? <Writing5 /> : <Navigate to="/login" />} />
          <Route path="/writing6" element={isLogin ? <Writing6 /> : <Navigate to="/login" />} />
          <Route path="/writing7" element={isLogin ? <Writing7 /> : <Navigate to="/login" />} />
          <Route path="/writing8" element={isLogin ? <Writing8 /> : <Navigate to="/login" />} />
          <Route path="/writing9" element={isLogin ? <Writing9 /> : <Navigate to="/login" />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={isLogin ? <Navigate to="/mypage" /> : <Login />} />
          <Route path="/join" element={isLogin ? <Navigate to="/mypage" /> : <Join />} />
          <Route path="/mypage" element={isLogin ? <MyPage /> : <Navigate to="/login" />} />
          <Route path="/lawyerMain" element={<LawyerMain />} />
          <Route path="/lawyerProfile" element={<LawyerProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
