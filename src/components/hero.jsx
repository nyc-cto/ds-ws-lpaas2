import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import { navigate } from 'gatsby';

import { landing as links } from '../constants/links';

function Hero({ hero }) {
  return (
    <section className="usa-hero">
      <GridContainer>
        <Grid row>
          <Grid className="usa-hero__callout">
            {hero.heading && (
              <h1 className="usa-hero__heading">{hero.heading}</h1>
            )}
            {hero.text && <p className="usa-prose">{hero.text}</p>}
            {links.heroButtonLink && hero.buttonText && (
              <Button
                onClick={() => {
                  navigate(links.heroButtonLink);
                }}
                className="usa-button"
              >
                {hero.buttonText}
              </Button>
            )}
          </Grid>
        </Grid>
      </GridContainer>
    </section>
  );
}

export default Hero;
