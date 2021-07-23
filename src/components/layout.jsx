import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Footer from './footer';
import Header from './header';

function Layout({ children, slug }) {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState(t('title')); // initial title is header title

  return (
    <>
      <Header slug={slug} />
      <Helmet onChangeClientState={(newState) => setPageTitle(newState.title)} />
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
