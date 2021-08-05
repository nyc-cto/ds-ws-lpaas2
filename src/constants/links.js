export const headerLinks = {
  navDropDownLinks: [
    ['link-one', 'link-two'],
    ['link-three', 'link-four'],
  ],
  parentLinks: ['link-five'],
};

export const footerLinks = {
  primary: headerLinks.navDropDownLinks.flat().concat(headerLinks.parentLinks),
  secondary: {
    terms: 'terms',
    privacy: 'privacy',
  },
};
