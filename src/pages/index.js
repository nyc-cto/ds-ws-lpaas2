import React, { useEffect } from 'react';

// import React, { Suspense } from "react";
// import { Redirect, Router } from "@reach/router";
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { i18next } from '../components';

function Home({ location }) {
  const { i18n } = useTranslation();

  // TODO: which method is preferred?

  // method one
  useEffect(() => {
    navigate(`/${i18n.language}/`);
  }, []);
  return <></>;

  // method two throws an error (there's not a page or function yet at /en) – takes time to load
  // return (
  // <Router>
  {
    /* <Redirect from="/" to={`/${i18n.language}/`} noThrow/> */
  }
  // </Router>
  // );
}

export default Home;
