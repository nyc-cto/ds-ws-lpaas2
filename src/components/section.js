import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Section = ({ sectionHeading, sectionText }) => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <h2>{sectionHeading}</h2>
          <p>{sectionText}</p>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Section;
