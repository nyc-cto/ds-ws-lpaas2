import React from 'react';
import PropTypes from 'prop-types';
import ScriptTag from 'react-script-tag';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';

function Layout({ children, slug }) {
  const { i18n } = useTranslation();
  return (
    <>
      <Header slug={slug} />
      <div className="#top" />
      {children}
      <div id="feedback-widget" lang={i18n.language} pageTitle="Project Title" endpoint="1" />
      {/* TODO: need to update pageTitle to not be hard-coded */}
      {/* TODO: need to update endpoint to not be hard-coded */}
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
