interface userType {
  uid: string;
  pw: string;
}

interface ProviderType {
  userInfo: userType;
  setUserInfo: ({ uid, pw }: { uid: string; pw: string }) => void;
}

export type { ProviderType, userType };
