
import {ProjectAction, ProjectActionTypes, ProjectState} from "../../types/project";

const initialState: ProjectState = {
    files: [],
    cover: null,
    description: '',
    title: '',
    technology: ''
}


export const projectReducer = (state = initialState, action: ProjectAction):ProjectState => {
    switch (action.type) {
        case ProjectActionTypes.ADD_IMAGE:
            return{
                ...state,
                files: [...state.files , action.payload]
            }
        case ProjectActionTypes.ADD_COVER:
            return {
                ...state,
                cover: action.payload
            }
        default:
            return state
    }
}