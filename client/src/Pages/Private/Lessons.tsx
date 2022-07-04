import React, { FC } from "react";
import {Text, Container} from "@chakra-ui/react";
import LessonsList from "../../Components/Lessons/LessonsList";

const Lessons:FC = () => {


  return (
    <Container maxW={"container.lg"}>
        <Text as={"h1"} padding={'20px 0'} textAlign={"center"} fontSize={"5xl"} fontWeight={"extrabold"}>Что будем учить?</Text>
        <LessonsList/>
    </Container>
  );
};

export default Lessons;