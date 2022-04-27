import {ProjectAction, ProjectActionTypes} from "../../types/project";

export const addQuestion = (question: object):ProjectAction => ({type: ProjectActionTypes.ADD_QUESTION, payload: question});