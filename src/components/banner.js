import React from "react";
import {
  Grid,
  GridContainer,
  NavDropDownButton,
} from "@trussworks/react-uswds";
import { LanguageSelector } from ".";
import nycLogo from "../images/logos/nyc_logo.png";

function Banner({ children, slug }) {
  return (
    <div className="usa-section--dark">
      <GridContainer>
        <Grid row className="banner">
          <Grid row gap className="banner__logo-title">
            <Grid>
              <div>
                <img src={nycLogo} alt="NYC" />
              </div>
            </Grid>
            <Grid>
              <p className="font-heading-xs">{children}</p>
            </Grid>
          </Grid>
          <Grid className="banner__language-selector-container">
            <LanguageSelector slug={slug} />
          </Grid>
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Banner;
