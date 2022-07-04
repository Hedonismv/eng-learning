import { UserState, UserAction, UserActionTypes} from "../../types/user";


const initialState: UserState = {
    loggedUser: null
}


export const userReducer = (state = initialState, action: UserAction):UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return <UserState> {
                ...state,
                loggedUser: action.payload
            }
        case UserActionTypes.DELETE_USER:
            return {
                ...state,
                loggedUser: null
            }
        default:
            return state
    }
}