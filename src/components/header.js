import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { GovBanner, Header as HeaderUSWDS } from "@trussworks/react-uswds";
import { withTranslation } from "react-i18next";

const Header = ({ t, i18n }) => {
  const govBannerLang = {
    en: "english",
    es: "spanish",
  };

  return (
    <HeaderUSWDS basic>
      <GovBanner language={govBannerLang[i18n.language]} translate="yes" />
      <LanguageSwitcher i18n={i18n} />
      <h1>{t("heading")}</h1>
    </HeaderUSWDS>
  );
};

export default withTranslation("Header")(Header);
