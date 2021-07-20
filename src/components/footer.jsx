import React from 'react';
import {
  Footer as FooterUSWDS,
  FooterNav,
  Grid,
  GridContainer,
  Logo,
} from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';
import { Link } from '.';

import logoImg from '../images/logos/cto_logo_horizontal_white.png';

function Footer() {
  const { t } = useTranslation();
  const primaryLinks = ['/link-one', '/link-two', '/link-three', '/link-four'];

  return (
    <FooterUSWDS
      size="medium"
      returnToTop={(
        <GridContainer>
          <Link to="#top" className="usa-footer__return-to-top">
            Return to top
          </Link>
          {/* TODO: for some reason class name has to be manually added */}
        </GridContainer>
      )}
      primary={(
        <FooterNav
          size="medium"
          links={Array.from(
            { length: t('footer.primaryLinks').length },
            (_, i) => (
              <Link className="usa-footer__primary-link" to={primaryLinks[i]}>
                {t('footer.primaryLinks')[i]}
              </Link>
            ),
          )}
        />
      )}
      secondary={(
        <Grid row gap>
          <Logo
            size="medium"
            image={(
              <img
                className="footer__logo"
                src={logoImg}
                alt={t('agency.longformName')}
              />
            )}
          />
          <Grid
            className="usa-footer__contact-links footer"
            mobileLg={{ col: 6 }}
          >
            <Grid className="footer__copyright-trademark">
              <p>{t('footer.copyright')}</p>
              <p>{t('footer.trademark')}</p>
            </Grid>
            <Grid className="footer__terms">
              <Link to="/">{t('footer.terms')}</Link>
            </Grid>
            <Grid className="footer__privacy">
              <Link to="/">{t('footer.privacy')}</Link>
            </Grid>
          </Grid>
        </Grid>
      )}
    />
  );
}

export default Footer;
