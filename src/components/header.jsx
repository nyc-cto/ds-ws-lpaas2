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
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Link } from '.';
import { languages } from '../constants/languages';
import { headerLinks as links } from '../constants/links';
import { logoHeader } from '../images';
import Banner from './banner';
import NavDropDown from './nav-drop-down';

import '@reach/skip-nav/styles.css';

function Header({ slug }) {
  const { t, i18n } = useTranslation();

  /* menu expansion in mobile view */
  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prevExpanded) => !prevExpanded);

  /* dynamically store parent links */
  const parentLinks = links.parent;
  const parentLinksLength = parentLinks.length;
  const parentLinksLabels = t('header.nav.parentLinks');
  const parentLinksLabelsLength = parentLinksLabels.length;
  const parentLength = parentLinksLength > parentLinksLabelsLength
    ? parentLinksLabelsLength
    : parentLinksLength;
  // take shorter length if is missing link in parentLinks or missing label in translation file
  if (parentLinksLength !== parentLinksLabelsLength) {
    console.error(
      'Different number of parent links in /src/constants/link.js and parent labels in /src/locales\n',
      'Links: ',
      parentLinks,
      '\n',
      'Labels: ',
      parentLinksLabels,
      '\n',
    );
  }
  const parentLinkItems = parentLinks.map(
    (element, i) => i < parentLength && (
    <Link variant="nav" to={element} key={element}>
      {parentLinksLabels[i]}
    </Link>
    ),
  );

  const handleClick = (langKey) => {
    i18n.changeLanguage(langKey, navigate(`/${langKey}/${slug}`));
  };

  const languageNav = (direction) => languages.map(
    (language) => i18n.dir(language.langKey) === direction && (
      <div className="header__language-nav-items">
        <Button
          onClick={() => {
            handleClick(language.langKey);
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

  const languageNavItems = (
    <div className="header__language-nav-container">
      <div className="header__language-nav-rtl">{languageNav('rtl')}</div>
      <div className="header__language-nav-ltr">{languageNav('ltr')}</div>
    </div>
  );

  return (
    <HeaderUSWDS extended>
      {/* <Router> */}
      <SkipNavLink />
      <Banner slug={slug}>{t('header.banner')}</Banner>
      <div className="usa-navbar">
        <div className="header__logo-title">
          <img
            className="header__logo"
            src={logoHeader}
            alt={t('agency.shortformName')}
          />
          <Title className="header__title">{t('title')}</Title>
        </div>
        <NavMenuButton onClick={onClick} label={t('header.nav.menu')} />
      </div>
      <ExtendedNav
        onToggleMobileNav={onClick}
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

Header.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Header;
