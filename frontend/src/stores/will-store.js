import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const WillState = atom({
  key: 'WillState',
  default: {
    funeral: {
      selected: '',
      note: '',
    },
    grave: {
      selected: '',
      note: '',
    },
    lifeSupport: {
      selected: '',
    },
    organDonation: {
      selected: '',
    },
    inheritance: {
      selected: '',
      note: '',
    },
    plus: {
      note: '',
    },
    will: {
      note: '',
    },
    audio: '',
    beneficiaries: [{ name: '', email: '', relation: '' }],
    openDate: new Date(),
  },
  effects_UNSTABLE: [persistAtom],
});
