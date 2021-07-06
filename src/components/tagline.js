import React from "react";
import { Grid } from "@trussworks/react-uswds";

function Tagline({ tagline }) {
  return (
    <Grid row gap className="usa-section">
      {tagline?.heading && (
        <Grid tablet={{ col: 4 }}>
          <h2 className="font-heading-xl">{tagline.heading}</h2>
        </Grid>
      )}
      {tagline?.text && (
        <Grid tablet={{ col: 8 }} className="usa-prose">
          <p>{tagline.text}</p>
        </Grid>
      )}
    </Grid>
  );
}

export default Tagline;
