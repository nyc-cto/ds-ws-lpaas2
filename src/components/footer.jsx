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
import { footerLinks as links } from '../constants/links';
import { logoFooter } from '../images';

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

  const secondaryLinks = links.secondary;

  return (
    <FooterUSWDS
      size="medium"
      // TODO: for some reason class name has to be manually added for returnToTop
      returnToTop={(
        <GridContainer className="usa-footer__return-to-top">
          <Link to="#top">
            Return to top
          </Link>
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
                src={logoFooter}
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
              <Link to={secondaryLinks.terms}>{t('footer.terms')}</Link>
            </Grid>
            <Grid className="footer__privacy">
              <Link to={secondaryLinks.privacy}>{t('footer.privacy')}</Link>
            </Grid>
          </Grid>
        </Grid>
      )}
    />
  );
}

export default Footer;
