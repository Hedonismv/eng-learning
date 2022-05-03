import { ProjectAction, ProjectActionTypes } from "../../types/project";

export const setAnswer = (answer: boolean):ProjectAction => ({type: ProjectActionTypes.SET_ANSWER, payload: answer});