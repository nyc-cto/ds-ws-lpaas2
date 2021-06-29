import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Tagline = ({tagline}) => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <h2>{tagline.taglineHeading}</h2>
          <p>{tagline.taglineText}</p>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Tagline;
