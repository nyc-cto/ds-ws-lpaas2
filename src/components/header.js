import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  ExtendedNav,
  GovBanner,
  Header as HeaderUSWDS,
  Link,
  Menu,
  NavDropDownButton,
  NavMenuButton,
  Search,
  Title,
} from "@trussworks/react-uswds"; // TODO: read through documentation of each component to see if used correctly
import { withTranslation } from "react-i18next";

const Header = ({ t, i18n }) => {
  const govBannerLang = {
    /* TODO: might want to keep in a separate file */
    en: "english",
    es: "spanish",
  };

  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);
  const [isOpen1, setIsOpen1] = useState([false]);
  const [isOpen2, setIsOpen2] = useState([false]);

  const testMenuItemsOne = [
    <Link href="#linkOne" key="one">
      Simple link one
    </Link>,
    <Link href="#linkTwo" key="two">
      Simple link two
    </Link>
  ]; // TODO: href or to?

  const testMenuItemsTwo = [
    <Link href="#linkThree" key="one">
      Simple link three
    </Link>,
    <Link href="#linkFour" key="two">
      Simple link four
    </Link>
  ];
  // TODO: href or to?

  const testMenuItemsThree = [
    <Link href="#linkFive" key="one">
      Simple link five
    </Link>,
    <Link href="#linkSix" key="two">
      Simple link six
    </Link>
  ];
  // TODO: href or to?

  const testItemsMenu = [
    <React.Fragment>
      <NavDropDownButton
        onToggle={() => {
          setIsOpen2([false]);
          setIsOpen1([!isOpen1[0]]);
        }}
        menuId="testDropDownOne"
        isOpen={isOpen1[0]}
        label="Nav Label 1"
        // isCurrent={true} // TODO: update later
      />
      <Menu
        key="one"
        items={testMenuItemsOne}
        isOpen={isOpen1[0]}
        id="testDropDownOne"
      />
    </React.Fragment>,
    <React.Fragment>
      <NavDropDownButton
        onToggle={() => {
          setIsOpen1([false]);
          setIsOpen2([!isOpen2[0]]);
        }}
        menuId="testDropDownTwo"
        isOpen={isOpen2[0]}
        label="Nav Label 2"
        // isCurrent={true} // TODO: update later
      />
      <Menu
        key="two"
        items={testMenuItemsTwo}
        isOpen={isOpen2[0]}
        id="testDropDownTwo"
      />
    </React.Fragment>,
    <a href="#two" key="two" className="usa-nav__link"> {/* TODO: doesn't like when I use NavLink instead */}
      <span>Parent link</span>
    </a>
  ];

  return (
    <React.Fragment>
      {/* <div className={`usa-overlay ${expanded ? "is-visible" : ""}`}></div> */}
      <HeaderUSWDS extended={true}>
        {/* <a class="usa-skipnav" href="#main-content">Skip to main content</a> */}
        <GovBanner
          // role="banner"
          language={govBannerLang[i18n.language]}
          translate="yes"
        />
        <LanguageSwitcher i18n={i18n} />
        <div className="usa-navbar">
          <Title>Project Title</Title>
          <NavMenuButton onClick={onClick} label="Menu" />
        </div>
        <ExtendedNav
          primaryItems={testItemsMenu}
          secondaryItems={testMenuItemsThree}
          mobileExpanded={expanded}
          onToggleMobileNav={onClick}
        >
          <Search size="small" />
          {/* <Search size="small" onSubmit={} /> */}
        </ExtendedNav>
        {/* role="navigation" */}
      </HeaderUSWDS>
    </React.Fragment>
  );
};

export default withTranslation("Header")(Header);
