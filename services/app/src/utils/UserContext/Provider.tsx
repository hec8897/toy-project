import React, { ReactNode } from 'react';
import { UserContext } from 'utils';
import { ProviderType, userType } from './type';

function UserContectProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = React.useState<userType>({
    uid: '',
    pw: '',
  });

  return (
    <UserContext.Provider
      value={
        {
          userInfo,
          setUserInfo,
        } as ProviderType
      }
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContectProvider;
