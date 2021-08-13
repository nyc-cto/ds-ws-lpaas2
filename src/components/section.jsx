import React from 'react';

import { Grid, GridContainer, Button } from '@trussworks/react-uswds';
import { navigate } from 'gatsby';

import { landing as links } from '../constants/links';

// update the content by editing the markdown files in src/markdown-pages
// update the button link in src/constants/links.js

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
            {links.SECTION_BUTTON_LINK && section.buttonText && (
              <Button
                onClick={() => {
                  navigate(links.SECTION_BUTTON_LINK);
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
