import React from "react";
import { Grid, Button } from "@trussworks/react-uswds";

const Section = ({ section, buttons }) => {
  return (
    <Grid row className="usa-section">
      <Grid>
        {section?.heading && (
          <h2 className="font-heading-xl">{section.heading}</h2>
        )}
        {section?.text && <p className="usa-intro">{section.text}</p>}
        {buttons?.callToAction && (
          <Button className="usa-button--big">{buttons.callToAction}</Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Section;
