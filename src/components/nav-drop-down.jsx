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
  const dropDownLinks = links.navDropDownLinks; // links
  const constFileLength = dropDownLinks.length;
  const dropDownLabels = t('navigation.dropdowns'); // labels
  const translationFileLength = dropDownLabels.length;
  const length = translationFileLength > constFileLength
    ? constFileLength
    : translationFileLength;
  /* take shorter length if there is a missing dropdown in dropDownLinks or label in dropDownLabels */
  if (translationFileLength !== constFileLength) {
    console.error(
      'Different number of dropdowns in /src/constants/link.js (under header.navDropDownLinks) and labels in /src/locales (under navigation.dropdowns)\n',
      `${constFileLength} dropdown${
        constFileLength > 1 ? 's' : '' // plural or singular
      } in /src/constants/link.js\n`,
      `${translationFileLength} dropdown${
        translationFileLength > 1 ? 's' : '' // plural or singular
      } in /src/locales`,
    );
  }
  dropDownLinks.forEach((_, i) => {
    if (i < length) {
      const navDropDownLinks = dropDownLinks[i]; // links
      const navDropDownLinksLength = navDropDownLinks.length;
      const navDropDownLinkLabels = dropDownLabels[i].linkLabels; // labels
      const navDropDownLinkLabelsLength = navDropDownLinkLabels.length;
      const navDropDownLength = navDropDownLinksLength > navDropDownLinkLabelsLength
        ? navDropDownLinkLabelsLength
        : navDropDownLinksLength;
      /* take shorter length if there is a missing link in navDropDownLinks or label in navDropDownLinkLabels */
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
        // generating links
        navDropDownLinks.map(
          (element, j) => j < navDropDownLength && (
          <Link to={element} key={element}>
            {navDropDownLinkLabels[j]}
          </Link>
          ),
        ),
      );
    } else dropdowns.push([]); // empty dropdown
  });

  // handling which dropdown is open
  const [isOpen, setIsOpen] = useState(undefined);

  /* dynamically create dropdowns in navigation bar */
  const navBarItems = dropdowns.map((_, i) => {
    const id = `navDropDown${i}`;
    const iStr = i.toString();
    return (
      <>
        <NavDropDownButton
          onToggle={() => {
            if (isOpen === id) setIsOpen(undefined);
            // close open dropdown if it is clicked on by closing all dropdowns
            else setIsOpen(id); // open dropdown if it's closed and clicked on
          }}
          menuId={id}
          isOpen={isOpen === id}
          label={(
            <div className="nav-dropdown__label">
              <p>{dropDownLabels[i].buttonLabel}</p>
              <FeatherIcon
                className="nav-dropdown__label-icon"
                icon="chevron-down"
                size={16}
              />
              <FeatherIcon
                className="nav-dropdown__label-icon--expanded"
                icon="chevron-up"
                color="white"
                size={16}
              />
            </div>
          )}
        />
        <Menu id={id} isOpen={isOpen === id} items={dropdowns[i]} key={iStr} />
      </>
    );
  });
  return navBarItems;
}

export default NavDropDown;
