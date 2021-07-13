import React, { useState } from "react";
import { navigate } from "gatsby";
import { Button, Grid, Menu, NavDropDownButton } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import FeatherIcon from "feather-icons-react";
import { Link } from ".";
import { languages } from "../constants/languages";

function LanguageSelector({ slug }) {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const languageMenuItems = languages.map((language) => (
    <Button
      onClick={() => {
        i18n.changeLanguage(language.langKey);
        navigate(`/${language.langKey}/${slug}`)
      }}
      type="button"
      unstyled
      className="banner__lang-selector-item"
      key={language.langKey}
    >
      {language.lang}
    </Button>
  ));
  return (
    <Grid>
      <NavDropDownButton
        className="language-selector__nav"
        onToggle={() => {
          setIsOpen((prevOpen) => !prevOpen);
        }}
        menuId="language-selector"
        isOpen={isOpen}
        label={
          <div className="banner__language-selector-label font-heading-xs">
            <FeatherIcon icon="globe" size={16} />
            <p>Language</p>
          </div>
        }
      />
      <Menu
        key="one"
        items={languageMenuItems}
        isOpen={isOpen}
        id="language-selector"
      />
    </Grid>
  );
}

export default LanguageSelector;
