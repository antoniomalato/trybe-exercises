import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ listReducer });

// const store = createStore(rootReducer);
const store = createStore(rootReducer, composeWithDevTools(combineReducers(listReducer))
)

export default store;