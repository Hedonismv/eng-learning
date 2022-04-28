import React, { FC, useEffect, useState } from "react";
import { Container, Text, Box, Button, VStack, useDisclosure } from "@chakra-ui/react";
import {DocumentData} from 'firebase/firestore/'
import AnswerItem from "./AnswerItem";
import {Alert, AlertIcon, AlertTitle, AlertDescription} from "@chakra-ui/react";
import {CloseButton} from "@chakra-ui/react";
import { QuestionData } from "../../types/project";

interface QuestionProps {
	queData: DocumentData[] | undefined
}


const Question:FC<QuestionProps> = ({queData}) => {

	const [correct, setCorrect] = useState<boolean | null>(null)

	const {
		isOpen: isVisible,
		onClose,
		onOpen,
	} = useDisclosure({ defaultIsOpen: false })

	const [queNum, setQueNum] = useState<number>(0)

	const {transWord, engWords, questionAnsId} = queData![queNum]

	//progressBar
	//queNum to localStorage to save session


	//validateHandler
	const validateHandler = (id:number) => {
		if(id === questionAnsId){
			handleSkip()
			console.log('RIGHT');
			onOpen()
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
			</VStack>
			<Box>
				{isVisible &&
                  <Alert status='success'>
                    <AlertIcon />
                    <Box>
                      <AlertTitle>Success!</AlertTitle>
                      <AlertDescription>
                        Your application has been receivd. We will review your application and
                        respond within the next 48 hours.
                      </AlertDescription>
                    </Box>
                    <CloseButton
                      alignSelf='flex-start'
                      position='relative'
                      right={-1}
                      top={-1}
                      onClick={onClose}
                    />
                  </Alert>
				}
			</Box>
		</Container>
	);
};

export default Question;