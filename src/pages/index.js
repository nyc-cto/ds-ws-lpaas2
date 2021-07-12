import React, { useEffect } from "react";
// import React, { Suspense } from "react";
// import { Redirect, Router } from "@reach/router";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";
// import { i18next } from "../components";
import i18next from "../components/i18n";
// import NotFound from "../components/404";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

function Home({ location }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    const lang = path.split("/")[1];
    const route = path
    .split("/")
    .slice(2)
    .filter((v) => v != "")
    .join("/");
    if (lang.length === 0 && route.length === 0) {
      // empty path
      navigate(`/${i18n.language}/home`);
    } else if (lang.length !== 0 && route.length === 0) {
      // only language given
      // not currently being used
      // gatsby-node.js handles redirect (i.e. /en/ -> /en/home)
    } else if (lang.length === 0 && route.length !== 0) {
      // only route given 
      // not currently being used
      // navigate(`${i18n.language}/${route}`);
    } else {
      // both language and route given 
      // not currently being used
      // if (lang !== i18n.language) i18n.changeLanguage(lang);
    }
  }, [location.pathname]);

  return (
    // <Suspense fallback="loading">
    <React.Fragment>
      {/* <Router basepath={i18n.language}> */}
      {/* <Redirect from="/" to={`/${i18n.language}/home`} noThrow /> */}
      {/* <NotFound default /> */}
      {/* {console.log('___i18n___', i18n.language)} */}
      {/* <Redirect from="/:lang" to={`/:lang/home`} /> */}
      {/* <Redirect from="/" to={`/es/home`} noThrow />  */}
      {/* </Router> */}
    </React.Fragment>
    // </Suspense>
  );
}

export default Home;
