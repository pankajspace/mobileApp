import { language } from "../language/language";

export const changeLanguageHelper = (selectedLanguage) => {
  return selectedLanguage == "en" ? language.mr : language.en;
};
