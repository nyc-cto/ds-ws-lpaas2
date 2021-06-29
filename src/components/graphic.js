import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Graphic = ({ graphics }) => {
  return (
    <GridContainer>
      <Grid row>
        {graphics.map((graphic) => {
          return (
            <Grid mobile={{ col: "fill" }} tablet={{ col: 6 }}>
              <img src={graphic.image} alt="" />
              <h2>{graphic.heading}</h2>
              <p>{graphic.text}</p>
            </Grid>
          );
        })}
      </Grid>
    </GridContainer>
  );
};

export default Graphic;
