export const header = {
  navDropDowns: [
    // dropdowns
    // first dropdown start
    [
      {
        LABEL: 'navigation.dropdowns.0.linkLabels.0',
        LINK: 'link-one',
      },
      {
        LABEL: 'navigation.dropdowns.0.linkLabels.1',
        LINK: 'link-two',
      },
    ],
    // first dropdown end
    // second dropdown start
    [
      {
        LABEL: 'navigation.dropdowns.1.linkLabels.0',
        LINK: 'link-three',
      },
      {
        LABEL: 'navigation.dropdowns.1.linkLabels.1',
        LINK: 'link-four',
      },
    ],
    // second dropdown end
  ],
  parentLinks: [
    { LABEL: 'navigation.parentLinkLabels.0', LINK: 'home' },
    { LABEL: 'navigation.parentLinkLabels.1', LINK: 'documentation' },
  ], // parent (standalone) links
};

export const footer = {
  primary: header.navDropDowns
    .flat() // turn nested array into flat/unnested array
    .concat(header.parentLinks), // add parent links (taken directly from header; don't make change here)
  secondary: {
    TERMS: 'https://www1.nyc.gov/home/terms-of-use.page',
    PRIVACY: 'https://www1.nyc.gov/home/privacy-policy.page',
  },
};

export const landing = {
  HERO_BUTTON_LINK: 'https://github.com/nyc-cto/LPaaS2/',
  SECTION_BUTTON_LINK: 'https://www1.nyc.gov/assets/cto/#/contact',
};

export const page404 = {
  HOME: '/',
  CONTACT: 'https://www1.nyc.gov/assets/cto/#/contact',
};
