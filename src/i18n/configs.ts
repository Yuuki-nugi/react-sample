import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import translation_en from "./en.json";
import translation_ja from "./ja.json";

const resources = {
    ja: {
      translation: translation_ja
    },
    en: {
      translation: translation_en
    }
  };

  i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'ja',
        resources
    });

  export default i18n;