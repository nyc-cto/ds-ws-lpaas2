import React from "react";
import { Grid, Button } from "@trussworks/react-uswds";

const Section = ({ section, buttons }) => {
  return (
      <Grid row>
        <Grid>
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
          <Button>{buttons.callToAction}</Button>
        </Grid>
      </Grid>
  );
};

export default Section;
