import {combineReducers, createStore} from "redux";
import searchReducer from "./search-reducer";


let reducers = combineReducers({
    searchPage: searchReducer
});

let store = createStore(reducers);

window.store = store;


export default store;