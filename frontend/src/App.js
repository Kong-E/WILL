import React from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Navigate, Route, Routes, redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  Home,
  Intro,
  Searching,
  SearchResult,
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
  LawyerReview,
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
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/writing1" element={<Writing1 />} />
          <Route path="/writing2" element={<Writing2 />} />
          <Route path="/writing3" element={<Writing3 />} />
          <Route path="/writing4" element={<Writing4 />} />
          <Route path="/writing5" element={<Writing5 />} />
          <Route path="/writing6" element={<Writing6 />} />
          <Route path="/writing7" element={<Writing7 />} />
          <Route path="/writing8" element={<Writing8 />} />
          <Route path="/writing9" element={<Writing9 />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={isLogin ? <Navigate to="/mypage" /> : <Login />} />
          <Route path="/join" element={isLogin ? <Navigate to="/mypage" /> : <Join />} />
          <Route path="/mypage" element={isLogin ? <MyPage /> : <Navigate to="/login" />} />
          <Route path="/lawyerMain" element={<LawyerMain />} />
          <Route path="/lawyerReview" element={<LawyerReview />} />
          <Route path="/lawyerProfile" element={<LawyerProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
