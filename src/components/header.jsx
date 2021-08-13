import React, { useState } from 'react';

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import {
  Button,
  ExtendedNav,
  Header as HeaderUSWDS,
  NavMenuButton,
  Title,
} from '@trussworks/react-uswds';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { Link } from '.';
import { header as links } from '../constants/links';
import { logoHeader } from '../images';
import Banner from './banner';
import NavDropDown from './nav-drop-down';

import '@reach/skip-nav/styles.css';

function Header({ languageList, slug }) {
  const { t, i18n } = useTranslation();

  /* menu expansion in mobile view */
  const [expanded, setExpanded] = useState(false);
  const handleMenuClick = () => setExpanded((prevExpanded) => !prevExpanded);

  /* dynamically store parent links */
  const { parentLinks } = links; // links + labels
  const parentLinksLength = parentLinks.length;
  const parentLinksLabels = t('navigation.parentLinkLabels'); // labels (used for verification only; labels are taken from parentLinks)
  const parentLinksLabelsLength = parentLinksLabels.length;
  if (parentLinksLength !== parentLinksLabelsLength) {
    console.error(
      'Different number of parent links in /src/constants/link.js (under header.parentLinks) and parent labels in /src/locales (under navigation.parentLinkLabels)\n',
      'Links: ',
      parentLinks,
      '\n',
      'Labels: ',
      parentLinksLabels,
      '\n',
    );
  }
  // generating links
  const parentLinkItems = parentLinks.map((linkAndLabel, _) => (
    <Link variant="nav" to={linkAndLabel.LINK} key={`parent${_}`}>
      {t(linkAndLabel.LABEL)}
    </Link>
  ));

  // change language on language selector button click
  const handleLangClick = (langKey) => {
    i18n.changeLanguage(langKey, navigate(`/${langKey}/${slug}`));
  };

  // language buttons shown in mobile navigation menu
  const languageNav = (direction) => languageList.map(
    (language) => i18n.dir(language.langKey) === direction && (
      <div className={`header__language-nav-item--${language.langKey === i18n.language ? 'active' : 'inactive'}`}>
        <Button
          onClick={() => {
            handleLangClick(language.langKey);
          }}
          type="button"
          unstyled
          key={language.langKey}
        >
          {language.lang}
        </Button>
      </div>
    ),
  );

  // language selector items
  const languageNavItems = (
    <div className="header__language-nav-container">
      <div className="header__language-nav-items--rtl">
        {languageNav('rtl')}
      </div>
      <div className="header__language-nav-items--ltr">
        {languageNav('ltr')}
      </div>
    </div>
  );

  return (
    <HeaderUSWDS extended className="header">
      <SkipNavLink />
      <Banner languageList={languageList} slug={slug}>{t('header.banner')}</Banner>
      <div className="usa-navbar">
        <div className="header-info">
          <img
            className="header-info__logo"
            src={logoHeader}
            alt={t('agency.shortformName')}
          />
          <Title className="header-info__title">{t('title')}</Title>
        </div>
        <NavMenuButton onClick={handleMenuClick} label={t('header.menuMobileNav')} />
      </div>
      <ExtendedNav
        onToggleMobileNav={handleMenuClick}
        primaryItems={NavDropDown()
          .concat(parentLinkItems)
          .concat(languageNavItems)}
        secondaryItems={[]}
        mobileExpanded={expanded}
        role="navigation"
      />
      <SkipNavContent />
    </HeaderUSWDS>
  );
}

export default Header;
