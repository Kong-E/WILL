import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Routes/Layout';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/searching" element={<Searching />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/writing1" element={<Writing1 />} />
          <Route path="/writing2" element={<Writing2 />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/lawyerMain" element={<LawyerMain />} />
          <Route path="/lawyerReview" element={<LawyerReview />} />
          <Route path="/lawyerProfile" element={<LawyerProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
