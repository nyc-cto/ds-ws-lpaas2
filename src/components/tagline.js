import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Tagline = ({tagline}) => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <h2>{tagline.heading}</h2>
          <p>{tagline.text}</p>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Tagline;
