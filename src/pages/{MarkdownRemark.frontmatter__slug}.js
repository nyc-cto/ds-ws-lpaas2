import React from "react";
import { graphql } from "gatsby";
import { Graphic, Hero, Section, Tagline } from "../components/";

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <main>
      <Hero
        hero={frontmatter.hero}
        callToActionButton={frontmatter.callToActionButton}
      />
      <Tagline tagline={frontmatter.tagline} />
      <Graphic graphics={frontmatter.graphics} />
      <Section
        section={frontmatter.section}
        callToActionButton={frontmatter.callToActionButton}
      />
    </main>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        lang
        slug
        hero {
          heroImage
          heroCalloutHeading
          heroCalloutText
        }
        callToActionButton
        tagline {
          taglineHeading
          taglineText
        }
        graphics {
          graphicImage
          graphicHeading
          graphicText
        }
        section {
          sectionHeading
          sectionText
        }
      }
    }
  }
`;

export default Template;
