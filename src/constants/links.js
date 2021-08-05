export const header = {
  navDropDownLinks: [ // dropdowns
    ['link-one', 'link-two'], // first dropdown
    ['link-three', 'link-four'], // second dropdown
  ],
  parentLinks: ['link-five'], // parent (standalone) links
};

export const footer = {
  primary: header.navDropDownLinks.flat().concat(header.parentLinks), // taken directly from header (don't make change here)
  secondary: {
    terms: 'terms',
    privacy: 'privacy',
  },
};
