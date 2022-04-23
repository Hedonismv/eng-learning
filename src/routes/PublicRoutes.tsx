import React from 'react';
import {Routes, Route} from "react-router-dom"
import Main from "../Pages/Main/Main";
import {Navigate} from "react-router";
import Auth from "../Pages/Auth";



const PublicRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/login'} element={<Auth login={true}/>}/>
            <Route path={'/register'} element={<Auth login={false}/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default PublicRoutes;