import React, { useEffect } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, useDisclosure } from "@chakra-ui/react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const CorrectIncorrect = () => {

	//Redux
	const { isCorrectAnswer} = useTypedSelector(state => state.project)
	const {setAnswer} = useActions()

	const {
		isOpen: isVisible,
		onClose,
		onOpen,
	} = useDisclosure({ defaultIsOpen: false })

	useEffect(() => {
		if(isCorrectAnswer){
			onOpen()
			setTimeout(() => {
				onClose()
				setAnswer(false)
			}, 4000)
		}
	}, [isCorrectAnswer])

	return (
		isVisible ?
			<Alert
				status='success'
				height={"3xs"}
				position={"absolute"}
				bottom={0}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<AlertIcon />
				<Box>
					<AlertTitle>Правильно!</AlertTitle>
					<AlertDescription>
						Your application has been receivd. We will review your application and
						respond within the next 48 hours.
					</AlertDescription>
				</Box>
			</Alert>
			: null
	);
};

export default CorrectIncorrect;