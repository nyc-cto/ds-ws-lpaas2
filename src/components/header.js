import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
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
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";

// import { LanguageSwitcher, Link } from "./index";
import LanguageSwitcher from "./language-switcher";
import Link from "./link";

import "../styles/Header.css";
import "@reach/skip-nav/styles.css"; // this will show/hide the SkipNavLink on focus

function Header({ slug }) {
  const { t, i18n } = useTranslation();

  /* switching between languages in the government banner */
  const govBannerLang = {
    /* TODO: might want to keep in a separate file */
    en: "english",
    es: "spanish",
  };

  /* menu expansion */
  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prevExpanded) => !prevExpanded);

  /* nav dropdown expansions */
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  /* first dropdown items */
  const navDropdownLinks1 = ["link-one", "link-two"];
  const navDropdownLinkLabels1 = t("header.nav.dropdowns")[0]["simpleLinks"];
  const navDropdownLength1 =
    navDropdownLinks1.length > navDropdownLinkLabels1.length
      ? navDropdownLinkLabels1.length
      : navDropdownLinks1.length;
  const navDropdownItems1 = Array.from(
    { length: navDropdownLength1 },
    (_, i) => {
      return (
        <Link to={navDropdownLinks1[i]} key={i}>
          {navDropdownLinkLabels1[i]}
        </Link>
      );
    }
  );

  /* second dropdown items */
  const navDropdownLinks2 = ["link-three", "link-four"];
  const navDropdownLinkLabels2 = t("header.nav.dropdowns")[1]["simpleLinks"];
  const navDropdownLength2 =
    navDropdownLinks2.length > navDropdownLinkLabels2.length
      ? navDropdownLinkLabels2.length
      : navDropdownLinks2.length;
  const navDropdownItems2 = Array.from(
    { length: navDropdownLength2 },
    (_, i) => {
      return (
        <Link to={navDropdownLinks2[i]} key={i}>
          {navDropdownLinkLabels2[i]}
        </Link>
      );
    }
  );

  /* parent links */
  const parentLinks = ["link-five"];
  const parentLinksLabels = t("header.nav.parentLinks");
  const parentLinksLength =
    parentLinks.length > parentLinksLabels.length
      ? parentLinksLabels.length
      : parentLinks.length;
  const parentLinkItems = parentLinks.map((element, i) => {
    return (
      i < parentLinksLength && (
        <Link to={element} variant="nav" key={i}>
          <span>{parentLinksLabels[i]}</span>
        </Link>
      )
    );
  });

  /* links above search button */
  const secondaryLinks = ["link-five", "link-six"];
  const secondaryLinkLabels = t("header.secondaryLinks");
  const secondaryLinksLength = secondaryLinks.length;
  const secondaryLinksItems = Array.from(
    { length: secondaryLinksLength },
    (_, i) => {
      return (
        <Link to={secondaryLinks[i]} key={i}>
          {secondaryLinkLabels[i]}
        </Link>
      );
    }
  );

  const navBarItems = [
    <React.Fragment>
      <NavDropDownButton
        onToggle={() => {
          setIsOpen2(false);
          setIsOpen1((prevOpen) => !prevOpen);
        }}
        menuId="navDropDownOne"
        isOpen={isOpen1}
        label={t("header.nav.dropdowns.0.label")}
        // isCurrent={true} // TODO: update later
      />
      <Menu
        key="one"
        items={navDropdownItems1}
        isOpen={isOpen1}
        id="navDropDownOne"
      />
    </React.Fragment>,
    <React.Fragment>
      <NavDropDownButton
        onToggle={() => {
          setIsOpen1(false);
          setIsOpen2((prevOpen) => !prevOpen);
        }}
        menuId="navDropDownTwo"
        isOpen={isOpen2}
        label={t("header.nav.dropdowns.1.label")}
        // isCurrent={true} // TODO: update later
      />
      <Menu
        key="two"
        items={navDropdownItems2}
        isOpen={isOpen2}
        id="navDropDownTwo"
      />
    </React.Fragment>,
  ].concat(parentLinkItems);

  return (
    <HeaderUSWDS extended={true}>
      {/* <Router> */}
      <SkipNavLink />
      <GovBanner
        language={govBannerLang[i18n.language]}
        translate="yes"
        role="banner"
      />
      <LanguageSwitcher slug={slug} />
      <div className="usa-navbar">
        <Title>{t("title")}</Title>
        <NavMenuButton onClick={onClick} label="Menu" />
      </div>
      <ExtendedNav
        primaryItems={navBarItems}
        secondaryItems={secondaryLinksItems}
        mobileExpanded={expanded}
        onToggleMobileNav={onClick}
        role="navigation"
      >
        <Search
          id="search"
          className="header__search"
          onSubmit={() => {}}
          size="small"
        />
      </ExtendedNav>
      <SkipNavContent />
      {/* </Router> */}
    </HeaderUSWDS>
  );
}

export default Header;
