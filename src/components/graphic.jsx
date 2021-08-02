import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';
import PropTypes from 'prop-types';

function Graphic({ graphics }) {
  return (
    <GridContainer className="usa-graphic-list usa-section usa-section--dark">
      <Grid>
        <Grid row gap className="usa-graphic-list__row">
          {graphics
            && graphics.map((graphic) => (
              <Grid
                className="usa-media-block"
                tablet={{ col: 6 }} // TODO: maybe adjust for different number of graphics?
                key={graphic.heading}
              >
                {graphic.image && (
                  <img
                    className="graphic_image--circle usa-media-block__img"
                    src={graphic.image}
                    alt={graphic.imageDescription}
                  />
                )}
                <Grid className="usa-media-block__body">
                  {graphic.heading && (
                    <h2 className="usa-graphic-list__heading">
                      {graphic.heading}
                    </h2>
                  )}
                  {graphic.text && <p className="usa-prose">{graphic.text}</p>}
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </GridContainer>
  );
}

Graphic.propTypes = {
  graphics: PropTypes.node.isRequired,
};

export default Graphic;
