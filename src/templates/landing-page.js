import React, { useEffect } from "react";
// import React, { Suspense } from "react";
// import { Redirect, Router } from "@reach/router";
import { Helmet } from "react-helmet";
import { graphql, navigate } from "gatsby";
import { I18nextProvider, useTranslation } from "react-i18next";
import { GridContainer } from "@trussworks/react-uswds";
import { Graphic, Hero, i18next, Layout, Section, Tagline } from "../components/";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import "@fontsource/libre-baskerville";
import "@fontsource/space-mono";

import "../styles/index.scss";

function Landing({ data, location }) {
  const { t, i18n } = useTranslation();

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
      // not currently being used
      // navigate(`/${i18n.language}/`);
    } else if (lang.length !== 0 && route.length === 0) {
      // only language given
      if (lang !== i18n.language) i18n.changeLanguage(lang);
    } else if (lang.length === 0 && route.length !== 0) {
      // only route given
      // not currently being used
      // navigate(`${i18n.language}/${route}`);
    } else {
      // both language and route given
      if (lang !== i18n.language) i18n.changeLanguage(lang);
    }
  }, [location.pathname]);

  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    // <Suspense fallback="loading">
    <React.Fragment>
      {/* <Router basepath={i18n.language}> */}
      {/* <Redirect from="/" to={`/${i18n.language}/home`} noThrow /> */}
      {/* <NotFound default /> */}
      {/* </Router> */}
      <I18nextProvider i18n={i18next}>
        <Helmet title={t("title")} htmlAttributes={{ lang: i18n.language }} />
        <Layout slug={frontmatter.slug}>
          <main>
            <GridContainer>
              {frontmatter.hero && (
                <Hero hero={frontmatter.hero} buttons={frontmatter.buttons} />
              )}
              {frontmatter.tagline && <Tagline tagline={frontmatter.tagline} />}
              {frontmatter.graphics && (
                <Graphic graphics={frontmatter.graphics} />
              )}
              {frontmatter.section && (
                <Section
                  section={frontmatter.section}
                  buttons={frontmatter.buttons}
                />
              )}
            </GridContainer>
          </main>
        </Layout>
      </I18nextProvider>
    </React.Fragment>
    // </Suspense>
  );
}

export const pageQuery = graphql`
  query Landing($lang: String!) {
    markdownRemark(
      frontmatter: { templateKey: { eq: "landing-page" }, lang: { eq: $lang } }
    ) {
      frontmatter {
        lang
        slug
        hero {
          image
          imageDescription
          heading
          text
        }
        buttons {
          callToAction
        }
        tagline {
          heading
          text
        }
        graphics {
          image
          imageDescription
          heading
          text
        }
        section {
          heading
          text
        }
      }
    }
  }
`;

export default Landing;
