export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeLanguage = (language) => {
  return { type: CHANGE_LANGUAGE, language: language };
};
