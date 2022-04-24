import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Header from "./Components/Header/Header";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebaseSettings/firebaseConsts";
import {useEffect} from "react";
import {useActions} from "./hooks/useActions";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { useTypedSelector } from "./hooks/useTypedSelector";

export const App = () => {

    const [user, loading, error] = useAuthState(auth);
    const {loggedUser} = useTypedSelector(state => state.user)
    const {setLoggedUser} = useActions()

    useEffect(() => {
        if(user){
          setLoggedUser(user)
        }
    }, [user, loggedUser])

    return (
        <ChakraProvider theme={theme}>
            <Header/>
            {loading ? 'Loading' : user?.emailVerified ? <PrivateRoutes/> : <PublicRoutes/>}
        </ChakraProvider>
    )
}
