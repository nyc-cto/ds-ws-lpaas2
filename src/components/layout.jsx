import React from 'react';

import PropTypes from 'prop-types';

import Footer from './footer';
import Header from './header';

function Layout({ children, slug }) {
  return (
    <>
      <Header slug={slug} />
      <div id="top" />
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
