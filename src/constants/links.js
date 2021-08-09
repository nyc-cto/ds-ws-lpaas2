export const header = {
  navDropDownLinks: [
    ['link-one', 'link-two'],
    ['link-three', 'link-four'],
  ],
  parentLinks: ['link-five'],
};

export const landing = {
  heroButtonLink: 'https://github.com/nyc-cto/LPaaS2/',
  sectionButtonLink: 'https://www1.nyc.gov/assets/cto/#/contact',
};

export const footer = {
  primary: header.navDropDownLinks.flat().concat(header.parentLinks),
  secondary: {
    terms: 'terms',
    privacy: 'privacy',
  },
};
