import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { GridContainer } from '@trussworks/react-uswds';
import { i18next, Layout, Section } from '../components';

import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import '@fontsource/libre-baskerville';
import '@fontsource/space-mono';

import '../styles/index.scss';

function Documentation({ data, location }) {
  const { t, i18n } = useTranslation();

  // TODO: try to use LanguageDetector
  useEffect(() => {
    const path = location.pathname;
    const lang = path.split('/')[1];
    const route = path
      .split('/')
      .slice(2)
      .filter((v) => v !== '')
      .join('/');
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
    } else if (lang !== i18n.language) {
      // both language and route given
      i18n.changeLanguage(lang);
    }
  }, [location.pathname]);

  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <Helmet title={t('title')} htmlAttributes={{ lang: i18n.language }} />
        <Layout slug={frontmatter.slug}>
          <main>
            <GridContainer>
              {frontmatter.section && (
                <Section
                  page={frontmatter.page}
                  section={frontmatter.section}
                  subsection={frontmatter.subsection}
                  subSubsection={frontmatter.subSubsection}
                />
              )}
            </GridContainer>
          </main>
        </Layout>
      </I18nextProvider>
    </>
  );
}

Documentation.propTypes = {
  data: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
};

export const pageQuery = graphql`
  query Documentation($lang: String!) {
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "documentation-page" }
        lang: { eq: $lang }
      }
    ) {
      frontmatter {
        lang
        slug
        page {
          heading
          text
        }
        section {
          heading
          text
        }
        subsection {
          heading
          text
        }
        subSubsection {
          heading
          text
        }
      }
    }
  }
`;

export default Documentation;
