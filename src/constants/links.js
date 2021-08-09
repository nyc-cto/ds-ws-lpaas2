export const header = {
  navDropDowns: [
    // first dropdown start
    [
      {
        label: 'navigation.dropdowns.0.linkLabels.0',
        link: 'link-one',
      },
      {
        label: 'navigation.dropdowns.0.linkLabels.1',
        link: 'link-two',
      },
    ],
    // first dropdown end
    // second dropdown start
    [
      {
        label: 'navigation.dropdowns.1.linkLabels.0',
        link: 'link-three',
      },
      {
        label: 'navigation.dropdowns.1.linkLabels.1',
        link: 'link-four',
      },
    ],
    // second dropdown end
  ],
  parentLinks: [{ label: 'navigation.parentLinkLabels.0', link: 'link-five' }],
};

export const footer = {
  primary: header.navDropDowns
    .flat() // turn nested array into flat/unnested array
    .concat(header.parentLinks), // add parent links
  secondary: {
    terms: 'terms',
    privacy: 'privacy',
  },
};
