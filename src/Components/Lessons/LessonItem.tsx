import React, { FC, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import { collection } from "firebase/firestore";
import { firestore } from "../../firebaseSettings/firebaseConsts";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { useParams } from "react-router";

interface LessonItemProps {
	to: string
}



const LessonItem:FC<LessonItemProps> = ({to}) => {

	const navigate = useNavigate()

	return (
		<Box
			onClick={() => navigate(to)}
			borderRadius={10}
			backgroundColor={"teal.300"}
			w={[200,300,400]}
			h={[100,150,220]}
			cursor={"pointer"}
			_hover={{backgroundColor: "teal.700"}}
		/>

	);
};

export default LessonItem;