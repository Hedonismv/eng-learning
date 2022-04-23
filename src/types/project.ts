
export interface ProjectState {
    files: [...any[], string] | [],
    cover: string | null,
    title: string,
    technology: string,
    description: string
}


//Actions list
export type ProjectAction = addImage | addCover

//Action.types
export enum ProjectActionTypes {
    ADD_IMAGE = "ADD_IMAGE",
    ADD_COVER = "ADD_COVER"
}

// for each action need it own interface

export interface addImage {
    type: ProjectActionTypes.ADD_IMAGE;
    payload: string;
}

export interface addCover {
    type: ProjectActionTypes.ADD_COVER;
    payload: string;
}