import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Tagline = ({ tagline }) => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <Grid>
            <h2>{tagline.heading}</h2>
          </Grid>
          <Grid>
            <p>{tagline.text}</p>
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Tagline;
