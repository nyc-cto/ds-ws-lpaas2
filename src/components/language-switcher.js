import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Dropdown, Label } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitcher.css";

function LanguageSwitcher({ slug }) {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
  ];

  const handleChange = ({ target }) => {
    const newLang = target.value;
    i18n.changeLanguage(newLang);
    navigate(`/${newLang}/${slug}`);
  };

  return (
    <div className="language-switcher">
      <Label htmlFor="input-dropdown">Translate</Label>
      <Dropdown
        className="language-switcher__dropdown"
        id="input-dropdown"
        name="input-dropdown"
        defaultValue={i18n.language}
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
