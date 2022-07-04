import React, { FC } from "react";
import { Container, HStack, Text, Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router";
import StyledLink from "../../Components/StyledLink";

const LangPage:FC = () => {

	const {lang} = useParams()

	return (
		<Container maxW={"container.lg"}>
			<Text as={"h1"} fontSize={'6xl'} fontWeight={"bold"} textAlign={"center"}>{lang === 'english' && 'Учим английский'}</Text>
			<Box width={'100%'}>
				<Box>
					<Text>Для новичков</Text>
					<hr/>
					<Box backgroundColor={'#7575FF'} width={'100%'} borderRadius={10} display={"flex"} justifyContent={"space-around"} flexDirection={"row"} alignItems={"center"}>
						<Box>
							<Text>Выбери правильный вариант из 4 слов</Text>
							<Text>Пополни свой словарный запас с помощью более чем 60 вопросов!</Text>
						</Box>
						<Box>
							<StyledLink to={'entry/chooser'}><Button>Начать обучение</Button></StyledLink>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default LangPage;