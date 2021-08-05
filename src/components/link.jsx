import React from 'react';

import { Link as USWDSLink } from '@trussworks/react-uswds';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';

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
      variant={variant === 'nav' && 'nav'}
      className={className}
      href={to}
      {...other}
    >
      {children}
    </USWDSLink>
  );
}

export default Link;
