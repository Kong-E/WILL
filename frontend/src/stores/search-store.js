import { atom, selector } from 'recoil';

export const TxHashState = atom({
  key: 'txHashState',
  default: '',
});

export const ParamsState = atom({
  key: 'paramsState',
  default: {},
});
