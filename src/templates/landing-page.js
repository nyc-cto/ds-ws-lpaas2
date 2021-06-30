import React from "react";
import { graphql } from "gatsby";
import { GridContainer } from "@trussworks/react-uswds";
import { Graphic, Header, Hero, Section, Tagline } from "../components";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

const Landing = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <div>
      <Header />
      <main>
        <GridContainer>
          {frontmatter.hero && (
            <Hero hero={frontmatter.hero} buttons={frontmatter.buttons} />
          )}
          {frontmatter.tagline && <Tagline tagline={frontmatter.tagline} />}
          {frontmatter.graphics && <Graphic graphics={frontmatter.graphics} />}
          {frontmatter.section && (
            <Section
              section={frontmatter.section}
              buttons={frontmatter.buttons}
            />
          )}
        </GridContainer>
      </main>
    </div>
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
