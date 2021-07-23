import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScriptTag from 'react-script-tag';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';

function Layout({ children, slug }) {
  const { t, i18n } = useTranslation();
  const [pageTitle, setPageTitle] = useState(t('title')); // initial title is header title

  return (
    <>
      <Header slug={slug} />
      <Helmet onChangeClientState={(newState) => setPageTitle(newState.title)} />
      <div id="top" />
      {children}
      <div id="feedback-widget" lang={i18n.language} pageTitle={pageTitle} endpoint={process.env.GATSBY_ENDPOINT} />
      <ScriptTag src="https://d2ttz3as5y3dj0.cloudfront.net/feedback-module.min.js" type="text/javascript" />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Layout;
