export const headerLinks = {
  navDropDownLinks: [
    ['link-one', 'link-two'],
    ['link-three', 'link-four'],
  ],
  parent: ['link-five'],
};

export const footerLinks = {
  primary: headerLinks.navDropDownLinks.flat().concat(headerLinks.parent),
  secondary: {
    terms: 'terms',
    privacy: 'privacy',
  },
};
