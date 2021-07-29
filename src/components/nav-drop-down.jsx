import React, { useState } from 'react';

import { Menu, NavDropDownButton } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';

import { Link } from '.';
import { headerLinks as links } from '../constants/links';

function NavDropDown() {
  const { t } = useTranslation();

  /* dynamically store dropdowns */
  const dropdowns = [];
  const dropDownLinks = links.navDropDowns;
  const constFileLength = dropDownLinks.length;
  const dropDownLabels = t('header.nav.dropdowns');
  const translationFileLength = dropDownLabels.length;
  const length = translationFileLength > constFileLength
    ? constFileLength
    : translationFileLength;
  /* take shorter length in case there is missing dropdowns in
      `../constants/links.js` (constants file) or `../locales/` (translation files) */
  if (translationFileLength !== constFileLength) {
    console.error(
      'Different number of dropdowns in /src/constants/link.js and dropdown labels in /src/locales\n',
      `${constFileLength} dropdown${
        constFileLength > 1 ? 's' : ''
      } in /src/constants/link.js\n`,
      `${translationFileLength} dropdown${
        translationFileLength > 1 ? 's' : ''
      } in /src/locales`,
    );
  }
  // eslint-disable-next-line array-callback-return
  dropDownLinks.map((_, i) => {
    if (i < length) {
      const navDropDownLinks = dropDownLinks[i];
      const navDropDownLinksLength = navDropDownLinks.length;
      const navDropDownLinkLabels = dropDownLabels[i].simpleLinks;
      const navDropDownLinkLabelsLength = navDropDownLinkLabels.length;
      const navDropDownLength = navDropDownLinksLength > navDropDownLinkLabelsLength
        ? navDropDownLinkLabelsLength
        : navDropDownLinksLength;
      /* take shorter length in case there is a missing link
        in `../constants/links.js` (constants file) or label in `../locales/` (translation files) */
      if (navDropDownLinksLength !== navDropDownLinkLabelsLength) {
        console.error(
          `Different number of links in /src/constants/link.js and link labels in /src/locales for dropdown ${
            i + 1
          }\n`,
          'Links: ',
          navDropDownLinks,
          '\n',
          'Link labels: ',
          navDropDownLinkLabels,
          '\n',
        );
      }
      dropdowns.push(
        navDropDownLinks.map(
          (element, j) => j < navDropDownLength && (
          <Link to={element} key={element}>
            {navDropDownLinkLabels[j]}
          </Link>
          ),
        ),
      );
    } else dropdowns.push([]);
  });

  /* dynamically create dropdowns */
  const [isOpen, setIsOpen] = useState(undefined);
  const navBarItems = dropdowns
    .map((_, i) => {
      const id = `navDropDown${i}`;
      const iStr = i.toString();
      /* dynamically create dropdowns in navigation bar */
      return (
        <>
          <NavDropDownButton
            onToggle={() => {
              if (isOpen === id) setIsOpen(undefined);
              else setIsOpen(id);
            }}
            menuId={id}
            isOpen={isOpen === id}
            label={t(`header.nav.dropdowns.${i}.label`)}
          />
          <Menu
            id={id}
            isOpen={isOpen === id}
            items={dropdowns[i]}
            key={iStr}
          />
        </>
      );
    });
  return navBarItems;
}

export default NavDropDown;
