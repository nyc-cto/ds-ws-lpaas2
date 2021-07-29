import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import PropTypes from 'prop-types';

function Hero({ buttons, hero }) {
  return (
    <section className="usa-hero">
      <GridContainer>
        <Grid row>
          <Grid className="usa-hero__callout">
            {hero.heading && (
              <h1 className="usa-hero__heading">{hero.heading}</h1>
            )}
            {hero.text && <p className="usa-prose">{hero.text}</p>}
            {buttons.callToAction && (
              <Button className="usa-button">{buttons.callToAction}</Button>
            )}
          </Grid>
        </Grid>
      </GridContainer>
    </section>
  );
}

Hero.propTypes = {
  hero: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired,
};

export default Hero;
