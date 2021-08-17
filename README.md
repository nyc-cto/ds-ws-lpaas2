# NYC Mayor's Office of the Chief Technology Officer Landing Page as a Service 2.0

This is a proposed template repository for applications for future developments. This will help get you set up as you build your application.

```
.github
  |- CONTRIBUTING.md
  |- CODE_OF_CONDUCT.md
  |- ISSUE_TEMPLATE
  |- LICENCE.md
  |- PULL_REQUEST_TEMPLATE.md
```

## Requirements
1. Operating System: macOS Sierra (10.12) or later, Windows 10, or Linux.
1. Node.js 10.13.0 (LTS) or higher.
1. A code editor, such as Visual Studio Code. 
1. Git version control system.
1. npm package manager.
1. Gatsby command line interface (CLI). 
1. A GitHub account.
1. A Microsoft Azure account (if deploying with Azure). 

## Getting Started
1. Click the `Use this template` button.
1. Select a name for your new repository.
1. Click `Create repository from template`.
1. Click the `Code` button to clone the repository and follow instructions to clone to your local machine.
1. Navigate to the directory on your local machine.
1. Install dependencies with `npm install`.
1. Add `env.development` file to the root directory of your project. This file should follow the structure of the `/.env.template` file. Fill in your secrets.
1. Run the Gatsby development server `gatsby develop` or `npm run dev`.

## Project Structure

### Files & Folders You Should Edit
1. `.github`. If you deploy with Azure, you will generate your own `.github/workflows/azure-static-web-apps-<RANDOM_NAME>.yml` file.
1. `src/constants`. You can edit the files in this folder to update links and add additional language support. 
1. `src/images`. Edit contents in this folder to update the agency logos, background image used in the hero, or the images in the graphics section. See [Changing Images](#changing-images). 
1. `src/locales`. This folder contains folders for each language used and corresponding `translation.json` files. These translation files include the text for elements that are included in every page of the webapp, such as the header, footer, navigation bar, and language selector module. 
1. `src/markdown-pages`. This folder contains folders that correspond to each template page. Within each of those folders (ex. `documentation` or `landing`) there are markdown files that include the content of the specific template page, and each markdown file represents a different language. These are the files you will change to customize the text in the body of each page to fit your specific project and to provide translations of the content.
1. `src/styles/_custom-theme.scss`. You can edit this file to customize the theme of the webapp, including changing the color scheme and font. See [Customizing the Theme](#customizing-the-theme). 
`README.md`. You can update this file to provide additional information about your project.

### Files & Folders You Should Not Need to Edit
1. `/public`. This folder is automatically generated by Gatsby.
1. `src/components`. 
1. `src/pages`.
1. `src/styles/`. Do not edit any files except for `src/styles/_custom-theme.scss`. 
1. `src/templates`. Do not edit existing templates. 
1. `.eslintrc`.
1. `.gitignore`.
1. `gatsby-browser.js`,  `gatsby-config.js`, or `gatsby-node.js`. 
1. `LICENSE.md`.
1. `package-lock.json` or `package.json`.

## Styling

### Customizing the Theme
To update the theme, you only need to edit `src/styles/_custom-theme.scss`. In this file, edit the values assigned to variables that begin with `$custom-`.

If you feel the need to customize the theme even further, you can use the variables from USWDS that begin with `$theme-` in `src/styles/_custom-theme.scss`. You can read more about USWDS theme variables [here](https://designsystem.digital.gov/documentation/settings/). 

### Changing Images

#### Hero Background Image
1. The hero background image is set in `src/styles/_custom-theme.scss`, as follows `$custom-hero-image: '../images/hero.png'`. 
1. To update the hero background image either replace `src/images/hero.png` with a file of the same name and extension  or add a new image file and update the file path name assigned to the variable `$custom-hero-image`. 

#### Logos
1. Replace the files in `src/images/logos`. 
1. If you replace the images with files of the same names and extensions then no other changes are needed. Replacing the logo image files with files of the same names and extensions is recommended. 
1. If you replace the images with files of different names or extensions, you will need to edit the exports in `src/images/index.js`. In this case, only change the path name, not the variable name of the exported image. 

#### Graphics Section Images
1. Replace the files in `src/images/graphics`. 
1. If you replace the images with files of the same names and extensions then no other changes are needed. Replacing the graphics image files with files of the same names and extensions is recommended. 
1. If you replace the images with files of different names or extensions, you will need to edit the imports in `src/images/index.js`. In this case, only change the path name, not the variable name. 

## Content

### Editing Content
The content that is unique to a specific page  (ex. `documentation` or `landing`) is stored in markdown files (`src/markdown-pages/documentation` or `src/markdown-pages/landing`). 

1. If the content is in the front matter of the markdown file (if it is in between the three dashes `---`) only edit the text after the colon. The front matter follows YAML syntax. For instance, you can edit the text “Everything up to this point…”, but you should not edit `section:`, `heading`, or `text`. Also, do not edit the indents already in the front matter. 
  ```yaml
  section:
  heading: Section heading
  text: Everything up to this point should help people understand your agency or project who you are, your goal or mission, and how you approach it.
  ```
1. If the content is below the three dashes, it uses [markdown syntax](https://www.markdownguide.org/basic-syntax/). 

## Language Access & Internationalization
The `src/locales` folder contains folders for each language used, which are named according to their [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Each of the language folders has a `translation.json` file, which contains the text for elements that are included in every page of the webapp, such as the header, footer, navigation bar, and language selector module. 

The LPAAS 2.0 template already contains placeholder translation and markdown files for the 10 designated citywide languages under [Local Law 30](https://www1.nyc.gov/site/immigrants/about/language-and-disability-access.page). 

### Adding a Language
1. To add a new language, create a new folder in `src/locales` . The name of this folder should be the language code.
1. Within the new folder, create a `translation.json` file. 
1. Copy and paste the JSON object from another translation file and replace all of the string values in the key-value pairs with the corresponding translations. Do not change any of the keys. In the following example, you can translate “Project Title”, but should not edit “title”.
  ```json
  {"title": "Project Title"}
  ```
1. In `src/i18n-config.js`, add the new language to resources. See the example below:
  ```javascript
  resources: {
   ar: {
     translations: require('./locales/ar/translation.json'),
   },
   bn: {
     translations: require('./locales/bn/translation.json'),
   },
  //other language resources not shown for brevity 
  ```
1. If the language you are adding is not one of the designated citywide languages under Local Law 30 and is not already included in `src/constants/languages.js`, add the language name and [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) as key value pairs of an object in the languages array, as follows:
  ```javascript
  {
   lang: 'English',
   langKey: 'en',
  }
  ```
1. In `src/markdown-pages`, create a new markdown file for each template in your new language. For instance, if you were adding pages in Spanish, you would need to create a new file in each folder (`404`, `documentation`, `landing`, and any additional folders). We recommend that each of the new files should be named the same thing as the folder, followed by a dash, and language code: `src/markdown-pages/landing/landing-es.md` and `src/markdown-pages/documentation/documentation-es.md` 

### Removing a Language
1. To delete a language, delete the corresponding folder in `src/locales` and its contents. 
1. In `src/i18n-config.js`, delete the language from the `resources` object.
1. In `src/markdown-pages`, delete the corresponding markdown file from each folder. 

## Links & Navigation
1. Navigation links are stored in `src/constants/links`, while navigation labels are stored in the translation files in `src/locales`. The links in the navigation in the header are also shown in the footer for accessibility. 

### Editing Navigation Links
1. To edit the link itself, simply change the desired path in `src/constants/links`. 
1. To edit the label of the link, update the text in all of the translation files in `src/locales`. 

### Adding Navigation Links 
1. Navigation links and labels are stored as key-value pairs. The label values are pulled from the translation files. Add the label using object property syntax and the link to `src/constants/links.js`. Internal links should not begin with a forward slash `/`. In the header, links can either be in navigation dropdown menus or standalone links (parent links). In the example below, the first array in `navDropDowns` will be included in one dropdown menu and the second array will be in another. 
  ```javascript
  export const header = {
  navDropDowns: [ // dropdowns
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
  parentLinks: [{ LABEL: 'navigation.parentLinkLabels.0', LINK: 'link-five' }] // parent (standalone) links
  };
  ```
  We suggest not having more than three links per dropdown menu and not having more than eight links in the dropdown menus and standalone links combined.
1. Add the label for the link in each translation file in `src/locales`, corresponding to the label location in the previous step. 

### Deleting Navigation Links 
1. Delete the object associated with the link in `src/constants/links`. 
1. Delete the label in each translation file in `src/locales`. Be sure to complete this step, otherwise labels and links could be mismatched.

### Editing Navigation Dropdown Menu
1. To edit the label of the dropdown menu, update the text of `buttonLabel` in `navigation.dropdowns` in all of the translation files in `src/locales`. 
1. To edit the links and associated labels for the links in a dropdown menu, see [Editing Navigation Links](#editing-navigation-links), [Adding Navigation Links](#adding-navigation-links), or [Deleting Navigation Links](#deleting-navigation-links).

### Adding Navigation Dropdown Menu
1. Add a subarray to the header.navDropDowns array in `src/constants/links.js`. The elements of the subarray are objects with label and link keys. See the example below:
  ```javascript 
  [ 
  { 
    label: 'navigation.dropdowns.2.linkLabels.0', 
    link: '/link-one', 
  }, 
  { 
    label: 'navigation.dropdowns.2.linkLabels.1', 
    link: '/link-two', 
  }, 
  ]
  ```
1. Each label will correspond to a `linkLabel` in the `translation.json` files.
1. Add the corresponding link labels in the `translation.json` files in `src/locales`.  In the translation files, each object in the `navigation.dropdowns` array corresponds to a dropdown  menu. The `buttonLabel` is the label of the dropdown button. The `linkLabels` array contains the labels of all of the links listed in the dropdown menu. See the example below:
  ```json
  "navigation": { 
  "dropdowns": [ 
  { 
    "buttonLabel": "Nav Label 1",
    "linkLabels": ["Simple link one", "Simple link two"] 
   },
  // the rest of the array is not shown for brevity
  ```
### Deleting Navigation Dropdown Menu
1. Delete the desired subarray to the `header.navDropDowns` array in `src/constants/links.js`. 
1. Delete the desired element in the `navigation.dropdowns` array in every `translation.json` file.

### Editing Button Links
1. Button links are stored in `src/constants/links.js` and can be updated there.
1. Button labels are stored in translation files if the buttons occur on every page and are stored in markdown files if the buttons are specific to a singular page. 

## Deployment

### Deploying with Microsoft Azure Static Web Apps
1. To [deploy your site using Azure](https://docs.microsoft.com/en-us/azure/static-web-apps/publish-gatsby#deploy-your-web-app), sign in to the Azure Portal. 
1. Select Create a Resource.
1. Search for and then select Static Web Apps.
1. Click Create. 
1. Fill out the fields in the Basics tab. For source, enter GitHub.
1. Choose Sign in with GitHub.
1. When entering the GitHub values, select `main` for branch.
1. In the Build Details section, choose Gatsby in the Build Presets dropdown menu. Do not change the default values. 
1. Select Review + Create. Once you have reviewed all of the information, click Create. 
1. When the deployment has finished, select Go to resource and then click the link to view the deployed app. 

### Editing Configuration
1. In order to [set environmental variables](https://docs.microsoft.com/en-us/azure/static-web-apps/application-settings), select Configuration in the sidebar of Azure Portal.
1. Select `main` as the environment. 
1. Click Add new application setting, then enter a Name and Value for the environmental variables. This is where you set the values for `GATSBY_ENDPOINT` and `GATSBY_TITLE`.
1. Now click OK, then Save. 

### Editing GitHub Actions Workflow
To edit your site's GitHub Actions build workflow in `.github/workflows`, follow this [tutorial](https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow).

### Creating a Custom DNS Record
To create a custom DNS, visit the following [tutorial](https://docs.microsoft.com/en-us/azure/dns/dns-web-sites-custom-domain).

## Troubleshooting
If `node_modules` was not installed properly, you might have to run `​​npm install --legacy-peer-deps`. 
