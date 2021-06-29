import React from "react";
import { Link as USWDSLink } from "@trussworks/react-uswds";
import { Link as GatsbyLink } from "gatsby";

// Pass only activeClassName and partiallyActive to GatsbyLink
// Pass only fileType and size to file downloads
const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  variant,
  fileType,
  size,
  ...other
}) => {
  // Assumes that any internal link will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Assumed file download link structure
  const file = /\.[0-9a-z]+$/i.test(to);

  if (internal) {
    if (variant === "nav") {
      // Navigation link
      return (
        <GatsbyLink
          to={to}
          className="usa-link usa-link--nav"
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          {...other}
        >
          {children}
        </GatsbyLink>
      );
    }
    if (file) {
      // Use for file downloads
      return (
        <USWDSLink href={to} {...other}>
          {/* TODO: Download attribute available but not sure what it does or is for */}
          {/* TODO: Should file download links be wrapped with Gatsby as well? Not sure if there's preprocessing there. */}
          {children}
          {/* Show file type and size for links to non-HTML content */}
          {`[${fileType.toUpperCase()}, ${size}]`}
        </USWDSLink>
      );
    }
    return (
      // Use Gatsby Link for internal links
      <GatsbyLink
        to={to}
        className="usa-link" // TODO: would this technically be considered hard-coding? What if USWDS decides to change the class name to something else?
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  // external
  else {
    return (
      <USWDSLink
        href={to}
        variant={variant !== "nav" && "external" /* if not nav link, set it to be regular external link */} 
        className={variant === "nav" && "usa-link usa-link--external usa-link--nav" /* if nav link, set it to be both external and link */}
        {...other}
      >
        {children}
      </USWDSLink>
    );
  }
};

export default Link;
