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
  const navDropDownLabels = t('navigation.dropdowns'); // labels (used for verification only; labels are taken from navDropDowns)
  const translationFileLength = navDropDownLabels.length;
  // error message if there is missing dropdowns or dropdown labels
  if (translationFileLength !== constFileLength) {
    console.error(
      'Different number of dropdowns in /src/constants/link.js (under header.navDropDowns) and labels in /src/locales (under navigation.dropdowns)\n',
      `${constFileLength} dropdown${
        constFileLength > 1 ? 's' : '' // plural or singular
      } in /src/constants/link.js\n`,
      `${translationFileLength} dropdown${
        translationFileLength > 1 ? 's' : '' // plural or singular
      } in /src/locales`,
    );
  }
  navDropDowns.forEach((navDropDown, i) => {
    const navDropDownLinksLength = navDropDown?.length;
    const navDropDownLinkLabels = navDropDownLabels[i].linkLabels; // labels (used for verification only)
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
      // generating links
      navDropDown.map((linkAndLabel, _) => (
        <Link to={linkAndLabel.LINK} key={`dropdown${i}Link${_}`}>
          {t(linkAndLabel.LABEL)}
        </Link>
      )),
    );
  });

  // handling which dropdown is open
  const [isOpen, setIsOpen] = useState(undefined);

/* dynamically create dropdowns in navigation bar */
  const navBarItems = dropdowns.map((_, i) => {
    const id = `navDropDown${i}`;
    return (
      <>
        <NavDropDownButton
          onToggle={() => {
            if (isOpen === id) setIsOpen(undefined); // close open dropdown if it is clicked on by closing all dropdowns
            else setIsOpen(id); // open dropdown if it's closed and clicked on
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
