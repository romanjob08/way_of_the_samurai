import {combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import navbar_reducer from "./navbar_reducer";

let reducers = combineReducers({
    profilePage: profile_reducer,
    massagesPage: dialogs_reducer,
    navbar: navbar_reducer
})

let store = createStore(reducers);

export default store;