import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';
import PropTypes from 'prop-types';

function Tagline({ tagline }) {
  return (
    <GridContainer className="usa-section">
      <Grid row gap>
        {tagline.heading && (
          <Grid tablet={{ col: 4 }}>
            <h2 className="font-heading-xl">{tagline.heading}</h2>
          </Grid>
        )}
        {tagline.text && (
          <Grid className="usa-prose" tablet={{ col: 8 }}>
            <p>{tagline.text}</p>
          </Grid>
        )}
      </Grid>
    </GridContainer>
  );
}

Tagline.propTypes = {
  tagline: PropTypes.node.isRequired,
};

export default Tagline;
