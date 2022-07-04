import React, { FC } from "react";
import { Container, Text, Box, HStack } from "@chakra-ui/react";
import LessonItem from "./LessonItem";

const LessonsList:FC = () => {
	return (
		<Box>
			<HStack>
				<LessonItem to={'english/entry/chooser'}/>
				<LessonItem to={'english'}/>
				<LessonItem to={'english'}/>
			</HStack>
		</Box>
	);
};

export default LessonsList;