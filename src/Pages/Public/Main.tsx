import React from 'react';
import { Text, Box, Image, Button, VStack } from "@chakra-ui/react";
import StyledLink from "../../Components/StyledLink";
import { FaGoogle } from "react-icons/all";
import {MdEmail} from "react-icons/md"
import {FiLogIn} from "react-icons/fi"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseSettings/firebaseConsts";

const Main = () => {

    //Google Auth
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    return (
        <Box display={"flex"} flexDirection={'row'} height={'100vh'} width={'100%'}>
            <Box
                width={'45%'}
                justifyContent={"center"}
                flex={1}
                overflow={"hidden"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"stretch"}
                position={"relative"}
                zIndex={0}
            >
                <Box
                    justifyContent={"center"}
                    position={"absolute"}
                    top={0}
                    right={0}
                    left={0}
                    bottom={0}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"stretch"}
                    zIndex={0}
                >
                    <Box
                        position={"absolute"}
                        top={0}
                        right={0}
                        left={0}
                        bottom={0}
                        overflow={"hidden"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"stretch"}
                        zIndex={0}
                    >
                        <Box
                            position={"absolute"}
                            top={0}
                            right={0}
                            left={0}
                            bottom={0}
                            overflow={"hidden"}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"stretch"}
                            zIndex={0}
                        >
                            <Box
                                backgroundImage={'/images/MainPageArt2.jpg'}
                                zIndex={-1}
                                backgroundSize={"cover"}
                                backgroundRepeat={"no-repeat"}
                                backgroundPosition={"center center"}
                                height={'100%'}
                                width={'100%'}
                                position={"absolute"}
                                top={0}
                                bottom={0}
                                right={0}
                                left={0}
                                alignItems={"stretch"}
                                display={"flex"}
                                flexDirection={"column"}
                            >

                            </Box>
                        </Box>

                    </Box>
                </Box>
                <Image
                    src={'/movaLogoBlack.png'}
                    maxHeight={'380px'}
                    height={'50%'} maxWidth={'100%'}
                    position={"relative"}
                    justifyContent={"center"}
                    padding={'32px'}
                />
            </Box>
            <Box width={'55%'} height={'100%'} backgroundColor={'black'} display={"flex"}>
                <Box padding={'20px'} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"flex-start"}>
                    <Box maxWidth={"40px"}>
                        <Image src={'/smallLogoWhite.svg'}/>
                    </Box>
                    <VStack justifyContent={"space-between"} spacing={7} alignItems={"flex-start"}>
                        <Text fontSize={"5xl"} fontWeight={"extrabold"} as={"h1"} color={'#ffffff'}>Изучай новые языки с помощью нашей платформы</Text>
                        <Text fontSize={"3xl"} fontWeight={"bold"} as={'h2'} color={"#ffffff"}>Присоединяйся к сети MOVA прямо сейчас!</Text>
                    </VStack>
                    <VStack justifyContent={"center"} alignItems={"flex-start"} spacing={10}>
                        <VStack spacing={7} alignItems={"flex-start"}>
                            <Button onClick={() => signInWithGoogle()} colorScheme='red' leftIcon={<FaGoogle />} width={[100,200,300]}>
                                Войти через Google
                            </Button>
                            <StyledLink to={'/register'}>
                                <Button colorScheme={'twitter'} leftIcon={<MdEmail/>} width={[100,200,300]}>
                                    Зарегистрироваться через Email
                                </Button>
                            </StyledLink>
                        </VStack>
                        <VStack spacing={7} alignItems={"flex-start"}>
                            <Text fontSize={'1xl'} fontWeight={"bold"} as={"h4"} color={'#ffffff'}>Уже зарегестрированы?</Text>
                            <StyledLink to={'/login'}>
                                <Button colorScheme={'twitter'} width={[100,200,300]} leftIcon={<FiLogIn/>}>Войти</Button>
                            </StyledLink>
                        </VStack>
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
};

export default Main;