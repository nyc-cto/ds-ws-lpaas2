import React, { Suspense } from "react";
import { graphql } from "gatsby";
import { I18nextProvider, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { GridContainer } from "@trussworks/react-uswds";
import { Graphic, Hero, i18n, Layout, Section, Tagline } from "../components";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

const Landing = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const { t } = useTranslation();
  
  return (
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <Helmet
          title={t("title")}
          htmlAttributes={{ lang: i18n.language }}
          defer={false}
        />
        <Layout>
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
    </Suspense>
  );
};

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
