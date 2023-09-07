import React from "react";
import styles from "./style.css";

export const Progress = () => {

  return (
    <div className={styles.root}>
        <div className="textcontainer">
        <p
          className={styles.text}
          style={{ fontSize: "32px", marginTop: "49px" }}
        >
          유언장 작성하기
        </p>
      </div>
      <div className="box">
        <div className="box2">
          <div className="navbar">
            <div className="group">
              <img className="line" alt="Line" src="line-1.svg" />
              <div className="group1">
                <div className="overlap-group">
                  <div className="rectangle-1" />
                  <img className="polygon" alt="Polygon" src="polygon.svg" />
                </div>
              </div>
            </div>
            <div className="group1" style={{ left: "456px" }}>
              <div className="overlap-group">
                <div className="rectangle-1" />
                <img className="polygon" alt="Polygon" src="polygon.svg" />
              </div>
            </div>

            <div className="group1" style={{ left: "152px" }}>
              <div className="overlap-group">
                <div className="rectangle-1" />
                <img className="polygon" alt="Polygon" src="polygon.svg" />
              </div>
            </div>
            <div className="group1" style={{ left: "608px" }}>
              <div className="overlap-group">
                <div className="rectangle-1" />
                <img className="polygon" alt="Polygon" src="polygon.svg" />
              </div>
            </div>
            <div className="group1" style={{ left: "304px" }}>
              <div className="overlap-group">
                <div className="rectangle-1" />
                <img className="polygon" alt="Polygon" src="polygon.svg" />
              </div>
            </div>
            <div className="group1" style={{ left: "760px" }}>
              <div className="overlap-group">
                <div className="rectangle-1" />
                <img className="polygon" alt="Polygon" src="polygon.svg" />
              </div>
            </div>
            <div className="text" style={{ left: "18px" }}>
              1
            </div>
            <div className="text" style={{ left: "171px" }}>
              2
            </div>
            <div className="text" style={{ left: "324px" }}>
              3
            </div>
            <div className="text" style={{ left: "476px" }}>
              4
            </div>
            <div className="text" style={{ left: "627px" }}>
              5
            </div>
            <div className="text" style={{ left: "779px" }}>
              6
            </div>

            <div className="text-2">장례식</div>

            <div className="text-2" style={{ left: "154px" }}>
              의료
            </div>
            <div className="text-2" style={{ left: "280px" }}>
              상속 재산
            </div>
            <div className="text-2" style={{ left: "458px" }}>
              유언
            </div>
            <div className="text-2" style={{ left: "610px" }}>
              녹음
            </div>
            <div className="text-2" style={{ left: "712px", width: "150px" }}>
              열람인 지정
            </div>
          </div>
        </div>
      </div>
      </div>

  );
};