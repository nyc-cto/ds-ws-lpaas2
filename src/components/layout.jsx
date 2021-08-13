import React, { useEffect } from 'react';

import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { languages } from '../constants/languages';
import Footer from './footer';
import Header from './header';

function Layout({ children, languageList, slug }) {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    const lang = path.split('/')[1]; // language
    if (path === '/') navigate(`/${i18n.language}/`);
    // '/' redirect
    else if (path === '/404/') navigate(`/${i18n.language}/404`);
    // '/404' redirect
    else if (
      lang !== i18n.language // if there's a different language entered in path
      && languages.map((language) => language.langKey).includes(lang) // and the language exists in this app
    ) i18n.changeLanguage(lang); // then change the current language to that language
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
