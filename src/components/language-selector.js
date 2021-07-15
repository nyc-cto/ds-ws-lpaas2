import React, { useState } from "react";
import { navigate } from "gatsby";
import { Button, Grid, Menu, NavDropDownButton } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import FeatherIcon from "feather-icons-react";
import { languages } from "../constants/languages";

function LanguageSelector({ slug }) {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (langKey) => {
    i18n.changeLanguage(langKey);
    navigate(`/${langKey}/${slug}`);
  };

  const languageButtonGroup = languages.map((language) => (
    <div className="banner__language-selector-item">
      <Button
        onClick={() => {
          handleClick(language.langKey);
        }}
        type="button"
        unstyled
        key={language.langKey}
      >
        {language.lang}
      </Button>
    </div>
  ));

  const languageMenuItems = languages.map((language) => (
    <div
      className={
        language.isRtoL
          ? "banner__language-selector-item--RtoL"
          : "banner__language-selector-item--LtoR"
      }
    >
      <Button
        onClick={() => {
          handleClick(language.langKey);
        }}
        type="button"
        unstyled
        key={language.langKey}
      >
        {language.lang}
      </Button>
    </div>
  ));
  return (
    <React.Fragment>
      {languageMenuItems.length >= 5 ? (
        <Grid className="language-selector__nav">
          <NavDropDownButton
            className="language-selector__nav-button"
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
            id="language-selector"
            items={languageMenuItems}
            isOpen={isOpen}
          />
        </Grid>
      ) : (
        <Grid className="banner__language-selector-button-group">
          {languageButtonGroup}
        </Grid>
      )}
    </React.Fragment>
  );
}

export default LanguageSelector;
