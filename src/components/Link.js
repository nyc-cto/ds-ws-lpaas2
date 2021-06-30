import React from "react";
import { Link as USWDSLink } from "@trussworks/react-uswds";
import { Link as GatsbyLink } from "gatsby";
import classNames from "classnames";

const Link = ({
  children,
  to,
  className,
  activeClassName, // Pass only to GatsbyLink
  partiallyActive, // Pass only to GatsbyLink
  variant,
  fileType, // Pass only to file downloads
  size, // Pass only to file downloads
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to); // Assumes that any internal link will start with exactly one slash, and that anything else is external
  const file = /\.[0-9a-z]+$/i.test(to); // Assumed file download link structure

  console.log(className);

  if (internal) {
    if (variant === "nav") {
      // Navigation link
      return (
        <GatsbyLink
          to={to}
          className={classNames("usa-link", "usa-link--nav", className)} // quoted classes are always included while className is included if it has a truthy value
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          {...other}
        >
          {children}
        </GatsbyLink>
      );
    } else if (file) {
      // Use for file downloads
      return (
        <USWDSLink href={to} className={className ? className : ""} {...other}>
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
        className={classNames("usa-link", className)} // usa-link is always included while className is included if it has a truthy value
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  } else {
    // external
    return (
      <USWDSLink
        href={to}
        variant={
          variant !== "nav"
            ? "external"
            : undefined /* if not nav link, set it to be regular external link */
        }
        className={classNames(
          {
            "usa-link--external usa-link--nav": variant === "nav",
          },
          className
        )} /* className is included if it has a truthy value, and if nav link, set it to be both external and nav link */
        {...other}
      >
        {children}
      </USWDSLink>
    );
  }
};

export default Link;
