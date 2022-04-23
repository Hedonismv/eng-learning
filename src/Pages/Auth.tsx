import React, {FC} from 'react';
import {Box, Button, Container, FormControl, FormLabel, HStack, Input, Text, VStack} from "@chakra-ui/react";
import {FaFacebook, FaGoogle, FaTwitter} from "react-icons/all";

interface AuthProps {
    login: boolean
}


const Auth:FC<AuthProps> = ({login}) => {



    return (
        <Container maxW={"container.lg"}>
            <Box alignItems={"center"} display={"flex"} height={"80vh"} justifyContent={"center"}>
                <FormControl w={[300,400,500]}>
                    <FormLabel htmlFor='first-name'>{login ? 'Login' : 'Register'}</FormLabel>
                    <VStack spacing={5}>
                        <Input id='email' placeholder='Your email' />
                        <Input id='password' placeholder='Password' type={"password"} />
                        {!login ? <Input id='password2' placeholder='Confirm your password' type={"password"} /> : null}
                        <Input
                            type={"submit"}
                            value={login ? 'Login' : 'Register'}
                            width={"50%"} cursor={"pointer"}
                            _hover={{backgroundColor: "teal.500", color: "white"}}
                        />
                    </VStack>
                    <HStack marginTop={10} justifyContent={"center"}>
                        <Button colorScheme='red' leftIcon={<FaGoogle />}>
                            Google
                        </Button>
                        <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                            Facebook
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<FaTwitter/>}>
                            Twitter
                        </Button>
                    </HStack>
                </FormControl>
            </Box>
        </Container>
    );
};

export default Auth;