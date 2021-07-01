// import React from "react";
// import { graphql } from "gatsby";
// import { GridContainer } from "@trussworks/react-uswds";
// import { Graphic, Hero, Section, Tagline } from "../components/";
// import "@trussworks/react-uswds/lib/uswds.css";
// import "@trussworks/react-uswds/lib/index.css";

// const Template = ({ data }) => {
//   const { markdownRemark } = data;
//   const { frontmatter } = markdownRemark;
//   return (
//     <main>
//       <GridContainer>
//         <Hero
//           hero={frontmatter.hero}
//           buttons={frontmatter.buttons}
//         />
//         <Tagline tagline={frontmatter.tagline} />
//         <Graphic graphics={frontmatter.graphics} />
//         <Section section={frontmatter.section} buttons={frontmatter.buttons} />
//       </GridContainer>
//     </main>
//   );
// };

// export const pageQuery = graphql`
//   query ($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         lang
//         slug
//         hero {
//           image
//           imageDescription
//           heading
//           text
//         }
//         buttons {
//           callToAction
//         }
//         tagline {
//           heading
//           text
//         }
//         graphics {
//           image
//           imageDescription
//           heading
//           text
//         }
//         section {
//           heading
//           text
//         }
//       }
//     }
//   }
// `;

// export default Template;
