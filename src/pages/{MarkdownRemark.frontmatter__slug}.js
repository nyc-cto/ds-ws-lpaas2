import React from "react";
import { graphql } from "gatsby";

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <div>
      <div>
        <h1>{frontmatter.heroCalloutHeading}</h1>
        <p>{frontmatter.heroCalloutText}</p>
        <button>{frontmatter.callToActionButton}</button>
      </div>
    </div>
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
