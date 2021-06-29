import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";

const Section = ({ section, callToActionButton }) => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
          <Button>{callToActionButton}</Button>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Section;
