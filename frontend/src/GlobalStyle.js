import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    /* --gray-50: #F4F4F4;
    --gray-100: #EEEDF1;
    --gray-300: #CBC8CF;
    --gray-600: #CBC8CF;
    --gray-900: #EEEDF1; */
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans KR", "Inter", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  /* 스크롤바 전체 기본 꾸미기 */
  body::-webkit-scrollbar {
    width: 12px;
  }

  /* 스크롤바 막대 꾸미기 */
  body::-webkit-scrollbar-thumb {
    background-color: #e5e7eb;
    border-radius: 10px;
  }

  /* 스크롤바 트랙 꾸미기 */
  body::-webkit-scrollbar-track {
    background-color: transparent;
  }

  a, ul, li, h1, h2, h3 {
    /* all: unset; */
    margin: 0;
    padding: 0;
  }

  input, textarea {
    /* border: none;
    outline: none; */
    font-family: "Noto Sans KR", "Inter", "sans-serif";
    /* font-weight: 500; */
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #94a3b8;
    }
  }

  button {
/*     border: none;
    outline: none; */
    cursor: pointer;
    font-family: "Noto Sans KR", "Inter", "sans-serif";
    background: transparent;
    /* font-weight: 500; */
    &:focus {
      outline: none;
    }
}`;

export default GlobalStyle;
