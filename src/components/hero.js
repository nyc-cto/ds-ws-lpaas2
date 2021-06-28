import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";

const Hero = ({ heroCalloutHeading, heroCalloutText, callToActionButton }) => {
  return (
      <GridContainer>
        <Grid col>
          <Grid className="usa-hero__callout">
            <h1 className="usa-hero__heading">{heroCalloutHeading}</h1>
            <p>{heroCalloutText}</p>
            <Button>{callToActionButton}</Button>
          </Grid>
        </Grid>
      </GridContainer>
  );
};

export default Hero;
