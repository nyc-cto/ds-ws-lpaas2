import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';
import PropTypes from 'prop-types';

import nycLogo from '../images/logos/nyc_logo.png';
import LanguageSelector from './language-selector';

function Banner({ children, slug }) {
  return (
    <div className="usa-section--dark">
      <GridContainer>
        <Grid row className="banner">
          <Grid row gap className="banner__logo-title">
            <Grid>
              <div>
                <img src={nycLogo} alt="NYC" />
              </div>
            </Grid>
            <Grid>
              <p className="font-heading-xs">{children}</p>
            </Grid>
          </Grid>
          <Grid>
            <LanguageSelector slug={slug} />
          </Grid>
        </Grid>
      </GridContainer>
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Banner;
