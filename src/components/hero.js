import React from "react";
import { Grid, Button } from "@trussworks/react-uswds";

function Hero({ hero, buttons }) {
  return (
    <Grid row className="usa-hero">
      <Grid className="usa-hero__callout">
        {hero?.heading && <h1 className="usa-hero__heading">{hero.heading}</h1>}
        {hero?.text && <p>{hero.text}</p>}
        {buttons?.callToAction && <Button className="usa-button bg-secondary">{buttons.callToAction}</Button>}
      </Grid>
    </Grid>
  );
}

export default Hero;
