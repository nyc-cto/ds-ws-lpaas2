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
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (langKey) => {
    i18n.changeLanguage(langKey);
    navigate(`/${langKey}/${slug}`);
  };

  const languageMenuItems = languages.map((language) => (
    <div
      className={
        languages.length <= 5
          ? 'banner__language-selector-item'
          : language.isRtoL
            ? 'banner__language-selector-item--RtoL'
            : 'banner__language-selector-item--LtoR'
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
    <>
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
                <p>Language</p>
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
    </>
  );
}

LanguageSelector.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default LanguageSelector;
