import React from "react";
import { Dropdown, Label } from "@trussworks/react-uswds";
import * as languageSwitcherStyles from "./LanguageSwitcher.module.css";

function LanguageSwitcher({ i18n }) {
  const currLng = i18n.language;

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
  ];

  const handleChange = ({ target }) => {
    i18n.changeLanguage(target.value);
  };

  return (
    <div className={languageSwitcherStyles.switcher}>
      <Label htmlFor="input-dropdown">Translate</Label>
      <Dropdown
        className={languageSwitcherStyles.dropdown}
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
