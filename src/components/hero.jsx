import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import { navigate } from 'gatsby';

import { landing as links } from '../constants/links';

// update the content by editing the markdown files in src/markdown-pages
// update the button link in src/constants/links.js
// the background image for the hero is set in src/styles/_custom-theme.scss

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
            {links.HERO_BUTTON_LINK && hero.buttonText && (
              <Button
                onClick={() => {
                  navigate(links.HERO_BUTTON_LINK);
                }}
                className="usa-button--inverse"
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
