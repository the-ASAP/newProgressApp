import Footer from 'components/mainComponents/Footer';
import Header from 'components/mainComponents/Header';
import { ModalProvider } from 'hooks/useModal';
import React from 'react';
import 'styles/root/main.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ModalProvider>
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ModalProvider>
    </>
  );
};

export default MyApp;
