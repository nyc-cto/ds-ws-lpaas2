import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { navigate } from "gatsby";
import { Dropdown, Label } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currLng = i18n.language;
  let history = useHistory();
  let location = useLocation();
  console.log("LOCATION", location);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
  ];

  const handleChange = ({ target }) => {
    i18n.changeLanguage(target.value);
  };

  useEffect(() => {
    console.log("CURRENT LANG in USEEFFECT", currLng);
    navigate(`/${currLng}`);
  }, [currLng]);

  //update document title (in helmet)
  //update language in helmet

  return (
    <div className="language-switcher">
      <Label htmlFor="input-dropdown">Translate</Label>
      <Dropdown
        className="language-switcher__dropdown"
        id="input-dropdown"
        name="input-dropdown"
        defaultValue={currLng}
        onChange={handleChange}
      >
        {languages.map((lng) => {
          return (
            <option name="lng" value={lng.code} key={lng.code}>
              {lng.label}
            </option>
          );
        })}
      </Dropdown>
      {/* <Button type="submit">Translate</Button> */}
      {/* TODO: good to include a submit button (for accessibility reasons)*/}
    </div>
  );
}

export default LanguageSwitcher;
