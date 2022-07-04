export interface IQuestions {
	questionAnsId: number,
	transWord: string,
	engWords: [
		{answerId: number, firstWord: string},
		{answerId: number, secondWord: string},
		{answerId: number, thirdWord: string},
		{answerId: number, fourWord: string}
	]
}