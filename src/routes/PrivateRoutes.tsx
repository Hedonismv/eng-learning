import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router"
import Main from "../Pages/Public/Main";
import Lessons from "../Pages/Private/Lessons";
import About from "../Pages/Public/About";

const PrivateRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/lessons'} element={<Lessons/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default PrivateRoutes;