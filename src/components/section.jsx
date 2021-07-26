import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridContainer } from '@trussworks/react-uswds';

function Section({
  page, section, subsection, subSubsection,
}) {
  return (
    <GridContainer className="usa-section">
      <Grid row>
        {page && (
          <Grid>
            {page.heading && (
              <h1 className="font-heading-2xl">{page.heading}</h1>
            )}
            {page.text && <p className="usa-intro">{page.text}</p>}
          </Grid>
        )}
        {section && (
          <Grid>
            {section.heading && (
              <h2 className="font-heading-xl">{section.heading}</h2>
            )}
            {section.text && <p className="usa-intro">{section.text}</p>}
          </Grid>
        )}
        {subsection && (
          <Grid>
            {subsection.heading && (
              <h3 className="font-heading-lg">{subsection.heading}</h3>
            )}
            {subsection.text && <p className="usa-intro">{subsection.text}</p>}
          </Grid>
        )}
        {subSubsection && (
          <Grid>
            {subSubsection.heading && (
              <h4 className="font-heading-md">{subSubsection.heading}</h4>
            )}
            {subSubsection.text && (
              <p className="usa-intro">{subSubsection.text}</p>
            )}
          </Grid>
        )}
      </Grid>
    </GridContainer>
  );
}

Section.propTypes = {
  page: PropTypes.node.isRequired,
  section: PropTypes.node.isRequired,
  subsection: PropTypes.node.isRequired,
  subSubsection: PropTypes.node.isRequired,
};

export default Section;
