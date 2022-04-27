
import {ProjectAction, ProjectActionTypes, ProjectState} from "../../types/project";

const initialState: ProjectState = {
    questionData: null
}


export const projectReducer = (state = initialState, action: ProjectAction):ProjectState => {
    switch (action.type) {
        case ProjectActionTypes.ADD_QUESTION:
            return <ProjectState>{
                ...state,
                questionData: action.payload
            }
        default:
            return state
    }
}