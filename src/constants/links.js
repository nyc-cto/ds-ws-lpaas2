export const header = {
  navDropDowns: [
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
