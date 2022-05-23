import { ModalProvider } from 'hooks/useModal';
import React from 'react';
import 'styles/root/main.scss';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return <ModalProvider>{getLayout(<Component {...pageProps} />)}</ModalProvider>;
};

export default MyApp;
