import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

function Hero({ hero }) {
  return (
    <GridContainer className="usa-hero">
      <Grid row>
        <Grid className="usa-hero__callout">
          {hero.heading && (
            <h1 className="usa-hero__heading">{hero.heading}</h1>
          )}
          {hero.text && <p className="usa-prose">{hero.text}</p>}
          {hero.buttonLink && hero.buttonText && (
            <Button
              onClick={() => {
                navigate(hero.buttonLink);
              }}
              className="usa-button--inverse"
            >
              {hero.buttonText}
            </Button>
          )}
        </Grid>
      </Grid>
    </GridContainer>
  );
}

Hero.propTypes = {
  hero: PropTypes.node.isRequired,
};

export default Hero;
