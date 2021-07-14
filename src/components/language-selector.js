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
    <div
      className={
        language.isRtoL
          ? "banner__language-selector-item--RtoL"
          : "banner__language-selector-item--LtoR"
      }
    >
      <Button
        onClick={() => {
          i18n.changeLanguage(language.langKey);
          navigate(`/${language.langKey}/${slug}`);
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
      {languageMenuItems.length > 6 ? (
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
            key="one"
            items={languageMenuItems}
            isOpen={isOpen}
            id="language-selector"
          />
        </Grid>
      ) : (
        <Grid>{languageMenuItems}</Grid>
      )}
    </React.Fragment>
  );
}

export default LanguageSelector;
