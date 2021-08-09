import React, { useState } from 'react';

import { Menu, NavDropDownButton } from '@trussworks/react-uswds';
import FeatherIcon from 'feather-icons-react';
import { useTranslation } from 'react-i18next';

import { Link } from '.';
import { header as links } from '../constants/links';

function NavDropDown() {
  const { t } = useTranslation();

  /* dynamically store dropdowns */
  const dropdowns = [];
  const dropDownLinks = links.navDropDownLinks;
  const constFileLength = dropDownLinks.length;
  const dropDownLabels = t('navigation.dropdowns');
  const translationFileLength = dropDownLabels.length;
  const length = translationFileLength > constFileLength
    ? constFileLength
    : translationFileLength;
  /* take shorter length in case there is missing dropdowns in
      `../constants/links.js` (constants file) or `../locales/` (translation files) */
  if (translationFileLength !== constFileLength) {
    console.error(
      'Different number of dropdowns in /src/constants/link.js (under header.navDropDownLinks) and labels in /src/locales (under navigation.dropdowns)\n',
      `${constFileLength} dropdown${
        constFileLength > 1 ? 's' : ''
      } in /src/constants/link.js\n`,
      `${translationFileLength} dropdown${
        translationFileLength > 1 ? 's' : ''
      } in /src/locales`,
    );
  }
  dropDownLinks.forEach((_, i) => {
    if (i < length) {
      const navDropDownLinks = dropDownLinks[i];
      const navDropDownLinksLength = navDropDownLinks.length;
      const navDropDownLinkLabels = dropDownLabels[i].linkLabels;
      const navDropDownLinkLabelsLength = navDropDownLinkLabels?.length;
      const navDropDownLength = navDropDownLinksLength > navDropDownLinkLabelsLength
        ? navDropDownLinkLabelsLength
        : navDropDownLinksLength;
      /* take shorter length in case there is a missing link
        in `../constants/links.js` (constants file) or label in `../locales/` (translation files) */
      if (navDropDownLinksLength !== navDropDownLinkLabelsLength) {
        console.error(
          `Different number of links in /src/constants/link.js (under header.navDropDownLinks) and labels in /src/locales (under navigation.dropdowns) for dropdown ${
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
            {navDropDownLinkLabels && navDropDownLinkLabels[j]}
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
            label={(
              <div className="nav-dropdown__label">
                <p>{dropDownLabels[i].buttonLabel}</p>
                <FeatherIcon className="nav-dropdown__label-icon" icon="chevron-down" size={16} />
                <FeatherIcon className="nav-dropdown__label-icon--expanded" icon="chevron-up" color="white" size={16} />
              </div>
            )}
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
