import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Dropdown, Grid, Label } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

function LanguageSwitcher({ slug }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
  ];

  const handleChange = ({ target }) => {
    i18n.changeLanguage(target.value);
  };

  useEffect(() => {
    navigate(`/${currentLang}/${slug}`);
  }, [currentLang]);

  return (
    <div className="language-switcher">
      <Grid row gap>
        <Grid>
          <Label htmlFor="input-dropdown">Translate</Label>
          </Grid>
          <Grid >
          <Dropdown
            className="language-switcher__dropdown"
            id="input-dropdown"
            name="input-dropdown"
            defaultValue={currentLang}
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
        </Grid>
      </Grid>
    </div>
  );
}

export default LanguageSwitcher;