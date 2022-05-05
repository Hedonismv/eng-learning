
export interface ProjectState {
    questionData: QuestionData | null
    isCorrectAnswer: boolean | null,
    statistic:{
        totalQuestions: number ,
        correctQty: number,
        incorrectQty: number
    },
    isProgramCompleted: boolean
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
export type ProjectAction = setAnswer | addQuestion | completeProgram | reloadProgram

//Action.types
export enum ProjectActionTypes {
    SET_ANSWER = "SET_ANSWER",
    ADD_QUESTION = "ADD_QUESTION",
    COMPLETE_PROGRAM = "COMPLETE_PROGRAM",
    RELOAD_PROGRAM = "RELOAD_PROGRAM"
}

// for each action need it own interface

export interface setAnswer {
    type: ProjectActionTypes.SET_ANSWER,
    payload: boolean | null
}

export interface addQuestion {
    type: ProjectActionTypes.ADD_QUESTION,
    payload: number
}

export interface completeProgram {
    type: ProjectActionTypes.COMPLETE_PROGRAM,
    payload: boolean
}

export interface reloadProgram {
    type: ProjectActionTypes.RELOAD_PROGRAM
}

