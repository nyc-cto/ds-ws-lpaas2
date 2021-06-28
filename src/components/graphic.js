import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

const Graphic = ({ images, graphicHeadings }) => {
  return (
    <GridContainer>
      <Grid row>
        {images.map((image) => (
          <Grid col={3}>
            <p>{image}</p>
          </Grid>
        ))}
      </Grid>
    </GridContainer>
  );
};

export default Graphic;
