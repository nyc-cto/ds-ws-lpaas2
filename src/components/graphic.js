import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Graphic = ({graphicsSection}) => {
  return (
    <GridContainer>
      <Grid row>
        {/* {graphicsSection.map(graphic => {
          return (
            <Grid>
              <h2>graphic.graphicImage</h2>
              <p>graphic.graphicText</p>
            </Grid>
          )
        })} */}
        {/* <p>{graphicsSection.map(graphic => <p>{graphic}</p>)}</p> */}
        
        <p>{graphicsSection}</p>
        <Grid></Grid>
      </Grid>
    </GridContainer>
  );
};

export default Graphic;
