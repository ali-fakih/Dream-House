import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const shouldHideHeaderAndFooter = ['/signin', '/AdminDash'].includes(location.pathname);

  return (
    <div>
      {!shouldHideHeaderAndFooter && <Header />}
      <main>{children}</main>
      {!shouldHideHeaderAndFooter && <Footer />}
    </div>
  );
};

export default Layout;
