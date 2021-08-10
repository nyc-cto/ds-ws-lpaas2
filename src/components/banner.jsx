import React from 'react';

import { Grid, GridContainer } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';

import { logoBanner } from '../images';
import LanguageSelector from './language-selector';

// this is the banner at the top of the page
// it includes the the language selector button(s)
// update the text in the translation files in src/locales

function Banner({ children, languageList, slug }) {
  const { t } = useTranslation();
  return (
    <div className="usa-section--dark">
      <GridContainer>
        <Grid row className="banner">
          <Grid row gap className="banner__logo-title">
            <Grid>
              <div>
                {logoBanner && <img src={logoBanner} alt={t('location')} />}
              </div>
            </Grid>
            <Grid>
              <p className="banner__info font-heading-xs">{children}</p>
            </Grid>
          </Grid>
          <Grid>
            <LanguageSelector languageList={languageList} slug={slug} />
          </Grid>
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Banner;
