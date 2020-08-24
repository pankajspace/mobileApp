import { language } from "../../language/language";
import { CHANGE_LANGUAGE, APP_LOADING } from "../actions/appActions";
import { changeLanguageHelper } from "../../helpers/appHelper";

const initialState = {
  currentLanguage: language.en,
  isAppLoading: true
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      state.currentLanguage = changeLanguageHelper(action.language);
      return state;
    case APP_LOADING:
      state.isAppLoading = action.appLoading;
      return state;
    default:
      return state;
  }
};
