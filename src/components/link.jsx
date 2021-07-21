/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Link as USWDSLink } from '@trussworks/react-uswds';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';

function Link({
  variant,
  className,
  activeClassName, // Pass only to GatsbyLink
  partiallyActive, // Pass only to GatsbyLink
  to,
  children,
  ...other
}) {
  const isInternal = /^\/(?!\/)/.test(to); // Assumes that any internal link will start with exactly one slash, and that anything else is external

  if (isInternal) {
    if (variant === 'nav') {
      // Navigation link
      return (
        <GatsbyLink
          className={classNames('usa-link', 'usa-link--nav', className)} // quoted classes are always included while className is included if it has a truthy value
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          to={to}
          {...other}
        >
          {children}
        </GatsbyLink>
      );
    }
    return (
      // Use Gatsby Link for internal links
      <GatsbyLink
        className={classNames('usa-link', className)} // usa-link is always included while className is included if it has a truthy value
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        to={to}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  // external
  return (
    <USWDSLink
      variant={
        variant !== 'nav' && 'external'
      } /* if not nav link, set it to be regular external link */
      className={classNames(
        {
          'usa-link--external usa-link--nav': variant === 'nav',
        },
        className,
      )}
      href={to}
      /* className is included if it has a truthy value */
      /* if nav link, set it to be both external and nav link */
      {...other}
    >
      {children}
    </USWDSLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  activeClassName: PropTypes.node.isRequired,
  partiallyActive: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired,
};

export default Link;
