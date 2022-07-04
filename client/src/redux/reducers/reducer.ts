import {userReducer} from "./userReducer";
import {projectReducer} from "./projectReducer";
import {combineReducers} from "@reduxjs/toolkit";

const reducers = {
    user: userReducer,
    project: projectReducer
}

export const rootReducer = combineReducers({
    ...reducers
});