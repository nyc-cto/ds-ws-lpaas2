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
  Grid,
  Logo,
  SocialLinks,
} from "@trussworks/react-uswds";
import Link from "../components/Link";

import logoImg from "../../public/static/favicon.ico";

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
              <Grid row gap>
                <Logo
                  size="medium"
                  image={
                    <img
                      className="usa-footer__logo-img"
                      // alt=""
                      src={logoImg}
                    />
                  }
                  heading={
                    <p className="usa-footer__logo-heading">Name of Agency</p>
                  }
                />
                <Grid
                  className="usa-footer__contact-links"
                  mobileLg={{ col: 6 }}
                >
                  <SocialLinks
                    links={[
                      <Link
                        key="facebook"
                        className="usa-social-link--facebook"
                        to="#"
                      >
                        <span>Facebook</span>
                      </Link>,
                      <Link
                        key="twitter"
                        className="usa-social-link--twitter"
                        to="#"
                      >
                        <span>Twitter</span>
                      </Link>,
                      <Link
                        key="youtube"
                        className="usa-social-link--youtube"
                        to="#"
                      >
                        <span>YouTube</span>
                      </Link>,
                      <Link
                        key="instagram"
                        className="usa-social-link--instagram"
                        to="#"
                      >
                        <span>Instagram</span>
                      </Link>,
                      <Link key="rss" className="usa-social-link--rss" to="#">
                        <span>RSS</span>
                      </Link>,
                    ]}
                  />
                  <h3 className="usa-footer__contact-heading">
                    Agency Contact Center
                  </h3>
                  <Address
                    size="medium"
                    items={[
                      <Link key="phone" to="tel:1-800-555-5555">
                        (800) CALL-GOVT
                      </Link>,
                      <Link key="email" to="mailto:info@agency.gov">
                        info@agency.gov
                      </Link>,
                    ]}
                    // role=""
                    // about=""
                  />
                </Grid>
              </Grid>
            }
          ></FooterUSWDS>
        </React.Fragment>
      </I18nextProvider>
    </Suspense>
  );
}

export default Home;
