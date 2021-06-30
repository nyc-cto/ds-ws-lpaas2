import React from "react";
import { Grid } from "@trussworks/react-uswds";

const Tagline = ({ tagline }) => {
  return (
    <Grid row>
      {tagline?.heading && (
        <Grid>
          <h2>{tagline.heading}</h2>
        </Grid>
      )}
      {tagline?.text && (
        <Grid>
          <p>{tagline.text}</p>
        </Grid>
      )}
    </Grid>
  );
};

export default Tagline;
