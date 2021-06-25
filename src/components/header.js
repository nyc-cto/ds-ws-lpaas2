import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { withTranslation } from "react-i18next";

const Header = ({ t, i18n }) => {
  return (
    <React.Fragment>
      <LanguageSwitcher i18n={i18n} />
      <h1>{t("heading")}</h1>
    </React.Fragment>
  );
};

export default withTranslation("Header")(Header);
