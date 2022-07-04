import React, { FC, useEffect, useState } from "react";
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
import {auth} from "../../firebaseSettings/firebaseConsts";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface AuthProps {
    login: boolean
}

type Errors = {
    message: string | undefined,
    isError: boolean
}

const Auth:FC<AuthProps> = ({login}) => {

    //Google auth
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    //Redux actions & State
    const {setLoggedUser} = useActions()
    const {loggedUser} = useTypedSelector(state => state.user)

    //UI consts
    const [verify, setVerify] = useState<Boolean>(false)
    const [uiError, setUiError] = useState<String>('')
    const [authError, setAuthError] = useState<Errors>({isError: false, message: ''})

    //Register hook
    const [
        createUserWithEmailAndPassword,
        userR,
        loadingR,
        errorR,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    //login hook
    const [
        signInWithEmailAndPassword,
        userL,
        loadingL,
        errorL,
    ] = useSignInWithEmailAndPassword(auth);

    //React-hook-form
    const {register, handleSubmit, reset, formState: { errors } } = useForm<FieldValues>();
    const {email, password, password2} = errors;

    //Login with email and password function
    const loginWP = (data:FieldValues) => {
        signInWithEmailAndPassword(data.email, data.password)
          .catch(error => {
              if(error.code === 400){
                  setAuthError({isError: true, message: 'Email or password incorrect'})
              }
          })
    }

    //Error Register & Login handler
    useEffect(() => {
        if(errorR || errorL){
            const chanError = errorR ? errorR : errorL
            setAuthError({isError: true, message: chanError?.message})
            setVerify(false)
        }else{
            setAuthError({isError: false, message: ''})
        }
    }, [errorR, errorL, loadingR])



    //Register with email and password function
    const registerWP = (data:FieldValues) => {
        if(data.password === data.password2){
            createUserWithEmailAndPassword(data.email, data.password)
            setVerify(true)
        }else{
            setAuthError({isError: true, message: 'Passwords dont match'})
        }
    }


    //Function which check email verification
    const verifiedEmail = () => {
        console.log(loggedUser);
        loggedUser?.reload()
          .then(() => {
              setLoggedUser(loggedUser)
          })
          .catch(error => error.message)
          .finally(() => {
              if(!loggedUser?.emailVerified){
                  setUiError('Hmm... Email no verified, are you confident that you verify it?')
              }
          })
    }


    //Effect hook to handle email-verifying
    useEffect(() => {
        setAuthError({isError: false, message: ''})
        reset({email, password, password2})
        if(loggedUser && !loggedUser.emailVerified){
            setVerify(true)
        }
    },[loggedUser])


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
                <FormControl w={[300,400,500]} as={"form"} onSubmit={login ? handleSubmit(loginWP) : handleSubmit(registerWP)} isInvalid={email || password || password2 || authError.isError}>
                    <FormLabel htmlFor='first-name'>{login ? 'Login' : 'Register'}</FormLabel>
                    <VStack spacing={5}>
                        <Input id='email' type={"email"} placeholder='Your email' {...register('email', {required: true})}/>
                        {errors.email && <FormErrorMessage>To register you, we need your email</FormErrorMessage>}
                        <Input id='password' placeholder='Password' {...register('password', {required: true})} type={"password"} />
                        {errors.password && <FormErrorMessage>Hey, write your password here</FormErrorMessage>}
                        {!login ? <Input id='password2' placeholder='Confirm your password' type={"password"} {...register('password2', {required: true})} /> : null}
                        {errors.password2 && <FormErrorMessage>Hey, write your password here</FormErrorMessage>}
                        {authError.isError && <FormErrorMessage>{authError.message}</FormErrorMessage>}
                        <Button
                            type={"submit"}
                            isLoading={login ? loadingL : loadingR}
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