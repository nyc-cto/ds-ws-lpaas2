import React, { useState } from "react";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import {
  ExtendedNav,
  GovBanner,
  Header as HeaderUSWDS,
  Menu,
  NavDropDownButton,
  NavMenuButton,
  Search,
  Title,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();

  /* switching between languages in the government banner */
  const govBannerLang = {
    /* TODO: might want to keep in a separate file */
    en: "english",
    es: "spanish",
  };

  /* menu expansion */
  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);

  /* nav dropdown expansions */
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  /* first dropdown items */
  const testMenuItemsOne = [
    <Link to="#linkOne" key="one">
      {t("nav.dropdownOne.simpleLinkOne")}
    </Link>,
    <Link to="#linkTwo" key="two">
      {t("nav.dropdownOne.simpleLinkTwo")}
    </Link>,
  ];

  /* second dropdown items */
  const testMenuItemsTwo = [
    <Link to="#linkThree" key="one">
      {t("nav.dropdownTwo.simpleLinkThree")}
    </Link>,
    <Link to="#linkFour" key="two">
      {t("nav.dropdownTwo.simpleLinkFour")}
    </Link>,
  ];

  /* links above search button */
  const secondaryLinks = [
    <Link to="#linkFive" key="one">
      {t("secondaryLinks.linkOne")}
    </Link>,
    <Link to="#linkSix" key="two">
      {t("secondaryLinks.linkTwo")}
    </Link>,
  ];

  const navBarItems = [
    <React.Fragment>
      <NavDropDownButton
        onToggle={() => {
          /* TODO: should it extend on ENTER or BUTTON_DOWN? */
          setIsOpen2(false);
          setIsOpen1(!isOpen1);
        }}
        menuId="testDropDownOne"
        isOpen={isOpen1}
        label={t("nav.dropdownOne.label")}
        // isCurrent={true} // TODO: update later
      />
      <Menu
        key="one"
        items={testMenuItemsOne}
        isOpen={isOpen1}
        id="testDropDownOne"
      />
    </React.Fragment>,
    <React.Fragment>
      <NavDropDownButton
        onToggle={() => {
          /* TODO: should it extend on ENTER or BUTTON_DOWN? */
          setIsOpen1(false);
          setIsOpen2(!isOpen2);
        }}
        menuId="testDropDownTwo"
        isOpen={isOpen2}
        label={t("nav.dropdownTwo.label")}
        // isCurrent={true} // TODO: update later
      />
      <Menu
        key="two"
        items={testMenuItemsTwo}
        isOpen={isOpen2}
        id="testDropDownTwo"
      />
    </React.Fragment>,
    <NavLink to="#three" key="three">
      <span>{t("nav.parentOne")}</span>
    </NavLink>,
  ];

  return (
    <HeaderUSWDS extended={true}>
      <a class="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <GovBanner
        language={govBannerLang[i18n.language]}
        translate="yes"
        role="banner"
      />
      <LanguageSwitcher i18n={i18n} />
      <div className="usa-navbar">
        <Title>{t("title")}</Title>
        <NavMenuButton onClick={onClick} label="Menu" />
      </div>
      <Router>
        <ExtendedNav
          primaryItems={navBarItems}
          secondaryItems={secondaryLinks}
          mobileExpanded={expanded}
          onToggleMobileNav={onClick}
          role="navigation"
        >
          <Search id="search" className="search-bar" onSubmit={() => {}} size="small" />
        </ExtendedNav>
      </Router>
    </HeaderUSWDS>
  );
};

export default Header;
