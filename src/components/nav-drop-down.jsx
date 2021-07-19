import React, { useState } from 'react';
import { Menu, NavDropDownButton } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';
import { Link } from '.';
import { header as links } from '../constants/links';

function NavDropDown() {
  const { t } = useTranslation();

  /* dynamically store dropdowns */
  const dropdowns = [];
  const dropdownLinks = links.navDropdowns;
  const constFileLength = dropdownLinks.length;
  const dropdownLabels = t('header.nav.dropdowns');
  const translationFileLength = dropdownLabels.length;
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
  dropdownLinks.map((_, i) => {
    if (i < length) {
      const navDropdownLinks = dropdownLinks[i];
      const navDropdownLinksLength = navDropdownLinks.length;
      const navDropdownLinkLabels = t('header.nav.dropdowns')[i].simpleLinks;
      const navDropdownLinkLabelsLength = navDropdownLinkLabels.length;
      const navDropdownLength = navDropdownLinksLength > navDropdownLinkLabelsLength
        ? navDropdownLinkLabelsLength
        : navDropdownLinksLength;
      /* take shorter length in case there is a missing link
        in `../constants/links.js` (constants file) or label in `../locales/` (translation files) */
      if (navDropdownLinksLength !== navDropdownLinkLabelsLength) {
        console.error(
          `Different number of links in /src/constants/link.js and link labels in /src/locales for dropdown ${
            i + 1
          }\n`,
          'Links: ',
          navDropdownLinks,
          '\n',
          'Link labels: ',
          navDropdownLinkLabels,
          '\n',
        );
      }
      dropdowns.push(
        navDropdownLinks.map(
          (element, j) => j < navDropdownLength && (
          <Link to={element} key={element}>
            {navDropdownLinkLabels[j]}
          </Link>
          ),
        ),
      );
    } else dropdowns.push([]);
  });

  /* dynamically create dropdowns */
  const [open, setOpen] = useState();
  const navBarItems = dropdowns
    .map((_, i) => {
      const id = `navDropDown${i}`;
      const iStr = i.toString();
      /* dynamically create dropdowns in navigation bar */
      return (
        <>
          <NavDropDownButton
            onToggle={() => {
              if (open === id) setOpen(undefined);
              else setOpen(id);
            }}
            menuId={id}
            isOpen={open === id}
            label={t(`header.nav.dropdowns.${i}.label`)}
          />
          <Menu
            id={id}
            isOpen={open === id}
            items={dropdowns[i]}
            key={iStr}
          />
        </>
      );
    });
  return navBarItems;
}

export default NavDropDown;
