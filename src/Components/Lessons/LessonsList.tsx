import React, { FC } from "react";
import { Container, Text, Box, HStack } from "@chakra-ui/react";
import LessonItem from "./LessonItem";

const LessonsList:FC = () => {
	return (
		<Container maxW={"container.lg"}>
			<Text as={"h1"}>English Lessons</Text>
			<Box>
				<Text>Entry level</Text>
				<HStack>
					<LessonItem to={'entry/chooser'}/>
					<LessonItem to={'entry/guesser'}/>
					<LessonItem to={'entry/audio'}/>
				</HStack>
			</Box>
			<Box>
				<Text>Pre-intermediate level</Text>
				<HStack>
					<LessonItem to={'pre-inter/chooser'}/>
					<LessonItem to={'pre-inter/guesser'}/>
					<LessonItem to={'pre-inter/audio'}/>
				</HStack>
			</Box>
			<Box>
				<Text>Intermediate level</Text>
				<HStack>
					<LessonItem to={'inter/chooser'}/>
					<LessonItem to={'inter/guesser'}/>
					<LessonItem to={'inter/audio'}/>
				</HStack>
			</Box>
		</Container>
	);
};

export default LessonsList;