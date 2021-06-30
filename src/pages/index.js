import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import Header from "../components/Header";
import i18next from "../components/i18n";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

/* TODO: imports for footer – remove when footer is moved to Footer.js */
import {
  Address,
  Footer as FooterUSWDS,
  FooterNav,
  Logo,
  SocialLinks,
} from "@trussworks/react-uswds";
import Link from "../components/Link";

function Home() {
  return (
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18next}>
        <Header />
        {/* TODO: temporary placeholder */}
        <div>
          The U.S. government, including the U.S. General Services
          Administration (the primary sponsoring federal agency of USA.gov),
          neither endorses nor guarantees in any way the external organizations,
          services, advice, or products included in these website links.
          Furthermore, the U.S. government neither controls nor guarantees the
          accuracy, relevance, timeliness or completeness of the information
          contained in non-government website links.
        </div>

        {/* TODO: Footer to be added later to Footer.js */}
        <React.Fragment>
          <FooterUSWDS
            size="medium"
            // returnToTop={returnToTop}
            primary={
              <FooterNav
                size="medium"
                links={[
                  <Link className="usa-footer__primary-link" to="#">
                    Primary Link
                  </Link>,
                  <Link className="usa-footer__primary-link" to="#">
                    Primary Link
                  </Link>,
                  <Link className="usa-footer__primary-link" to="#">
                    Primary Link
                  </Link>,
                  <Link className="usa-footer__primary-link" to="#">
                    Primary Link
                  </Link>,
                ]}
              />
            }
            secondary={
              <div className="grid-row grid-gap">
                <Logo
                  size="medium"
                  image={
                    <img
                      className="usa-footer__logo-img"
                      alt="img alt text"
                      // src={logoImg}
                    />
                  }
                  heading={
                    <p className="usa-footer__logo-heading">Name of Agency</p>
                  }
                />
                <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                  <SocialLinks
                    links={[
                      <a
                        key="facebook"
                        className="usa-social-link usa-social-link--facebook"
                        href="#"
                      >
                        <span>Facebook</span>
                      </a>,
                      <a
                        key="twitter"
                        className="usa-social-link usa-social-link--twitter"
                        href="#"
                      >
                        <span>Twitter</span>
                      </a>,
                      <a
                        key="youtube"
                        className="usa-social-link usa-social-link--youtube"
                        href="#"
                      >
                        <span>YouTube</span>
                      </a>,
                      <a
                        key="instagram"
                        className="usa-social-link usa-social-link--instagram"
                        href="#"
                      >
                        <span>Instagram</span>
                      </a>,
                      <a
                        key="rss"
                        className="usa-social-link usa-social-link--rss"
                        href="#"
                      >
                        <span>RSS</span>
                      </a>,
                    ]}
                  />
                  <h3 className="usa-footer__contact-heading">
                    Agency Contact Center
                  </h3>
                  <Address
                    size="medium"
                    items={[
                      <a key="telephone" href="tel:1-800-555-5555">
                        (800) CALL-GOVT
                      </a>,
                      <a key="email" href="mailto:info@agency.gov">
                        info@agency.gov
                      </a>,
                    ]}
                  />
                </div>
              </div>
            }
          ></FooterUSWDS>
        </React.Fragment>
      </I18nextProvider>
    </Suspense>
  );
}

export default Home;
