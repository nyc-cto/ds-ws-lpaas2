import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { graphicImages } from '../images';

function Graphic({ graphics }) {
  const { i18n } = useTranslation();
  return (
    <GridContainer className="usa-graphic-list usa-section usa-section--dark">
      <Grid>
        <Grid row gap className="usa-graphic-list__row">
          {graphics
            && graphics.map((graphic, i) => (
              <Grid
                className="usa-media-block"
                tablet={{ col: 6 }}
                key={graphic.heading}
              >
                {graphicImages[i] && (
                  <img
                    className="graphic_image--circle usa-media-block__img"
                    src={graphicImages[i]}
                    alt={graphic.imageDescription}
                  />
                )}
                {!graphic.imageDescription
                && console.warn(`No alt text provided for graphic image ${i + 1} in ${i18n.language} language`)}
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
