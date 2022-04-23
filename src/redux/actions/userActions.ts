import {UserAction, UserActionTypes} from "../../types/user";



// trying to use it with dispatch
export const setLoggedUser = (userData: object): UserAction => ({type: UserActionTypes.SET_USER, payload: userData});
export const logoutUser = ():UserAction => ({type: UserActionTypes.DELETE_USER});