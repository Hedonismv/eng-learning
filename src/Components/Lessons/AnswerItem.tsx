import React, { Dispatch, FC, SetStateAction } from "react";
import {Box,Text} from "@chakra-ui/react";

export interface AnswerItemProps {
	engWord: {
		word: string,
		answerId: boolean
	},
	validateAnswer: (id:boolean) => void
}

const AnswerItem:FC<AnswerItemProps> = ({engWord, validateAnswer}) => {


	return (
		<Box
			onClick={() => validateAnswer(engWord.answerId)}
			backgroundColor={"teal.100"}
			borderRadius={10}
			width={['35%', '30%', '40%']}
			maxH={"2xs"}
			py={3}
			px={10}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			my={5}
			mx={5}
			cursor={"pointer"}
		>
			<Text>{engWord.word}</Text>
		</Box>
	);
};

export default AnswerItem;