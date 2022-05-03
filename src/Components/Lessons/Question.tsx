import React, { FC, useEffect, useState } from "react";
import { Container, Text, Box, Button, VStack, useDisclosure, Progress } from "@chakra-ui/react";
import {DocumentData} from 'firebase/firestore/'
import AnswerItem from "./AnswerItem";
import { useActions } from "../../hooks/useActions";

interface QuestionProps {
	queData: DocumentData[] | undefined
}


const Question:FC<QuestionProps> = ({queData}) => {

	const {setAnswer} = useActions()

	const [queNum, setQueNum] = useState<number>(0)
	const [percent, setPercent] = useState<number>(0)

	const {transWord, engWords, questionAnsId} = queData![queNum]

	//progressBar
	//queNum to localStorage to save session


	//validateHandler
	const validateHandler = (id:boolean) => {
		if(id){
			handleSkip()
			console.log('RIGHT');
			setAnswer(true)
			setPercent( prevState => prevState + 100 / queData?.length!)
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
		<>
			<Container maxW={"container.sm"}>
				<Progress value={percent} mb={9} colorScheme={'green'} borderRadius={3}/>
				<VStack>
					<Text fontSize={"xx-large"}>{transWord}</Text>
					<Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
						{engWords.map((ew:any, index:number) =>
							<AnswerItem engWord={ew} key={index} validateAnswer={validateHandler}/>
						)}
					</Box>
				</VStack>
			</Container>
		</>
	);
};

export default Question;