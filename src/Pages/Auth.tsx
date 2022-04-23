import React, { FC, useState } from "react";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Text,
    VStack
} from "@chakra-ui/react";
import {FaFacebook, FaGoogle, FaTwitter} from "react-icons/all";
import { FieldValues, useForm } from "react-hook-form";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import {auth} from "../firebaseSettings/firebaseConsts";
import { useActions } from "../hooks/useActions";

interface AuthProps {
    login: boolean
}

const Auth:FC<AuthProps> = ({login}) => {

    //Google auth
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    //Redux actions
    const {setLoggedUser} = useActions()


    //UI consts
    const [verify, setVerify] = useState(false)
    const [uiError, setUiError] = useState<String>('')

    //Register hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    //login hook
    const [
        signInWithEmailAndPassword,
        userL,
        loadingL,
        errorL,
    ] = useSignInWithEmailAndPassword(auth);

    //React-hook-form
    const {register, handleSubmit, formState: { errors } } = useForm<FieldValues>();
    const {email, password, password2} = errors;

    //Login with email and password function
    const loginWP = (data:FieldValues) => {
        signInWithEmailAndPassword(data.email, data.password)
          .catch(error => console.log(error.message))
    }


    //Register with email and password function
    const registerWP = (data:FieldValues) => {
        if(data.password === data.password2){
            createUserWithEmailAndPassword(data.email, data.password)
              .then(() => setVerify(true))
              .catch(error => console.log(error.message))
        }else{
            return
        }
    }


    //Function which check email verification
    const verifiedEmail = () => {
        user?.user.reload()
        console.log(user?.user.emailVerified);
        if(user?.user.emailVerified){
            setLoggedUser(user.user)
        }else{
            setUiError('Hmm... Email no verified, are you confident that you verify it?')
        }
    }


    if(verify){
        return (
          <Container maxW={"container.lg"}>
              <VStack alignItems={"center"} height={"80vh"} justifyContent={"center"}>
                  <Text>We are send the message to your email</Text>
                  <Button onClick={() => verifiedEmail()} type={"submit"} cursor={"pointer"} _hover={{backgroundColor: "teal.500", color: "white"}}>
                      I confirmed my email
                  </Button>
                  {uiError ? <Text color={"red.500"} size={"md"}>{uiError}</Text> : null}
              </VStack>
          </Container>
        )
    }

    return (
        <Container maxW={"container.lg"}>
            <Box alignItems={"center"} display={"flex"} height={"80vh"} justifyContent={"center"}>
                <FormControl w={[300,400,500]} as={"form"} onSubmit={login ? handleSubmit(loginWP) : handleSubmit(registerWP)} isInvalid={email || password || password2}>
                    <FormLabel htmlFor='first-name'>{login ? 'Login' : 'Register'}</FormLabel>
                    <VStack spacing={5}>
                        <Input id='email' type={"email"} placeholder='Your email' {...register('email', {required: true})}/>
                        {errors.email && <FormErrorMessage>This field is required</FormErrorMessage>}
                        <Input id='password' placeholder='Password' {...register('password', {required: true})} type={"password"} />
                        {errors.password && <FormErrorMessage>This field is required</FormErrorMessage>}
                        {!login ? <Input id='password2' placeholder='Confirm your password' type={"password"} {...register('password2', {required: true})} /> : null}
                        {errors.password2 && <FormErrorMessage>This field is required</FormErrorMessage>}
                        <Button
                            type={"submit"}
                            isLoading={loadingL}
                            width={"50%"} cursor={"pointer"}
                            _hover={{backgroundColor: "teal.500", color: "white"}}
                        >{login ? 'Login' : 'Register'}</Button>
                    </VStack>
                    <HStack marginTop={10} justifyContent={"center"}>
                        <Button onClick={() => signInWithGoogle()} colorScheme='red' leftIcon={<FaGoogle />}>
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