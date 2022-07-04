import React from "react";
import { Box, Button, Text, VStack, HStack } from "@chakra-ui/react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import {AiOutlineReload, AiOutlineUnorderedList} from 'react-icons/ai';
import StyledLink from "./StyledLink";
import { useNavigate } from "react-router-dom";

const AnswerStatistic = () => {

	const navigate = useNavigate()

	//Redux
	const {reloadProgram} = useActions()
	const {statistic} = useTypedSelector(state => state.project)
	const {totalQuestions, correctQty} = statistic;

	let answerPercent = correctQty ? totalQuestions / correctQty * 100 : 0

	const toNextLessons = () => {
		reloadProgram()
		navigate('/lessons')
	}

	return (
		<Box display={"flex"} flexDirection={"column"} backgroundColor={'#7575FF'} width={'100%'} height={'80vh'} borderRadius={10} alignItems={"center"} justifyContent={"center"}>
			<VStack alignItems={"center"} justifyContent={"center"} mb={20}>
				<Text fontSize={'2xl'} fontWeight={"bold"}>Процент правильных ответов: {answerPercent}%</Text>
				<Text fontSize={'xl'} fontWeight={"semibold"}>Правильно {correctQty} из {totalQuestions}</Text>
			</VStack>
			<HStack justifyContent={"center"} alignItems={"center"}>
				<Button colorScheme={'twitter'} onClick={() => reloadProgram()} leftIcon={<AiOutlineReload/>}>Повторить</Button>
				<Button colorScheme={'green'} onClick={() => toNextLessons()} leftIcon={<AiOutlineUnorderedList/>}>Другие уроки</Button>
			</HStack>
		</Box>
	);
};

export default AnswerStatistic;