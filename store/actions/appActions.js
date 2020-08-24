export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const APP_LOADING = "APP_LOADING";

export const changeLanguage = (language) => {
  return { type: CHANGE_LANGUAGE, language: language };
};

export const setAppLoading = (appLoading) =>{
  return {type:APP_LOADING, appLoading:appLoading};
}
