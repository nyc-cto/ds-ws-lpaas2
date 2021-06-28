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
      <Graphic />
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
        circleImage1
        circleImage2
        circleImage3
        circleImage4
        graphicHeading1
        graphicHeading2
        graphicHeading3
        graphicHeading4
        graphicText1
        graphicText2
        graphicText3
        graphicText4
        sectionHeading
        sectionText
      }
    }
  }
`;

export default Template;
