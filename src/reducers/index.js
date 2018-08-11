import { combineReducers } from 'redux';
import {
  TEST,
} from '../constants/action';
import routes from './routes';
import config from './config';

export function test(state, action) {
  switch (action.type) {
    case TEST:
      return { ...state, test: 1 };
    default:
      return { ...state, test: 0 };
  }
}

export default combineReducers({
  test,
  routes,
  config,
});
