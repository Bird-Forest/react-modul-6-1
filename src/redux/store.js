import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { postDetailsReducer } from './postDetailsRedux';

export const rootReducer = combineReducers({
  postDetails: postDetailsReducer,
});
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
