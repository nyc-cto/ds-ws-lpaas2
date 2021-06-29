import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";

const Section = ({ section, callToActionButton }) => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <h2>{section.sectionHeading}</h2>
          <p>{section.sectionText}</p>
          <Button>{callToActionButton}</Button>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Section;
