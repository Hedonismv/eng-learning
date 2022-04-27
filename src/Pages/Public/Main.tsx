import React from 'react';
import {Container, Text} from "@chakra-ui/react";
import StyledLink from "../../Components/StyledLink";

const Main = () => {
    return (
        <Container maxW={"container.lg"}>
            <Text>Main Page</Text>
            <StyledLink to={'/lessons'}>Start Learning</StyledLink>
        </Container>
    );
};

export default Main;