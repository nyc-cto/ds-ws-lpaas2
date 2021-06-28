import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";

const Section = ({ sectionHeading, sectionText, callToActionButton }) => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <h2>{sectionHeading}</h2>
          <p>{sectionText}</p>
          <Button>{callToActionButton}</Button>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Section;
