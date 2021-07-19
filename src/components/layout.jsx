import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

function Layout({ children, slug }) {
  return (
    <>
      <Header slug={slug} />
      <div className="#top" />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Layout;
