import React from 'react';

import { GridContainer } from '@trussworks/react-uswds';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import React, { Suspense } from "react";
// import { Redirect, Router } from "@reach/router";
import { Helmet } from 'react-helmet';
import { I18nextProvider, useTranslation } from 'react-i18next';

import {
  Graphic,
  Hero,
  i18next,
  Layout,
  Section,
  Tagline,
} from '../components';

import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import '@fontsource/libre-baskerville';
import '@fontsource/space-mono';

import '../styles/index.scss';

function Landing({ data }) {
  const { i18n } = useTranslation();

  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    // <Suspense fallback="loading">
    <>
      {/* <Router basepath={i18n.language}> */}
      {/* <Redirect from="/" to={`/${i18n.language}/home`} noThrow /> */}
      {/* <NotFound default /> */}
      {/* </Router> */}
      <I18nextProvider i18n={i18next}>
        <Helmet
          title={frontmatter.pageTitle}
          htmlAttributes={{ lang: i18n.language }}
        />
        <Layout slug={frontmatter.slug}>
          <main>
            <GridContainer>
              {frontmatter.hero && (<Hero hero={frontmatter.hero} />)}
              {frontmatter.tagline && <Tagline tagline={frontmatter.tagline} />}
              {frontmatter.graphics && (<Graphic graphics={frontmatter.graphics} />)}
              {frontmatter.section && (<Section section={frontmatter.section} />)}
            </GridContainer>
          </main>
        </Layout>
      </I18nextProvider>
    </>
    // </Suspense>
  );
}

Landing.propTypes = {
  data: PropTypes.node.isRequired,
};

export const pageQuery = graphql`
  query Landing($lang: String!) {
    markdownRemark(
      frontmatter: { templateKey: { eq: "landing-page" }, lang: { eq: $lang } }
    ) {
      frontmatter {
        lang
        slug
        pageTitle
        hero {
          heading
          text
          buttonLink
          buttonText
        }
        tagline {
          heading
          text
        }
        graphics {
          imageDescription
          heading
          text
        }
        section {
          heading
          text
          buttonLink
          buttonText
        }
      }
    }
  }
`;

export default Landing;
