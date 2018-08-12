import { handleActions } from 'redux-actions';
import {
  ChangeTheme,
  ChangeLanguage,
} from '../actions/config';

const initialState = {
  theme: {},
  language: '',
};
export default handleActions({
  [ChangeTheme](state, action) {
    return {
      ...state,
      theme: action.payload,
    };
  },
  [ChangeLanguage](state, action) {
    return {
      ...state,
      language: action.payload,
    };
  },
}, initialState);
