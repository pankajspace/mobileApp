import { language } from "../../language/language";
import { CHANGE_LANGUAGE } from "../actions/appActions";
import { changeLanguageHelper } from "../../helpers/appHelper";

const initialState = {
  currentLanguage: language.en,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      state.currentLanguage = changeLanguageHelper(action.language);
      return state;
    default:
      return state;
  }
};
