import React, { useState, useEffect } from "react";
import styles from "./Lawyer.module.css";

export const Lawyer = () => {
    return (
      <div className={styles.container}>
        <img src="Home1.png" className={styles.image}></img>
        <p className={styles.name}>
          홍길동
          <span className={styles.text}>
            변호사
          </span>
        </p>
        <p className={styles.info}>법무법인 동국<br/>
        서울특별시 ·상속 분야
        </p>
      </div>
    );
}