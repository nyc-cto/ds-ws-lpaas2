import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

function Section({ section }) {
  return (
    <GridContainer className="usa-section">
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
  );
}

Section.propTypes = {
  section: PropTypes.node.isRequired,
};

export default Section;
