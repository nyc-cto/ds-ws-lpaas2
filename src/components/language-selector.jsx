/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import {
  Button, Grid, Menu, NavDropDownButton,
} from '@trussworks/react-uswds';
import FeatherIcon from 'feather-icons-react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { languages } from '../constants/languages';

function LanguageSelector({ slug }) {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (langKey) => {
    i18n.changeLanguage(langKey, navigate(`/${langKey}/${slug}`));
  };

  const languageMenuItems = languages.map((language) => (
    <div
      className={
        languages.length <= 5
          ? 'banner__language-selector-item'
          : i18n.dir(language.langKey) === 'rtl'
            ? 'banner__language-selector-item--rtl'
            : 'banner__language-selector-item--ltr'
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

LanguageSelector.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default LanguageSelector;
