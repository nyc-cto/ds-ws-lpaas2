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
  const { navDropDowns } = links; // links + labels
  const constFileLength = navDropDowns.length;
  const navDropDownLabels = t('navigation.dropdowns'); // labels
  const translationFileLength = navDropDownLabels.length;
  // error message if there is missing dropdowns or dropdown labels
  if (translationFileLength !== constFileLength) {
    console.error(
      'Different number of dropdowns in /src/constants/link.js (under header.navDropDowns) and labels in /src/locales (under navigation.dropdowns)\n',
      `${constFileLength} dropdown${
        constFileLength > 1 ? 's' : ''
      } in /src/constants/link.js\n`,
      `${translationFileLength} dropdown${
        translationFileLength > 1 ? 's' : ''
      } in /src/locales`,
    );
  }
  navDropDowns.forEach((navDropDown, i) => {
    const navDropDownLinksLength = navDropDown.length;
    const navDropDownLinkLabels = navDropDownLabels[i].linkLabels;
    const navDropDownLinkLabelsLength = navDropDownLinkLabels.length;
    if (navDropDownLinksLength !== navDropDownLinkLabelsLength) {
      console.error(
        `Different number of links in /src/constants/link.js (under header.navDropDowns[${i}]) and labels in /src/locales (under navigation.dropdowns[${i}].linkLabels) for dropdown ${
          i + 1
        }\n`,
        'Links: ',
        navDropDown,
        '\n',
        'Link labels: ',
        navDropDownLinkLabels,
        '\n',
      );
    }
    dropdowns.push(
      navDropDown.map((linkAndLabel, _) => (
        <Link to={linkAndLabel.link} key={`dropdown${i}Link${_}`}>
          {t(linkAndLabel.label)}
        </Link>
      )),
    );
  });

  /* dynamically create dropdowns */
  const [isOpen, setIsOpen] = useState(undefined);
  const navBarItems = dropdowns.map((_, i) => {
    const id = `navDropDown${i}`;
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
              <p>{navDropDownLabels[i].buttonLabel}</p>
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
        <Menu id={id} isOpen={isOpen === id} items={dropdowns[i]} key={`dropdown${i}`} />
      </>
    );
  });
  return navBarItems;
}

export default NavDropDown;
