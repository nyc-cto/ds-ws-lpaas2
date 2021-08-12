import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import { graphql, navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Layout } from '../components';
import { page404 as links } from '../constants/links';

function Page404({ data }) {
  const { i18n } = useTranslation();

  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <>
      <Helmet title={frontmatter.pageTitle} htmlAttributes={{ lang: i18n.language }} />
      <Layout slug={frontmatter.slug}>
        <main>
          <section className="usa-section">
            <GridContainer>
              <Grid row gap>
                <div className="usa-prose">
                  {frontmatter.error && <h1>{frontmatter.error}</h1>}
                  {frontmatter.causeOfError && (
                  <p className="usa-intro">
                    {frontmatter.causeOfError}
                  </p>
                  )}
                  {frontmatter.waysToFixError && (
                  <p>{frontmatter.waysToFixError}</p>
                  )}
                  {frontmatter.actions.text && <p>{frontmatter.actions.text}</p>}
                  {links.HOME && frontmatter.actions.homeButtonText && (
                    <Button
                      onClick={() => {
                        navigate(links.HOME);
                      }}
                    >
                      {frontmatter.actions.homeButtonText}
                    </Button>
                  )}
                  {links.CONTACT && frontmatter.actions.contactButtonText && (
                    <Button
                      onClick={() => {
                        navigate(links.CONTACT);
                      }}
                    >
                      {frontmatter.actions.contactButtonText}
                    </Button>
                  )}
                  {frontmatter.errorCodeMessage.text && frontmatter.errorCodeMessage.code && (
                  <p className="text-base">
                    <strong>{frontmatter.errorCodeMessage.text}</strong>
                    {`: ${frontmatter.errorCodeMessage.code}`}
                  </p>
                  )}
                </div>
              </Grid>
            </GridContainer>
          </section>
        </main>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query page404($lang: String!) {
    markdownRemark(
      frontmatter: { templateKey: { eq: "404-page" }, lang: { eq: $lang } }
    ) {
      frontmatter {
        lang
        slug
        pageTitle
        error
        causeOfError
        waysToFixError
        actions {
          text
          homeButtonText
          contactButtonText
        }
        errorCodeMessage {
          text
          code
        }
      }
    }
  }
`;

export default Page404;
