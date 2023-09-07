import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header className={styles.nav}>
      <Link to="../../../page/Home" className={styles.link}>
        <p
          className={styles.text}
          style={{
            fontSize: "28px",
            color: "#000",
            marginLeft: "58px",
          }}
        >
          별세
          <span
            className={styles.text}
            style={{ fontSize: "25px", padding: "0px 0px", color: "#000" }}
          >
            (別世)
          </span>
        </p>
      </Link>
      <div className={styles.bannerContainer}>
        <Link to="../../../page/Intro">
          <p className={styles.text}>서비스 소개</p>
        </Link>
        <Link to="../../../page/Writing1">
          <p className={styles.text}>유언장 작성하기</p>
        </Link>
        <Link to="../../../page/Searching">
          <p className={styles.text}>유언장 찾기</p>
        </Link>
        <Link to="../../../page/LawyerMain">
          <p className={styles.text}>변호사 알아보기</p>
        </Link>
        <Link to="../../../page/LawyerReview">
          <p className={styles.text}>법률 문의 게시판</p>
        </Link>
        <Link to="../../../page/Login">
          <button className={styles.button}>
            <p
              className={styles.text}
              style={{ color: "#fff", padding: "5px 17px" }}
            >
              로그인/회원가입
            </p>
          </button>
        </Link>
      </div>
    </header>
  );
};
