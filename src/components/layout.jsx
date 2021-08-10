import React, { useEffect } from 'react';

import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Footer from './footer';
import Header from './header';

function Layout({ children, languageList, slug }) {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    const lang = path.split('/')[1]; // language
    const route = path
      .split('/')
      .slice(2)
      .filter((v) => v !== '')
      .join('/'); // rest of the path excluding the language
    if (path === '/') navigate(`/${i18n.language}/`); // '/' redirect
    else if (lang === '404') navigate(`/${i18n.language}/404`); // '/404' redirect
    else if (lang !== i18n.language) i18n.changeLanguage(lang); // change current language if there's a different language entered in path
  }, [location.pathname]);

  return (
    <>
      <Header languageList={languageList} slug={slug} />
      <div id="top" />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
