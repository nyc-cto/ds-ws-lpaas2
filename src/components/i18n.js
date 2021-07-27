/* eslint-disable global-require */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    defaultNS: 'translations',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // TODO: is this necessary?
    },
    // load: "languageOnly",
    ns: ['translations'],
    react: {
      useSuspense: false,
    },
    resources: {
      ar: {
        translations: require('../locales/ar/translation.json'),
      },
      bn: {
        translations: require('../locales/bn/translation.json'),
      },
      en: {
        translations: require('../locales/en/translation.json'),
      },
      es: {
        translations: require('../locales/es/translation.json'),
      },
      fr: {
        translations: require('../locales/fr/translation.json'),
      },
      ht: {
        translations: require('../locales/ht/translation.json'),
      },
      ko: {
        translations: require('../locales/ko/translation.json'),
      },
      pl: {
        translations: require('../locales/pl/translation.json'),
      },
      ru: {
        translations: require('../locales/ru/translation.json'),
      },
      ur: {
        translations: require('../locales/ur/translation.json'),
      },
      yi: {
        translations: require('../locales/yi/translation.json'),
      },
      zh_HANS: {
        translations: require('../locales/zh_HANS/translation.json'),
      },
      zh_HANT: {
        translations: require('../locales/zh_HANT/translation.json'),
      },
    },
    returnObjects: true,
  });

export default i18n;
