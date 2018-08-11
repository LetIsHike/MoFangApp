import {
  createAction,
} from 'redux-actions';
import {
  CHANGE_THEME,
  CHANGE_LANGUAGE,
} from '../constants/action';

export const ChangeTheme = createAction(CHANGE_THEME);
export const ChangeLanguage = createAction(CHANGE_LANGUAGE);
