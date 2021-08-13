import React, { useState } from 'react';

import {
  Button, Grid, Menu, NavDropDownButton,
} from '@trussworks/react-uswds';
import FeatherIcon from 'feather-icons-react';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

function LanguageSelector({ languageList, slug }) {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  /* when a language button is clicked, it navigates to the url
  with the language code of the clicked button and the slug of the current page */
  const handleClick = (langKey) => {
    i18n.changeLanguage(langKey, navigate(`/${langKey}/${slug}`));
  };

  // create the language selector buttons based on the language list (languages used in src/locales)
  // for 5 or less languages, the buttons are simply in the banner at the top of the page
  // for more than 5 languages, the buttons are in a dropdown menu
  const languageMenuItems = languageList.map((language) => (
    <div
      className={
        `${languageList.length <= 5 // are there 5 or less languages used in the locales folder
          ? 'banner__language-selector-item' // 5 or less languages
          : i18n.dir(language.langKey) === 'rtl' // if more than 5 languages, check if the language is right-to-left
            ? 'banner__language-selector-item--rtl' // if right-to-left, the language buttons will be styled differently
            : 'banner__language-selector-item--ltr'} ${
          language.langKey === i18n.language // does button's language code match current language
            ? 'banner__language-selector-item--active' // active language is the language being used on the current page
            : 'banner__language-selector-item--inactive' // inactive languages are not being used on the current page
        }`
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
    <div className="banner__language-selector">
      {languageMenuItems.length <= 5 ? (
        <Grid className="banner__language-selector-button-group">
          {languageMenuItems}
        </Grid>
      ) : (
        <Grid className="language-selector__nav">
          <NavDropDownButton
            onToggle={() => {
              setIsOpen((prevOpen) => !prevOpen);
            }}
            menuId="language-selector"
            className="language-selector__nav-button"
            isOpen={isOpen}
            label={(
              <div className="banner__language-selector-label font-heading-xs">
                <FeatherIcon icon="globe" size={16} />
                <p>{t('header.language')}</p>
              </div>
            )}
          />
          <Menu
            id="language-selector"
            isOpen={isOpen}
            items={languageMenuItems}
          />
        </Grid>
      )}
    </div>
  );
}

export default LanguageSelector;
