// state.js (새로운 파일)
import { atom } from 'recoil';

//Q1 
export const selectedOptionState = atom({
    key: 'selectedOptionState',
    default: null, // 기본값은 null로 설정하거나 기본 선택지를 설정합니다.
  });

//Q2
export const selectedOptionState2 = atom({
    key: 'selectedOptionState2',
    default: null, // 기본값은 null로 설정하거나 기본 선택지를 설정합니다.
  });