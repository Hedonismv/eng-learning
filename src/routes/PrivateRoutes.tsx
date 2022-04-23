import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router"
import Main from "../Pages/Main/Main";

const PrivateRoutes = () => {


    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default PrivateRoutes;