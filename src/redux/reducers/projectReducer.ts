
import {ProjectAction, ProjectActionTypes, ProjectState} from "../../types/project";

const initialState: ProjectState = {
    questionData: null,
    isCorrectAnswer: false
}


export const projectReducer = (state = initialState, action: ProjectAction):ProjectState => {
    switch (action.type) {
        case ProjectActionTypes.SET_ANSWER:
            return {
                ...state,
                isCorrectAnswer: action.payload
            }
        default:
            return state
    }
}