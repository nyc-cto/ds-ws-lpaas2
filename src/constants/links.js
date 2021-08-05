export const headerLinks = {
  navDropDownSimpleLinks: [
    ['link-one', 'link-two'],
    ['link-three', 'link-four'],
  ],
  parent: ['link-five'],
};

export const footerLinks = {
  primary: headerLinks.navDropDownSimpleLinks.flat().concat(headerLinks.parent),
  secondary: {
    terms: 'terms',
    privacy: 'privacy',
  },
};
