import Header from 'components/mainComponents/Header';
import React from 'react';
import "styles/root/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;
