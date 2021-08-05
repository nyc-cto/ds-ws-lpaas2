import React from 'react';

import {
  Footer as FooterUSWDS,
  FooterNav,
  Grid,
  Logo,
} from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';
import ScriptTag from 'react-script-tag';

import { Link } from '.';
import { footerLinks as links } from '../constants/links';
import { logoFooter } from '../images';

function Footer() {
  const { t, i18n } = useTranslation();

  const primaryLinks = links.primary;
  const primaryLinksLength = primaryLinks.length;
  const primaryLinksLabels = t('navigation.dropdowns').map((element) => element.linkLabels).flat().concat(t('navigation.parentLinkLabels'));
  const primaryLinksLabelsLength = primaryLinksLabels.length;
  const primaryLength = primaryLinksLength > primaryLinksLabelsLength
    ? primaryLinksLabelsLength
    : primaryLinksLength;
  // take shorter length if is missing link in primaryLinks or missing label in translation file
  if (primaryLinksLength !== primaryLinksLabelsLength) {
    console.error(
      'Different number of links in /src/constants/link.js (under headerLinks.navDropDownLinks and headerLinks.parent) and labels in /src/locales (under navigation.dropdowns and navigation.parentLinkLabels)\n',
      'Links: ',
      primaryLinks,
      '\n',
      'Labels: ',
      primaryLinksLabels,
      '\n',
    );
  }

  const primaryLinkItems = primaryLinks.map(
    (element, i) => i < primaryLength && (
    <Link className="usa-footer__primary-link" to={element}>
      {primaryLinksLabels[i]}
    </Link>
    ),
  );

  const secondaryLinks = links.secondary;

  return (
    <div>
      <div className="footer-above">
        <div className="usa-footer__return-to-top footer-above__return-to-top">
          <Link to="#top">{t('footer.returnToTop')}</Link>
        </div>
        <div className="footer-above__feedback">
          <div
            id="feedback-widget"
            lang={i18n.language}
            pageTitle={t('title')}
            endpoint={process.env.GATSBY_ENDPOINT}
          />
          <ScriptTag
            src="https://d2ttz3as5y3dj0.cloudfront.net/feedback-module.min.js"
            type="text/javascript"
          />
        </div>
      </div>
      <FooterUSWDS
        className="footer"
        size="medium"
        primary={<FooterNav size="medium" links={primaryLinkItems} />}
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
              className="usa-footer__contact-links footer__info"
              mobileLg={{ col: 6 }}
            >
              <Grid className="footer__copyright-trademark">
                <p>{t('footer.copyright')}</p>
                <p>{t('footer.trademark')}</p>
              </Grid>
              <Grid className="footer__terms">
                <Link to={secondaryLinks.terms}>
                  {t('footer.secondaryLinks.terms')}
                </Link>
              </Grid>
              <Grid className="footer__privacy">
                <Link to={secondaryLinks.privacy}>
                  {t('footer.secondaryLinks.privacy')}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        )}
      />
    </div>
  );
}

export default Footer;
