import React, { useEffect } from 'react';

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
}

export default Home;
