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
import { Link } from ".";

import logoImg from "../images/favicon.ico";

function Footer() {
  const { t } = useTranslation();
  const primaryLinks = ["#", "#", "#", "#"];
  const socialLinks = {
    facebook: "#",
    twitter: "#",
    youtube: "#",
    instagram: "#",
    rss: "#",
  };
  const socialLinkTypes = [
    "facebook",
    "twitter",
    "youtube",
    "instagram",
    "rss",
  ];

  return (
    <FooterUSWDS
      size="medium"
      // returnToTop={returnToTop}
      primary={
        <FooterNav
          size="medium"
          links={Array.from({ length: t("footer.primary").length }, (_, i) => {
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
              links={Array.from(
                { length: t("footer.secondary.socialLinks").length },
                (_, i) => {
                  const linkType = socialLinkTypes[i];
                  return (
                    <Link
                      key={linkType}
                      className={`usa-social-link usa-social-link--${linkType}`}
                      to={socialLinks.linkType}
                    >
                      <span>{t("footer.secondary.socialLinks")[i]}</span>
                    </Link>
                  );
                }
              )}
            />
            <h3 className="usa-footer__contact-heading">
              {t("footer.secondary.heading.contact")}
            </h3>
            <Address
              size="medium"
              items={[
                <Link key="phone" to="tel:1-800-555-5555">
                  {t("footer.secondary.address.phone")}
                </Link>,
                <Link key="email" to="mailto:info@agency.gov">
                  {t("footer.secondary.address.email")}
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
