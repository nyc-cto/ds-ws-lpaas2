import React from "react";
import { graphql } from "gatsby";
import { Graphic, Hero, Section, Tagline } from "../components/";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

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
          image
          imageDescription
          heading
          text
        }
        callToActionButton
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

export default Template;
