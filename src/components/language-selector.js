import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import {
  Dropdown,
  Grid,
  Label,
  NavDropDownButton,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  return <NavDropDownButton label="Language" />;
}

export default LanguageSelector;
