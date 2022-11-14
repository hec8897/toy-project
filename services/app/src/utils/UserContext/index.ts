import { createContext } from 'react';
import { ProviderType } from './type';

const UserContext = createContext<ProviderType>({
  userInfo: {
    uid: '',
    pw: '',
  },
  setUserInfo: ({ uid, pw }: { uid: string; pw: string }) => {}, // eslint-disable-line
});

export default UserContext;
