import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router"
import Lessons from "../Pages/Private/Lessons";
import About from "../Pages/Public/About";
import AnswerPage from "../Pages/Private/AnswerPage";

const PrivateRoutes = () => {

    return (
        <Routes>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/lessons'} element={<Lessons/>}/>
            <Route path={'/lessons/:lvl/:mode'} element={<AnswerPage/>}/>
            <Route path={'*'} element={<Navigate to={'/lessons'}/>}/>
        </Routes>
    );
};

export default PrivateRoutes;