import {createStore, combineReducers} from 'redux';

import loginReducer from './reducers/login';
import itemsReducer from './reducers/items';

const reducer = combineReducers({
    loginReducer,
    itemsReducer
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;