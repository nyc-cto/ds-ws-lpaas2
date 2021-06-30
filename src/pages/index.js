import React from "react";
import { graphql } from "gatsby";
import { GridContainer } from "@trussworks/react-uswds";
import { Graphic, Header, Hero, Section, Tagline } from "../components/";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

const Home = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <div>
      <Header />
      <main>
        <GridContainer>
          <Hero hero={frontmatter.hero} buttons={frontmatter.buttons} />
          <Tagline tagline={frontmatter.tagline} />
          <Graphic graphics={frontmatter.graphics} />
          <Section
            section={frontmatter.section}
            buttons={frontmatter.buttons}
          />
        </GridContainer>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query Home($lang: String!) {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" }, lang: { eq: $lang }  }) {
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

export default Home;
