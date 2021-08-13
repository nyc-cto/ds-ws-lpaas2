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
    // internal link
    return (
      <GatsbyLink
        className={
          variant === 'nav'
            ? classNames('usa-link', 'usa-link--nav', className) // nav link
            : classNames('usa-link', className) // regular link
        } // quoted classes are always included while className is included if it has a truthy value
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        to={to}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  // external link
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
