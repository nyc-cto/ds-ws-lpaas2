import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridContainer } from '@trussworks/react-uswds';

function Graphic({ graphics }) {
  return (
    <GridContainer className="usa-graphic-list usa-section usa-section--dark">
      <Grid>
        <Grid row gap className="usa-graphic-list__row">
          {graphics
            && graphics.map((graphic) => (
              <Grid
                className="usa-media-block"
                tablet={{ col: 6 }}
                key={graphic.heading}
              >
                {graphic.image && (
                  <img
                    className="usa-media-block__img graphic_image--circle"
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
