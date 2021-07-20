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
import { footer as links } from '../constants/links';
import logoImg from '../images/logos/cto_logo_horizontal_white.png';

function Footer() {
  const { t } = useTranslation();

  const primaryLinks = links.primary;
  const primaryLinksLength = primaryLinks.length;
  const primaryLinksLabels = t('footer.primaryLinks');
  const primaryLinksLabelsLength = primaryLinksLabels.length;
  const primaryLength = primaryLinksLength > primaryLinksLabelsLength
    ? primaryLinksLabelsLength
    : primaryLinksLength;
  // take shorter length if is missing link in primaryLinks or missing label in translation file
  if (primaryLinksLength !== primaryLinksLabelsLength) {
    console.error(
      'Different number of primary links in /src/constants/link.js and primary link labels in /src/locales\n',
      'Links: ',
      primaryLinks,
      '\n',
      'Labels: ',
      primaryLinksLabels,
      '\n',
    );
  }
  // TODO: link underline is longer now after making it .map
  const primaryLinkItems = primaryLinks.map(
    (element, i) => i < primaryLength && (
    <Link className="usa-footer__primary-link" to={element}>
      {primaryLinksLabels[i]}
    </Link>
    ),
  );

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
          links={primaryLinkItems}
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
                alt={t('footer.secondary.heading.logo')}
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
