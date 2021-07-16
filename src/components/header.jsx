import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedNav,
  Header as HeaderUSWDS,
  Menu,
  NavDropDownButton,
  NavMenuButton,
  Title,
} from '@trussworks/react-uswds';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import { useTranslation } from 'react-i18next';
import { Link } from '.';
import Banner from './banner';
import ctoLogoShortform from '../images/logos/cto_logo_shortform_dark.png';
import '@reach/skip-nav/styles.css';

function Header({ slug }) {
  const { t } = useTranslation();

  /* menu expansion */
  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prevExpanded) => !prevExpanded);

  /* nav dropdown expansions */
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  /* first dropdown items */
  const testMenuItemsOne = [
    <Link to="/link-one" key="one">
      {t('nav.dropdownOne.simpleLinkOne')}
    </Link>,
    <Link to="/link-two" key="two">
      {t('nav.dropdownOne.simpleLinkTwo')}
    </Link>,
  ];

  /* second dropdown items */
  const testMenuItemsTwo = [
    <Link to="/link-three" key="one">
      {t('nav.dropdownTwo.simpleLinkThree')}
    </Link>,
    <Link to="/link-four" key="two">
      {t('nav.dropdownTwo.simpleLinkFour')}
    </Link>,
  ];

  /* links above search button */
  const secondaryLinks = [];

  const navBarItems = [
    <>
      <NavDropDownButton
        onToggle={() => {
          /* TODO: should it extend on ENTER or BUTTON_DOWN? */
          setIsOpen2(false);
          setIsOpen1((prevOpen) => !prevOpen);
        }}
        menuId="testDropDownOne"
        isOpen={isOpen1}
        label={t('nav.dropdownOne.label')}
        // isCurrent={true} // TODO: update later
      />
      <Menu
        key="one"
        items={testMenuItemsOne}
        isOpen={isOpen1}
        id="testDropDownOne"
      />
    </>,
    <>
      <NavDropDownButton
        onToggle={() => {
          /* TODO: should it extend on ENTER or BUTTON_DOWN? */
          setIsOpen1(false);
          setIsOpen2((prevOpen) => !prevOpen);
        }}
        menuId="testDropDownTwo"
        isOpen={isOpen2}
        label={t('nav.dropdownTwo.label')}
        // isCurrent={true} // TODO: update later
      />
      <Menu
        key="two"
        items={testMenuItemsTwo}
        isOpen={isOpen2}
        id="testDropDownTwo"
      />
    </>,
    <Link variant="nav" to="/three" key="three">
      <span>{t('nav.parentOne')}</span>
    </Link>,
  ];

  return (
    <HeaderUSWDS extended>
      {/* <Router> */}
      <SkipNavLink />
      <Banner slug={slug}>{t('banner')}</Banner>
      <div className="usa-navbar">
        <div className="header__logo-title">
          <img className="header__logo" src={ctoLogoShortform} alt="NYC CTO" />
          <Title>{t('title')}</Title>
        </div>
        <NavMenuButton onClick={onClick} label="Menu" />
      </div>
      <ExtendedNav
        primaryItems={navBarItems}
        secondaryItems={secondaryLinks}
        mobileExpanded={expanded}
        onToggleMobileNav={onClick}
        role="navigation"
      />
      <SkipNavContent />
    </HeaderUSWDS>
  );
}

Header.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Header;
