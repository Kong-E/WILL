import React, { useState } from 'react';
import styled from "./Faq.module.css";
import {Realbox} from "./components/Realbox"

export const Faq = () => {
  return (
    <div className={styled.Root}>
      <div className={styled.image1}>
          <p
            className={styled.text}
            style={{
              fontSize: '40px',
              fontWeight: '700',
              marginTop: '70px',
              textShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
              position: 'absolute',
            }}>
            FAQ
          </p>
          <p
            className={styled.text}
            style={{
              marginTop: '140px',
              textShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
              position: 'absolute',
            }}>
            자주 묻는 질문
          </p>
        </div>
      <div className={styled.subbox}>
        <div className={styled.nobox}>No</div>
        <div className={styled.contentbox}>제목</div>
        <div className={styled.timebox}>작성일</div>
        <div className={styled.viewbox}>조회수</div>
      </div>
      <Realbox index={0}/>
      <Realbox index={1}/>
      <Realbox index={2}/>
      <Realbox index={3}/>
      <Realbox index={4}/>
      <Realbox index={5}/>
      <Realbox index={6}/>
      <Realbox index={7}/>
      <Realbox index={8}/>
      <Realbox index={9}/>
    </div>
  );
};
