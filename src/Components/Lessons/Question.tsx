import React, { FC, useEffect, useState } from "react";
import { Container, Text, Box, Button, VStack } from "@chakra-ui/react";
import {DocumentData} from 'firebase/firestore/'
import AnswerItem from "./AnswerItem";
import { QuestionData } from "../../types/project";

interface QuestionProps {
	queData: DocumentData[] | undefined
}


const Question:FC<QuestionProps> = ({queData}) => {

	const [queNum, setQueNum] = useState<number>(0)

	const {transWord, engWords, questionAnsId} = queData![queNum]

	//validateHandler
	const validateHandler = (id:number) => {
		if(id === questionAnsId){
			handleSkip()
			console.log('RIGHT');
		}else{
			console.log('Incorrect');
		}
	}

	//Skip handler
	const handleSkip = () => {
		const queLength = queData?.length! - 1
		if(queNum === queLength ){
			setQueNum(0)
		}else{
			setQueNum(prevState => prevState + 1)
		}
	}

	return (
		<Container maxW={"container.sm"}>
			<VStack>
			<Text fontSize={"xx-large"}>{transWord}</Text>
				<Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
					{engWords.map((ew:any) =>
						<AnswerItem engWord={ew} key={ew.answerId} validateAnswer={validateHandler}/>
					)}
				</Box>
				<Button onClick={() => handleSkip()} width={[120, 200, 250]} backgroundColor={"red.500"}>Пропустить</Button>
			</VStack>
		</Container>
	);
};

export default Question;