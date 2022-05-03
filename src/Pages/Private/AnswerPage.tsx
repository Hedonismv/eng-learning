import React, { FC, useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import {Spinner} from "@chakra-ui/react";
import { useParams } from "react-router";
import { collection } from "firebase/firestore";
import { firestore } from "../../firebaseSettings/firebaseConsts";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import Question from "../../Components/Lessons/Question";
import CorrectIncorrect from "../../Components/CorrectIncorrect";

const AnswerPage:FC = () => {

	const {lvl, mode} = useParams()

	const questionRef = collection(firestore,`lessons/english/${lvl}/${mode}/questions`)
	const [values, loading, error] = useCollectionDataOnce(questionRef)

	return (
		<Box height={'90vh'}>
			<Container maxW={"container.lg"} display={"flex"} flexDirection={"column"}>
				<Text as={"h1"} fontSize={["xl", "xx-large"]} fontWeight={"bold"} textAlign={"center"} my={5}>Выбери правильный вариант из приведенных слов</Text>
				<Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mt={[2,5]}>
					{loading ? <Spinner/> : <Question queData={values}/>}
					{error && <Text>{error.message}</Text>}
				</Box>
			</Container>
			<CorrectIncorrect/>
		</Box>
	);
};

export default AnswerPage;