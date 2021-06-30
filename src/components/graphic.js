import React from "react";
import { Grid } from "@trussworks/react-uswds";

const Graphic = ({ graphics }) => {
  return (
    <Grid row>
      {graphics &&
        graphics.map((graphic) => {
          return (
            <Grid mobile={{ col: "fill" }} tablet={{ col: 6 }}>
              {<img src={graphic.image} alt={graphic.imageDescription} />}
              {graphic?.heading && <h2>{graphic.heading}</h2>}
              {graphic?.text && <p>{graphic.text}</p>}
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Graphic;
