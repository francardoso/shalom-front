import {createStore, combineReducers} from 'redux';

import loginReducer from './reducers/login';

const reducer = combineReducers({
    loginReducer
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;