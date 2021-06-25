import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { GovBanner, Header as HeaderUSWDS } from "@trussworks/react-uswds";
import { withTranslation } from "react-i18next";

const Header = ({ t, i18n }) => {
  return (
    <ReactFragment>
      <LanguageSwitcher i18n={i18n} />
      <h1>{t("heading")}</h1>
    </ReactFragment>
  );
};

export default withTranslation("Header")(Header);
