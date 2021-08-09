import React from 'react';

import { graphql } from 'gatsby';
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
    <>
      <I18nextProvider i18n={i18next}>
        <Helmet
          title={frontmatter.pageTitle}
          htmlAttributes={{ lang: i18n.language }}
        />
        <Layout slug={frontmatter.slug}>
          <main>
            {frontmatter.hero && (<Hero hero={frontmatter.hero} />)}
            {frontmatter.tagline && <Tagline tagline={frontmatter.tagline} />}
            {frontmatter.graphics && (<Graphic graphics={frontmatter.graphics} />)}
            {frontmatter.section && (<Section section={frontmatter.section} />)}
          </main>
        </Layout>
      </I18nextProvider>
    </>
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
        pageTitle
        hero {
          heading
          text
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
          buttonText
        }
      }
    }
  }
`;

export default Landing;
