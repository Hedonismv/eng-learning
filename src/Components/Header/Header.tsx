import React from 'react';
import {
    Box,
    Container,
    useColorModeValue,
    Text,
    HStack,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../../ColorModeSwitcher";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "../../firebaseSettings/firebaseConsts";
import { signOut} from "firebase/auth"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import StyledLink from "../StyledLink";
import { useTimeHandler } from "../../hooks/useTimeHandler";

const Header = () => {


    const {greeting} = useTimeHandler()

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
            h={'80px'}
            display={"flex"}
            alignItems={"center"}
            backgroundColor={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px'}}
            boxShadow={"xs"}
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
                        <StyledLink to={'/'} hover={{color: "teal.500"}}>Home</StyledLink>
                        <StyledLink to={'/about'} hover={{color: "teal.500"}}>About team</StyledLink>
                    </HStack>
                </Box>
                <ColorModeSwitcher/>
                <Box display={"flex"} alignItems={"center"}>
                    {loading ? 'Loading' : <Text mr={5}>{greeting} {loggedUser?.displayName ? loggedUser.displayName : loggedUser?.email}</Text>}
                    <Menu>
                        <MenuButton display={"flex"}>
                            <Avatar name={loggedUser?.displayName ? loggedUser.displayName : loggedUser?.email!} src={loggedUser?.photoURL!}/>
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => logout()}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;