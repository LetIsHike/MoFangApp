import { handleActions } from 'redux-actions';
import {
  ChangeTheme,
  ChangeLanguage,
} from '../actions/config';

const initialState = {
  color: '',
  language: '',
};
export default handleActions({
  [ChangeTheme](state, action) {
    return {
      ...state,
      color: action.payload,
    };
  },
  [ChangeLanguage](state, action) {
    return {
      ...state,
      language: action.payload,
    };
  },
}, initialState);
