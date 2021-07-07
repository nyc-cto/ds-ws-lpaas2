import React from "react";
import { Grid, GridContainer } from "@trussworks/react-uswds";

function Tagline({ tagline }) {
  return (
    <GridContainer className="usa-section">
      <Grid row gap>
        {tagline?.heading && (
          <Grid tablet={{ col: 4 }}>
            <h2 className="font-heading-xl text-primary">{tagline.heading}</h2>
          </Grid>
        )}
        {tagline?.text && (
          <Grid tablet={{ col: 8 }} className="usa-prose">
            <p>{tagline.text}</p>
          </Grid>
        )}
      </Grid>
    </GridContainer>
  );
}

export default Tagline;
