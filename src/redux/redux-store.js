import {applyMiddleware, combineReducers, createStore} from "redux";
import searchReducer from "./search-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    searchPage: searchReducer,
    authPage: authReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;


export default store;