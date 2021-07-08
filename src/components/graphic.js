import React from "react";
import { Grid, GridContainer } from "@trussworks/react-uswds";

function Graphic({ graphics }) {
  return (
    <GridContainer className="usa-graphic-list usa-section usa-section--dark">
      <Grid>
        <Grid row gap className="usa-graphic-list__row">
          {graphics &&
            graphics.map((graphic) => {
              return (
                <Grid
                  tablet={{ col: 6 }}
                  className="usa-media-block"
                  key={graphic.heading}
                >
                  {graphic?.image && (
                    <img
                      src={graphic.image}
                      alt={graphic.imageDescription}
                      className="usa-media-block__img"
                    />
                  )}
                  <Grid className="usa-media-block__body">
                    {graphic?.heading && (
                      <h2 className="usa-graphic-list__heading">
                        {graphic.heading}
                      </h2>
                    )}
                    {graphic?.text && (
                      <p className="usa-prose">{graphic.text}</p>
                    )}
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </GridContainer>
  );
}

export default Graphic;
