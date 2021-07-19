import React, { useState } from 'react';
import { Menu, NavDropDownButton } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';

function NavDropDown(dropdowns) {
  const { t } = useTranslation();
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
