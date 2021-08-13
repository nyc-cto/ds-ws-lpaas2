/* eslint-disable react/no-danger */
import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { I18nextProvider, useTranslation } from 'react-i18next';

import { Layout } from '../components';
import i18next from '../i18n-config';

import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import '@fontsource/libre-baskerville';
import '@fontsource/space-mono';

import '../styles/index.scss';

function Documentation({ data, pageContext }) {
  const { i18n } = useTranslation();

  // data from the front matter and html from the body of the markdown files
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  // list of languages used in the locales folder, passed by page context in gatsby-node.js
  const { languageList } = pageContext;

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <Helmet
          title={frontmatter.pageTitle}
          htmlAttributes={{ lang: i18n.language }}
        />
        <Layout languageList={languageList} slug={frontmatter.slug}>
          <main>
            <GridContainer>
              <Grid className="documentation__container">
                <div
                  className="documentation usa-layout-docs usa-layout-docs__main usa-prose"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </Grid>
            </GridContainer>
          </main>
        </Layout>
      </I18nextProvider>
    </>
  );
}

export const pageQuery = graphql`
  query Documentation($lang: String!) {
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "documentation-page" }
        lang: { eq: $lang }
      }
    ) {
      html
      frontmatter {
        lang
        slug
        pageTitle
      }
    }
  }
`;

export default Documentation;
