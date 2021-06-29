import { Link as USWDSLink} from "@trussworks/react-uswds"; // TODO: use Link and NavLink from Gatsby and USWDS instead
import { Link as GatsbyLink } from "gatsby";

// Pass only activeClassName and partiallyActive to GatsbyLink
// Pass only fileType and size to file downloads
const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  fileType,
  size,
  ...other
}) => {
  // Assumes that any internal link will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // For file downloads
  const file = /\.[0-9a-z]+$/i.test(to);

  if (internal) {
    if (file) {
      return (
        // Use for file downloads
        <USWDSLink to={to} {...other}>
          {children}
          {/* Show file type and size for links to non-HTML content */}
          {`[${fileType.toUpperCase()}, ${size}]`}{" "}
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
  return (
    // Use USWDS Link for others
    <USWDSLink to={to} {...other}>
      {children}
      {"(external link)"}
    </USWDSLink>
  );
};

export default Link;
