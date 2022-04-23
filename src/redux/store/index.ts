import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers/reducer";
import {composeWithDevTools} from "redux-devtools-extension";



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export type RootState = ReturnType<typeof rootReducer>





