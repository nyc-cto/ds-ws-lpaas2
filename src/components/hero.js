import React from "react";
import { Grid, Button } from "@trussworks/react-uswds";

const Hero = ({ hero, buttons }) => {
  return (
      <Grid row>
        <Grid className="usa-hero__callout">
          <h1 className="usa-hero__heading">{hero.heading}</h1>
          <p>{hero.text}</p>
          <Button>{buttons.callToAction}</Button>
        </Grid>
      </Grid>
  );
};

export default Hero;
