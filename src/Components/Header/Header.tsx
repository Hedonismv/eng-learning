import React from 'react';
import {Box, Container, useColorModeValue, Text, Link, HStack} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../../ColorModeSwitcher";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "../../firebaseSettings/firebaseConsts";
import { signOut} from "firebase/auth"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {NavLink} from "react-router-dom";
import StyledLink from "../StyledLink";

const Header = () => {

    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

    const {loggedUser} = useTypedSelector(state => state.user);
    const {logoutUser} = useActions()


    const logout = () => {
        signOut(auth)
            .then(() => logoutUser())
            .catch(error => console.log(error.message));
    }


    return (
        <Box
            as={"nav"}
            w={"100%"}
            backgroundColor={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px'}}
        >
            <Container
                display={'flex'}
                alignItems={'center'}
                flexWrap={'wrap'}
                justifyContent={'space-between'}
                maxW={'container.xl'}
                p={2}
            >
                <Box display={'flex'}>
                    <Text>Website Logo</Text>
                    <HStack spacing={5} ml={10}>
                        <StyledLink to={'/login'} hover={{color: "teal.500"}}>Login</StyledLink>
                        <StyledLink to={'/register'} hover={{color: "teal.500"}}>Register</StyledLink>
                        <StyledLink to={'/'} hover={{color: "teal.500"}}>Home</StyledLink>
                    </HStack>
                    {/*<Box marginLeft={10} gap={5} display={"flex"}>*/}
                    {/*    <Link _hover={{color: "teal.500"}}><NavLink to={'/login'}>Login</NavLink></Link>*/}
                    {/*    <Link _hover={{color: "teal.500"}}><NavLink to={'/register'}>Register</NavLink></Link>*/}
                    {/*    <Link _hover={{color: "teal.500"}}><NavLink to={'/'}>Home</NavLink></Link>*/}
                    {/*</Box>*/}
                </Box>
                {loading ? 'Loading' : <Text>Hello {loggedUser?.displayName}</Text>}
                {loggedUser ? <Text onClick={() => logout()}>Logout</Text> : <Text onClick={() => signInWithGoogle()}>Login With Google</Text>}
                <ColorModeSwitcher/>
            </Container>
        </Box>
    );
};

export default Header;