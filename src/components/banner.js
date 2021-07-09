import React from "react";
import { Grid, GridContainer } from "@trussworks/react-uswds";
import nVector from "../images/logos/cto_n_vector.png";
import yVector from "../images/logos/cto_y_vector.png";
import cVector from "../images/logos/cto_c_vector.png";

function Banner({ children }) {
  return (
    <div className="usa-section--dark">
      <GridContainer>
        <Grid row gap className="banner__logo">
          <Grid>
            <Grid row>
              <div>
                <img src={nVector} alt="" />
              </div>
              <div>
                <img src={yVector} alt="" />
              </div>
              <div>
                <img src={cVector} alt="" />
              </div>
            </Grid>
          </Grid>
          <Grid>
            <p className="font-heading-xs">{children}</p>
          </Grid>
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Banner;
