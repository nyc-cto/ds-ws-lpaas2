import React, { useEffect } from 'react';

import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Footer from './footer';
import Header from './header';

function Layout({ children, slug }) {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    const lang = path.split('/')[1];
    const route = path
      .split('/')
      .slice(2)
      .filter((v) => v !== '')
      .join('/');
    if (path === '/') navigate(`/${i18n.language}/`);
    // empty path
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
