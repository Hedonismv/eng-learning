
export interface ProjectState {
    questionData: QuestionData | null
}

export type QuestionData = {
    engWords: [
        {word: string, answerId: number}
    ],
    questionAnsId: number,
    transWord: string
}

export type AllQuestions = {
    queData: [QuestionData]
}

//Actions list
export type ProjectAction = addQuestion

//Action.types
export enum ProjectActionTypes {
    ADD_QUESTION = "ADD_QUESTION"
}

// for each action need it own interface

export interface addQuestion {
    type: ProjectActionTypes.ADD_QUESTION;
    payload: object;
}
