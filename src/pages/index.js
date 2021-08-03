import React, { useEffect } from 'react';

<<<<<<< HEAD
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    navigate(`/${i18n.language}/`);
  }, []);
  return <></>;
=======
// import React, { Suspense } from "react";
// import { Redirect, Router } from "@reach/router";

import Layout from '../components/layout';

function Home() {
  // TODO: which method is preferred?

  // method one
  // eslint-disable-next-line react/jsx-filename-extension
  return <Layout />;

  // method two throws an error (there's not a page or function yet at /en) – takes time to load
  // return (
  // <Router>
  {
    /* <Redirect from="/" to={`/${i18n.language}/`} noThrow/> */
  }
  // </Router>
  // );
>>>>>>> dev
}

export default Home;
