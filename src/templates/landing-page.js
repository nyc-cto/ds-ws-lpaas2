import React, { useEffect } from "react";
// import React, { Suspense } from "react";
// import { Redirect, Router } from "@reach/router";
import { Helmet } from "react-helmet";
import { graphql, navigate } from "gatsby";
import { I18nextProvider, useTranslation } from "react-i18next";
import { GridContainer } from "@trussworks/react-uswds";
// import { Graphic, Hero, i18n, Layout, Section, Tagline } from "../components/index";

import Graphic from "../components/graphic";
import Hero from "../components/hero";
import i18next from "../components/i18n";
import Layout from "../components/layout";
import Section from "../components/section";
import Tagline from "../components/tagline";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

function Landing(props) {
  // TODO: see if { location } prop can be used

  const { t, i18n } = useTranslation();
  useEffect(() => {
    console.log(location);
    const path = location.pathname;
    const lang = path.split("/")[1];
    const route = path.split("/").slice(2);
    console.log("____LANG___", lang, typeof lang); // debugging for why /es/home/ --> /en/home/ automatically
    console.log("____i18n___", i18n.language, typeof i18n.language); // debugging for why /es/home/ --> /en/home/ automatically
    if (lang !== i18n.language) i18n.changeLanguage(lang);
    navigate(`/${lang}/${route}`);
  }, [location.pathname]);

  const { markdownRemark } = props.data;
  const { frontmatter } = markdownRemark;

  return (
    // <Suspense fallback="loading">
    <React.Fragment>
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
