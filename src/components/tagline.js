import React from "react";
import { Grid } from "@trussworks/react-uswds";

const Tagline = ({ tagline }) => {
  return (
    <Grid row>
      <Grid>
        <h2>{tagline.heading}</h2>
      </Grid>
      <Grid>
        <p>{tagline.text}</p>
      </Grid>
    </Grid>
  );
};

export default Tagline;
