import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Routes/Layout";
import {
  Home,
  Intro,
  Searching,
  SearchResultFail,
  SearchResultSuccess1,
  SearchResultSuccess2,
  SearchResultSuccess3,
  Writing1,
  Writing2,
} from "./page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/searching" element={<Searching />} />
            <Route path="/searchResultFail" element={<SearchResultFail />} />
            <Route path="/searchResultSuccess1" element={<SearchResultSuccess1 />} />
            <Route path="/searchResultSuccess2" element={<SearchResultSuccess2 />} />
            <Route path="/searchResultSuccess3" element={<SearchResultSuccess3 />} />
            <Route path="/writing1" element={<Writing1 />} />
            <Route path="/writing2" element={<Writing2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
