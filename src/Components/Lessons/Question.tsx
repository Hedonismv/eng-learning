import React, { FC, useState } from "react";
import { Container, Text, Box } from "@chakra-ui/react";
import {DocumentData} from 'firebase/firestore/'

interface QuestionProps {
	queData: DocumentData[] | undefined
}


const Question:FC<QuestionProps> = ({queData}) => {

	const [queNum, setQueNum] = useState<number>(0)

	console.log(queData);

	return (
		<Container maxW={"container.sm"}>
			<Box>
				<Text>{queData && queData[queNum].transWord}</Text>
			</Box>
		</Container>
	);
};

export default Question;