import React from 'react';
import {Container, Text, Box, HStack} from "@chakra-ui/react";
import StyledLink from "../../Components/StyledLink";

const Main = () => {
    return (
        // <Container maxW={"container.lg"}>
        //     <Text>Main Page</Text>
        //     <StyledLink to={'/lessons'}>Start Learning</StyledLink>
        // </Container>
        <HStack height={'100vh'} width={'100%'}>
            <Box width={'40%'}>
                <h1>Image</h1>
            </Box>
            <Box width={'60%'} height={'100%'} backgroundColor={'black'}>
                <h1>Info</h1>
            </Box>
        </HStack>
    );
};

export default Main;