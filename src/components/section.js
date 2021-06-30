import React from "react";
import { Grid, Button } from "@trussworks/react-uswds";

const Section = ({ section, buttons }) => {
  return (
      <Grid row>
        <Grid>
          {section?.heading && <h2>{section.heading}</h2>}
          {section?.text && <p>{section.text}</p>}
          {buttons?.callToAction && <Button>{buttons.callToAction}</Button>}
        </Grid>
      </Grid>
  );
};

export default Section;
