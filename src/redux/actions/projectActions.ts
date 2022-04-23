import {ProjectAction, ProjectActionTypes} from "../../types/project";

export const addImage = (imageData:string):ProjectAction => ({type: ProjectActionTypes.ADD_IMAGE, payload: imageData});
export const addCover = (imageData:string):ProjectAction => ({type: ProjectActionTypes.ADD_COVER, payload: imageData});