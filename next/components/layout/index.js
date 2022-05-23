import Header from 'components/mainComponents/Header';
import Footer from 'components/mainComponents/Footer';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
