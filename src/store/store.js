import { createStore, combineReducers, applyMiddleware } from 'redux';
import { themeReducer } from './reducer'
const store = createStore(themeReducer)
export default store;