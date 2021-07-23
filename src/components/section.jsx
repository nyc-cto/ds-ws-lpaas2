import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import PropTypes from 'prop-types';

function Section({ buttons, section }) {
  return (
    <GridContainer className="usa-section">
      <Grid row>
        <Grid>
          {section.heading && (
            <h2 className="font-heading-xl">{section.heading}</h2>
          )}
          {section.text && <p className="usa-intro">{section.text}</p>}
          {buttons.callToAction && (
            <Button className="usa-button--big">{buttons.callToAction}</Button>
          )}
        </Grid>
      </Grid>
    </GridContainer>
  );
}

Section.propTypes = {
  section: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired,
};

export default Section;
