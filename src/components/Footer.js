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

function Footer() {
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
          heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
        />
        <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
          <SocialLinks
            links={[
              <Link
                key="facebook"
                className="usa-social-link usa-social-link--facebook"
                to="#"
              >
                <span>Facebook</span>
              </Link>,
              <Link
                key="twitter"
                className="usa-social-link usa-social-link--twitter"
                to="#"
              >
                <span>Twitter</span>
              </Link>,
              <Link
                key="youtube"
                className="usa-social-link usa-social-link--youtube"
                to="#"
              >
                <span>YouTube</span>
              </Link>,
              <Link
                key="instagram"
                className="usa-social-link usa-social-link--instagram"
                to="#"
              >
                <span>Instagram</span>
              </Link>,
              <Link
                key="rss"
                className="usa-social-link usa-social-link--rss"
                to="#"
              >
                <span>RSS</span>
              </Link>,
            ]}
          />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
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
  />;
}

export default Footer;
