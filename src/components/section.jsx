import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import { navigate } from 'gatsby';

function Section({ section }) {
  return (
    <section className="usa-section">
      <GridContainer>
        <Grid row>
          <Grid>
            {section.heading && (
              <h2 className="font-heading-xl">{section.heading}</h2>
            )}
            {section.text && <p className="usa-intro">{section.text}</p>}
            {section.buttonLink && section.buttonText && (
              <Button
                onClick={() => {
                  navigate(section.buttonLink);
                }}
                className="usa-button--big"
              >
                {section.buttonText}
              </Button>
            )}
          </Grid>
        </Grid>
      </GridContainer>
    </section>
  );
}

export default Section;
