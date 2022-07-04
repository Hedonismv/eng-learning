import {User} from "firebase/auth"


export interface UserState {
    loggedUser: User | null | undefined
}

//Actions list
export type UserAction = SetUser | DeleteUser

//Action.types
export enum UserActionTypes {
    SET_USER = "SET_USER",
    DELETE_USER = "DELETE_USER"
}

// for each action need it own interface

export interface SetUser {
    type: UserActionTypes.SET_USER;
    payload: object;
}

export interface DeleteUser {
    type: UserActionTypes.DELETE_USER;
}

