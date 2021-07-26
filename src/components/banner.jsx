import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { logoBanner } from '../images';
import LanguageSelector from './language-selector';

function Banner({ children, slug }) {
  const { t } = useTranslation();
  return (
    <div className="usa-section--dark">
      <GridContainer>
        <Grid row className="banner">
          <Grid row gap className="banner__logo-title">
            <Grid>
              <div>
                <img src={logoBanner} alt={t('location')} />
              </div>
            </Grid>
            <Grid>
              <p className="banner__info font-heading-xs">{children}</p>
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
