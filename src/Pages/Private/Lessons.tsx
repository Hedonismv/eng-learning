import React, { FC, useEffect } from "react";
import {Text, Container} from "@chakra-ui/react";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import {collection} from "firebase/firestore"
import { firestore } from "../../firebaseSettings/firebaseConsts";
import LessonsList from "../../Components/Lessons/LessonsList";

const Lessons:FC = () => {


  return (
    <Container maxW={"container.lg"}>
      <LessonsList/>
    </Container>
  );
};

export default Lessons;