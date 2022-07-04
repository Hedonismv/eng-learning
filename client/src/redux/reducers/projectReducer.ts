import { ProjectAction, ProjectActionTypes, ProjectState } from "../../types/project";

const initialState: ProjectState = {
    questionData: null,
    isCorrectAnswer: null,
    statistic:{
        totalQuestions: 0,
        correctQty: 0,
        incorrectQty: 0
    },
    isProgramCompleted: false
}


export const projectReducer = (state = initialState, action: ProjectAction):ProjectState => {
    switch (action.type) {
        case ProjectActionTypes.SET_ANSWER:
            if(action.payload){
                return {
                    ...state,
                    isCorrectAnswer: action.payload,
                    statistic: {...state.statistic, correctQty: state.statistic.correctQty! + 1}
                }
            }else{
                return {
                    ...state,
                    isCorrectAnswer: action.payload,
                    statistic: {...state.statistic, incorrectQty: state.statistic.incorrectQty! + 1}
                }
            }
        case ProjectActionTypes.ADD_QUESTION:
            return {
                ...state,
                statistic: {...state.statistic, totalQuestions: action.payload}
            }
        case ProjectActionTypes.COMPLETE_PROGRAM:
            return {
                ...state,
                isProgramCompleted: action.payload
            }
        case ProjectActionTypes.RELOAD_PROGRAM:
            return {
                ...state,
                isProgramCompleted: false,
                isCorrectAnswer: null,
                statistic: {
                    totalQuestions: 0,
                    correctQty: 0,
                    incorrectQty: 0
                }
            }
        default:
            return state
    }
}