import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { Grid, Link, Menu, NavDropDownButton } from "@trussworks/react-uswds";
import globe from "../images/logos/globe.png";

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  //Hard coding here for now - will update soon
  const testMenuItemsOne = [
    <Link to="/en/landing" key="en">
      English
    </Link>,
    <Link to="/es/landing" key="es">
      Español
    </Link>,
    <Link to="/en/landing" key="en">
      שידיי
    </Link>,
    <Link to="/en/landing" key="en">
      Polski
    </Link>,
    <Link to="/en/landing" key="en">
      Français
    </Link>,
    <Link to="/en/landing" key="en">
      中文
    </Link>,
    <Link to="/en/landing" key="en">
      繁体中文
    </Link>,
    <Link to="/en/landing" key="en">
      ودرا
    </Link>,
    <Link to="/en/landing" key="en">
      ةيبرعلا
    </Link>,
    <Link to="/en/landing" key="en">
      Русский
    </Link>,
    <Link to="/en/landing" key="en">
      বাংলা
    </Link>,
    <Link to="/en/landing" key="en">
      한국어
    </Link>,
    <Link to="/en/landing" key="en">
      Kreyòl ayisyen
    </Link>,
  ];

  return (
    <Grid>
      <NavDropDownButton
        onToggle={() => {
          setIsOpen((prevOpen) => !prevOpen);
        }}
        menuId="languageSelector"
        isOpen={isOpen}
        label={
          <div className="banner__logo font-heading-xs">
            <img src={globe} />
            <p>Language</p>
          </div>
        }
      />
      <Menu
        key="one"
        items={testMenuItemsOne}
        isOpen={isOpen}
        id="languageSelector"
      />
    </Grid>
  );
}

export default LanguageSelector;
