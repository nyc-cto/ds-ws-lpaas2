export const headerLinks = {
  navDropDowns: [
    ['link-one', 'link-two'],
    ['link-three', 'link-four'],
  ],
  parent: ['link-five'],
};

export const footerLinks = {
  primary: headerLinks.navDropDowns.flat().concat(headerLinks.parent),
  secondary: {
    terms: 'terms',
    privacy: 'privacy',
  },
};
