import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { Grid, Menu, NavDropDownButton } from "@trussworks/react-uswds";
import FeatherIcon from "feather-icons-react";
import { Link } from ".";
import languages from "../constants/languages";

function LanguageSelector({slug}) {
  const [isOpen, setIsOpen] = useState(false);

  const languageMenuItems = languages.map((language) => (
    <Link
      to={`/${language.langKey}/${slug}`}
      onClick={() => {
        console.log("Change Language", i18n.lang)
        i18n.changeLanguage(language.langKey) 
      }}
      key={language.langKey}
      className="banner__lang-selector-item"
    >
      {language.lang}
    </Link>
  ));

  return (
    <Grid>
      <NavDropDownButton
        onToggle={() => {
          setIsOpen((prevOpen) => !prevOpen);
        }}
        menuId="language-selector"
        isOpen={isOpen}
        label={
          <div className="banner__language-selector-label font-heading-xs">
            <FeatherIcon icon="globe" />
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
