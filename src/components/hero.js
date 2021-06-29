import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";

const Hero = ({ hero, callToActionButton }) => {
  return (
      <GridContainer>
        <Grid row>
          <Grid className="usa-hero__callout">
            <h1 className="usa-hero__heading">{hero.heroCalloutHeading}</h1>
            <p>{hero.heroCalloutText}</p>
            <Button>{callToActionButton}</Button>
          </Grid>
        </Grid>
      </GridContainer>
  );
};

export default Hero;
