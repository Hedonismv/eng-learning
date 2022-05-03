
export interface ProjectState {
    questionData: QuestionData | null
    isCorrectAnswer: boolean
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
export type ProjectAction = setAnswer

//Action.types
export enum ProjectActionTypes {
    SET_ANSWER = "SET_ANSWER"
}

// for each action need it own interface

export interface setAnswer {
    type: ProjectActionTypes.SET_ANSWER,
    payload: boolean
}
