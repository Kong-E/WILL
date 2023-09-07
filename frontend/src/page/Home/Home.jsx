import React from "react";
import styles from "./Home.module.css";
import {Lawyer} from "../../components/Lawyer/Lawyer";
import {Button} from "./Button/Button";


export const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img className={styles.image1} />
        <p
          className={styles.text}
          style={{
            marginTop: "194px",
            textShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            position: "absolute",
          }}
        >
          블록체인 유언장 법률 커뮤니티 별세(別世)
        </p>
        <p
          className={styles.text}
          style={{
            fontSize: "68px",
            fontWeight: "700",
            marginTop: "230px",
            textShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            position: "absolute",
          }}
        >
          당신의 유언장을 남겨보세요.
        </p>
        <button className={styles.button} style={{ marginTop: "405px" }}>
          <p
            className={styles.text}
            style={{ fontSize: "28px", fontWeight: "700", color: "#000" }}
          >
            유언장 작성하기
          </p>
        </button>
      </div>
      <div
        className={styles.container}
        style={{ background: "#F4F4F4", height: "470px" }}
      >
        <p
          className={styles.text}
          style={{
            color: "#2E2E30",
            fontSize: "32px",
            fontWeight: "700",
            paddingTop: "35px",
          }}
        >
          현재 12,203,566개의 유언장이 보관되었습니다.
        </p>
        <p
          className={styles.text}
          style={{
            color: "#898394",
            fontSize: "24px",
            fontWeight: "400",
          }}
        >
          저장된 유언장은 블록체인 기술을 통해
          <br />
          타인에 의해 훼손되지 않고 안전하게 보관됩니다.
        </p>
        <div className={styles.illust}>image</div>
      </div>
      <div
        className={styles.container}
        style={{ height: "988px", padding: "147px 197px" }}
      >
        <p
          className={styles.text}
          style={{
            color: "#2E2E30",
            fontWeight: "700",
            fontSize: "32px",
            marginBottom: "60px",
          }}
        >
          별세와 함께 상속과 관련한
          <br />
          법률적 고민을 해결하세요.
        </p>
        <div className={styles.lawyerContainer}>
          <Lawyer />
          <Lawyer />
          <Lawyer />
          <Lawyer />
        </div>
      </div>
    </div>
  );
};
