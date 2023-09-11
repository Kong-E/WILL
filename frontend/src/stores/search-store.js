import { atom, selector } from 'recoil';

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const codeState = atom({
  key: 'codeState',
  default: '',
});

