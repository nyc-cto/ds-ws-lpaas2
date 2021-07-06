import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ["translations"],
    defaultNS: "translations",
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translations: require("../locales/en/translation.json"),
      },
      es: {
        translations: require("../locales/es/translation.json"),
      },
    },
    load: 'currentOnly',
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
