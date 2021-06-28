import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Tagline = ({taglineHeading, taglineText}) => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <h2>{taglineHeading}</h2>
          <p>{taglineText}</p>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Tagline;
