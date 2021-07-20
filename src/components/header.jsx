import React, { useState } from 'react';

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import {
  ExtendedNav,
  Header as HeaderUSWDS,
  NavMenuButton,
  Title,
} from '@trussworks/react-uswds';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Banner, Link, NavDropDown } from '.';
import { header as links } from '../constants/links';
import ctoLogoShortform from '../images/logos/cto_logo_shortform_dark.png';

import '@reach/skip-nav/styles.css';

function Header({ slug }) {
  const { t } = useTranslation();

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
    <Link to={element} variant="nav" key={element}>
      {parentLinksLabels[i]}
    </Link>
    ),
  );

  return (
    <HeaderUSWDS extended>
      {/* <Router> */}
      <SkipNavLink />
      <Banner slug={slug}>{t('header.banner')}</Banner>
      <div className="usa-navbar">
        <div className="header__logo-title">
          <img className="header__logo" src={ctoLogoShortform} alt="NYC CTO" />
          <Title>{t('title')}</Title>
        </div>
        <NavMenuButton onClick={onClick} label="Menu" />
      </div>
      <ExtendedNav
        primaryItems={NavDropDown().concat(parentLinkItems)}
        secondaryItems={[]}
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
