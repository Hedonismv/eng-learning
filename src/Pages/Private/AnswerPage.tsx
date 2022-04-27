import React, { FC, useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import {Spinner} from "@chakra-ui/react";
import { useParams } from "react-router";
import { collection } from "firebase/firestore";
import { firestore } from "../../firebaseSettings/firebaseConsts";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import Question from "../../Components/Lessons/Question";
import { useActions } from "../../hooks/useActions";

const AnswerPage:FC = () => {

	const {lvl, mode} = useParams()
	const {addQuestion} = useActions()

	const questionRef = collection(firestore,`lessons/english/${lvl}/${mode}/questions`)
	const [values, loading, error] = useCollectionDataOnce(questionRef)


	useEffect(() => {
		values && addQuestion(values)
	},[values])


	return (
		<Container height={"80vh"} maxW={"container.lg"} display={"flex"} flexDirection={"column"}>
			<Text as={"h1"} fontSize={["xl", "xx-large"]} fontWeight={"bold"} textAlign={"center"} my={5}>Выбери правильный вариант из приведенных слов</Text>
			<Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mt={[10,20]}>
				{loading ? <Spinner/> : <Question queData={values}/>}
				{error && <Text>{error.message}</Text>}
			</Box>
		</Container>
	);
};

export default AnswerPage;