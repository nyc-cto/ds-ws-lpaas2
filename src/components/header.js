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

import { header as links } from "../constants/links";

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

  /* dynamically creating dropdowns in navigation bar */
  let dropdowns = [];
  const dropdownLinks = links.navDropdowns;
  const constFileLength = dropdownLinks.length;
  const dropdownLabels = t("header.nav.dropdowns");
  const translationFileLength = dropdownLabels.length;
  const length =
    translationFileLength > constFileLength
      ? constFileLength
      : translationFileLength; // take shorter length in case there is missing dropdowns in `../constants/links.js` (constants file) or `../locales/` (translation files)
  if (translationFileLength !== constFileLength)
    console.warn(
      "Different number of dropdowns in /src/constants/link.js and dropdown labels in /src/locales\n",
      `${constFileLength} dropdown${
        constFileLength > 1 ? "s" : ""
      } in /src/constants/link.js\n`,
      `${translationFileLength} dropdown${
        translationFileLength > 1 ? "s" : ""
      } in /src/locales`
    );
  dropdownLinks.map((_, i) => {
    if (i < length) {
      const navDropdownLinks = dropdownLinks[i];
      const navDropdownLinksLength = navDropdownLinks.length;
      const navDropdownLinkLabels = t("header.nav.dropdowns")[i]["simpleLinks"];
      const navDropdownLinkLabelsLength = navDropdownLinkLabels.length;
      const navDropdownLength =
        navDropdownLinksLength > navDropdownLinkLabelsLength
          ? navDropdownLinkLabelsLength
          : navDropdownLinksLength; // take shorter length in case there is a missing link in `../constants/links.js` (constants file) or label in  `../locales/` (translation files)
      if (navDropdownLinksLength !== navDropdownLinkLabelsLength)
        console.warn(
          `Different number of links in /src/constants/link.js and link labels in /src/locales for dropdown ${
            i + 1
          }\n`,
          "Links: ",
          navDropdownLinks,
          "\n",
          "Link labels: ",
          navDropdownLinkLabels,
          "\n"
        );
      dropdowns.push(
        navDropdownLinks.map((element, i) => {
          return (
            i < navDropdownLength && (
              <Link to={element} key={i}>
                {navDropdownLinkLabels[i]}
              </Link>
            )
          );
        })
      );
    } else dropdowns.push([]);
  });

  /* dynamically creating parent links */
  const parentLinks = links.parent;
  const parentLinksLength = parentLinks.length;
  const parentLinksLabels = t("header.nav.parentLinks");
  const parentLinksLabelsLength = parentLinksLabels.length;
  const parentLength =
    parentLinksLength > parentLinksLabelsLength
      ? parentLinksLabelsLength
      : parentLinksLength; // take shorter length in case there is a missing link in parentLinks or missing label in translation file
  if (parentLinksLength !== parentLinksLabelsLength)
    console.warn(
      "Different number of parent links in /src/constants/link.js and parent labels in /src/locales\n",
      "Links: ",
      parentLinks,
      "\n",
      "Labels: ",
      parentLinksLabels,
      "\n"
    );
  const parentLinkItems = parentLinks.map((element, i) => {
    return (
      i < parentLength && (
        <Link to={element} variant="nav" key={i}>
          <span>{parentLinksLabels[i]}</span>
        </Link>
      )
    );
  });

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
        items={dropdowns[0]}
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
        items={dropdowns[1]}
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
        secondaryItems={[]}
        mobileExpanded={expanded}
        onToggleMobileNav={onClick}
        role="navigation"
      >
        {/* <Search
          id="search"
          className="header__search"
          onSubmit={() => {}}
          size="small"
        /> */}
      </ExtendedNav>
      <SkipNavContent />
      {/* </Router> */}
    </HeaderUSWDS>
  );
}

export default Header;
