import { ProjectAction, ProjectActionTypes } from "../../types/project";

export const setAnswer = (answer: boolean | null):ProjectAction => ({type: ProjectActionTypes.SET_ANSWER, payload: answer});

export const addQuestion = (qty: number):ProjectAction => ({type: ProjectActionTypes.ADD_QUESTION, payload: qty});

export const completeProgram = (isCompleted: boolean):ProjectAction => ({type: ProjectActionTypes.COMPLETE_PROGRAM, payload: isCompleted});

export const reloadProgram = ():ProjectAction => ({type: ProjectActionTypes.RELOAD_PROGRAM});