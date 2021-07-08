import React, { useEffect } from "react";
// import React, { Suspense } from "react";
import { Redirect, Router } from "@reach/router";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";
import i18next from "../components/i18n";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

function Home() {
  // TODO: see if { location } prop can be used

  const { i18n } = useTranslation();
  useEffect(() => {
    const path = location.pathname;
    const lang = path.split("/")[1];
    const route = path.split("/").slice(2);
    console.log("____LANG___", lang, typeof lang); // debugging for why /es/home/ --> /en/home/ automatically
    console.log("____i18n___", i18n.language, typeof i18n.language); // debugging for why /es/home/ --> /en/home/ automatically
    if (lang !== i18n.language) i18n.changeLanguage(lang);
    navigate(`/${lang}/${route}`);
  }, [location.pathname]);

  return (
    // <Suspense fallback="loading">
    <React.Fragment>
      <Router>
        <Redirect from="/" to={`/${i18n.language}/home`} noThrow />
      </Router>
    </React.Fragment>
    // </Suspense>
  );
}

export default Home;
