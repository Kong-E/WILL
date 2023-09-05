import React from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom';
import { Layout } from './Routes/Layout';
import { useRecoilValue } from 'recoil';
import {
  Home,
  Intro,
  Searching,
  SearchResult,
  Writing1,
  Writing2,
  Faq,
  Login,
  Join,
  MyPage,
  LawyerMain,
  LawyerReview,
  LawyerProfile,
} from './page';
import { LoginState } from 'stores/login-store';

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
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={isLogin ? redirect('/myPage') : <Login />} />
          <Route path="/join" element={isLogin ? redirect('/myPage') : <Join />} />
          <Route path="/myPage" element={isLogin ? <MyPage /> : redirect('/login')} />
          <Route path="/lawyerMain" element={<LawyerMain />} />
          <Route path="/lawyerReview" element={<LawyerReview />} />
          <Route path="/lawyerProfile" element={<LawyerProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
