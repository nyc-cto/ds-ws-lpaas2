import React from "react";
import {
  Address,
  Footer as FooterUSWDS,
  FooterNav,
  Grid,
  Logo,
  SocialLinks,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import Link from "../components/Link";

import logoImg from "../../public/static/favicon.ico";

function Footer() {
  const { t } = useTranslation();
  const primaryLinks = ["#", "#", "#", "#"];

  return (
    <FooterUSWDS
      size="medium"
      // returnToTop={returnToTop}
      primary={
        <FooterNav
          size="medium"
          links={Array.from({ length: 4 }, (_, i) => {
            return (
              <Link className="usa-footer__primary-link" to={primaryLinks[i]}>
                {t("footer.primary")[i]}
              </Link>
            );
          })}
        />
      }
      secondary={
        <Grid row gap>
          <Logo
            size="medium"
            image={
              <img
                className="usa-footer__logo-img"
                // alt={t('')}
                src={logoImg}
              />
            }
            heading={
              <p className="usa-footer__logo-heading">
                {t("footer.secondary.heading.logo")}
              </p>
            }
          />
          <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
            <SocialLinks
              links={[
                <Link
                  key="facebook"
                  className="usa-social-link usa-social-link--facebook"
                  to="#"
                >
                  <span>{t("footer.secondary.socialLinks.facebook")}</span>
                </Link>,
                <Link
                  key="twitter"
                  className="usa-social-link usa-social-link--twitter"
                  to="#"
                >
                  <span>{t("footer.secondary.socialLinks.twitter")}</span>
                </Link>,
                <Link
                  key="youtube"
                  className="usa-social-link usa-social-link--youtube"
                  to="#"
                >
                  <span>{t("footer.secondary.socialLinks.youtube")}</span>
                </Link>,
                <Link
                  key="instagram"
                  className="usa-social-link usa-social-link--instagram"
                  to="#"
                >
                  <span>{t("footer.secondary.socialLinks.instagram")}</span>
                </Link>,
                <Link
                  key="rss"
                  className="usa-social-link usa-social-link--rss"
                  to="#"
                >
                  <span>{t("footer.secondary.socialLinks.rss")}</span>
                </Link>,
              ]}
            />
            <h3 className="usa-footer__contact-heading">
              {t("footer.secondary.heading.contact")}
            </h3>
            <Address
              size="medium"
              items={[
                <Link key="phone" to="tel:1-800-555-5555">
                  {t('footer.secondary.address.phone')}
                </Link>,
                <Link key="email" to="mailto:info@agency.gov">
                  {t('footer.secondary.address.email')}
                </Link>,
              ]}
              // role=""
              // about=""
            />
          </Grid>
        </Grid>
      }
    />
  );
}

export default Footer;
