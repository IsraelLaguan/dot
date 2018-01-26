import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import dot from './dot';

const rootReducer = combineReducers({
  router,
  dot,
});

export default rootReducer;
