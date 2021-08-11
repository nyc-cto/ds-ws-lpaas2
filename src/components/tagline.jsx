import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';

// update the content by editing the markdown files in src/markdown-pages

function Tagline({ tagline }) {
  return (
    <section className="usa-section">
      <GridContainer>
        <Grid row gap>
          {tagline.heading && (
            <Grid className="tagline__heading" tablet={{ col: 4 }}>
              <h2 className="font-heading-xl tagline__heading-text">
                {tagline.heading}
              </h2>
            </Grid>
          )}
          {tagline.text && (
            <Grid className="usa-prose" tablet={{ col: 8 }}>
              <p>{tagline.text}</p>
            </Grid>
          )}
        </Grid>
      </GridContainer>
    </section>
  );
}

export default Tagline;
