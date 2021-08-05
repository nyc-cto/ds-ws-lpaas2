export const header = {
  navDropDownLinks: [
    ['link-one', 'link-two'],
    ['link-three', 'link-four'],
  ],
  parentLinks: ['link-five'],
};

export const footer = {
  primary: header.navDropDownLinks.flat().concat(header.parentLinks),
  secondary: {
    terms: 'terms',
    privacy: 'privacy',
  },
};
