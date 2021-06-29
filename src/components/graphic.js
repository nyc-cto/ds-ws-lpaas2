import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Graphic = ({ graphics }) => {
  return (
    <GridContainer>
      <Grid row>
        {graphics.map((graphic) => {
          return (
            <Grid mobile={{ col: "fill" }} tablet={{ col: 6 }}>
              <img src={graphic.graphicImage} alt="" />
              <h2>{graphic.graphicHeading}</h2>
              <p>{graphic.graphicText}</p>
            </Grid>
          );
        })}
      </Grid>
    </GridContainer>
  );
};

export default Graphic;
