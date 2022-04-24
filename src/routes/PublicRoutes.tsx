import React from 'react';
import {Routes, Route} from "react-router-dom"
import Main from "../Pages/Public/Main";
import {Navigate} from "react-router";
import Auth from "../Pages/Public/Auth";
import About from "../Pages/Public/About";



const PublicRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/login'} element={<Auth login={true}/>}/>
            <Route path={'/register'} element={<Auth login={false}/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default PublicRoutes;