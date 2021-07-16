import React from 'react';
import { Link as USWDSLink } from '@trussworks/react-uswds';
import { Link as GatsbyLink } from 'gatsby';
import classNames from 'classnames';

function Link({
  children,
  to,
  className,
  activeClassName, // Pass only to GatsbyLink
  partiallyActive, // Pass only to GatsbyLink
  variant,
  ...other
}) {
  const isInternal = /^\/(?!\/)/.test(to); // Assumes that any internal link will start with exactly one slash, and that anything else is external

  if (isInternal) {
    if (variant === 'nav') {
      // Navigation link
      return (
        <GatsbyLink
          to={to}
          className={classNames('usa-link', 'usa-link--nav', className)} // quoted classes are always included while className is included if it has a truthy value
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          {...other}
        >
          {children}
        </GatsbyLink>
      );
    }
    return (
      // Use Gatsby Link for internal links
      <GatsbyLink
        to={to}
        className={classNames('usa-link', className)} // usa-link is always included while className is included if it has a truthy value
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  // external
  return (
    <USWDSLink
      href={to}
      variant={
          variant !== 'nav' && 'external'
        } /* if not nav link, set it to be regular external link */
      className={classNames(
        {
          'usa-link--external usa-link--nav': variant === 'nav',
        },
        className,
      )} /* className is included if it has a truthy value, and if nav link, set it to be both external and nav link */
      {...other}
    >
      {children}
    </USWDSLink>
  );
}

export default Link;
