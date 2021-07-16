import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header } from '.';

function Layout({ children, slug }) {
  return (
    <>
      <Header slug={slug} />
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
