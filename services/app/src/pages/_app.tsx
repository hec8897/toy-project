import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextProvider } from 'utils';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
