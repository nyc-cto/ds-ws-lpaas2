/* eslint-disable react/no-danger */
import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { I18nextProvider, useTranslation } from 'react-i18next';

import { i18next, Layout } from '../components';

import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import '@fontsource/libre-baskerville';
import '@fontsource/space-mono';

import '../styles/index.scss';

function Documentation({ data }) {
  const { i18n } = useTranslation();

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <I18nextProvider i18n={i18next}>
        <Helmet
          title={frontmatter.pageTitle}
          htmlAttributes={{ lang: i18n.language }}
        />
        <Layout slug={frontmatter.slug}>
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

Documentation.propTypes = {
  data: PropTypes.node.isRequired,
};

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
