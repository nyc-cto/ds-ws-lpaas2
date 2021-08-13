/* eslint-disable global-require */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: activeEnv === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for React
    },
    ns: ['translations'],
    defaultNS: 'translations',
    react: {
      useSuspense: false,
    },
    resources: {
      ar: {
        translations: require('./locales/ar/translation.json'),
      },
      bn: {
        translations: require('./locales/bn/translation.json'),
      },
      en: {
        translations: require('./locales/en/translation.json'),
      },
      es: {
        translations: require('./locales/es/translation.json'),
      },
      fr: {
        translations: require('./locales/fr/translation.json'),
      },
      ht: {
        translations: require('./locales/ht/translation.json'),
      },
      ko: {
        translations: require('./locales/ko/translation.json'),
      },
      pl: {
        translations: require('./locales/pl/translation.json'),
      },
      ru: {
        translations: require('./locales/ru/translation.json'),
      },
      ur: {
        translations: require('./locales/ur/translation.json'),
      },
      yi: {
        translations: require('./locales/yi/translation.json'),
      },
      zh_HANS: {
        translations: require('./locales/zh_HANS/translation.json'),
      },
      zh_HANT: {
        translations: require('./locales/zh_HANT/translation.json'),
      },
    },
    returnObjects: true,
  });

export default i18n;
