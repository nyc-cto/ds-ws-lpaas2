import React from "react";
import { graphql } from "gatsby";
import { Graphic, Hero, Section, Tagline } from "../components/";

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <main>
      <Hero
        heroCalloutHeading={frontmatter.heroCalloutHeading}
        heroCalloutText={frontmatter.heroCalloutText}
        callToActionButton={frontmatter.callToActionButton}
      />
      <Tagline
        taglineHeading={frontmatter.taglineHeading}
        taglineText={frontmatter.taglineText}
      />
      <Graphic graphicsSection={frontmatter.graphicsSection} />
      <Section
        sectionHeading={frontmatter.sectionHeading}
        sectionText={frontmatter.sectionText}
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
        heroImage
        heroCalloutHeading
        heroCalloutText
        callToActionButton
        taglineHeading
        taglineText
        graphicsSection 
        sectionHeading
        sectionText
      }
    }
  }
`;

export default Template;
