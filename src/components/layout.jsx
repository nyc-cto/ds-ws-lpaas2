import React, { useEffect, useState } from 'react';

import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ScriptTag from 'react-script-tag';

import Footer from './footer';
import Header from './header';

function Layout({ children, slug }) {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [pageTitle, setPageTitle] = useState(t('title')); // initial title is header title

  useEffect(() => {
    const path = location.pathname;
    const lang = path.split('/')[1];
    const route = path
      .split('/')
      .slice(2)
      .filter((v) => v !== '')
      .join('/');
    if (path === '/') navigate(`/${i18n.language}/`); // empty path
    else if (lang === '404') navigate(`/${i18n.language}/404`);
    else if (lang.length !== 0 && route.length === 0) {
      // only language given
      if (lang !== i18n.language) i18n.changeLanguage(lang);
    } else if (lang.length === 0 && route.length !== 0) {
      // only route given
      // not currently being used
      // navigate(`${i18n.language}/${route}`);
    } else if (lang !== i18n.language) {
      // both language and route given
      i18n.changeLanguage(lang);
    }
  }, [location.pathname]);

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
