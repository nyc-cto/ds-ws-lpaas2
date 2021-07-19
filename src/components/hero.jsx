import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridContainer, Button } from '@trussworks/react-uswds';

function Hero({ hero, buttons }) {
  return (
    <GridContainer className="usa-hero">
      <Grid row>
        <Grid className="usa-hero__callout">
          {hero.heading && (
            <h1 className="usa-hero__heading">{hero.heading}</h1>
          )}
          {hero.text && <p className="usa-prose">{hero.text}</p>}
          {buttons.callToAction && (
            <Button className="usa-button--inverse">
              {buttons.callToAction}
            </Button>
          )}
        </Grid>
      </Grid>
    </GridContainer>
  );
}

Hero.propTypes = {
  hero: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired,
};

export default Hero;
