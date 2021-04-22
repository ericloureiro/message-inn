import { NativeModules, Platform } from "react-native";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en";

const getLanguageByDevice = () => {
  return Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguageByDevice() ?? "en",
  keySeparator: ":",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
