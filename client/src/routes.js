import React, {Fragment} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import DishPage from './pages/DishPage';
import {MenuPage} from './pages/MenuPage';
import CaloriesPage from './pages/CaloriesPage';
import AuthPage from './pages/AuthPage';

export const useRoutes = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <Routes>
                <Route path = "/dish" element = { <DishPage /> } />
                <Route path = "/menu" element = { <MenuPage /> } />
                <Route path = "/calories" element = { <CaloriesPage /> } />
                <Route path = "*" element = { <DishPage /> } />
            </Routes>
        )
    }

    return(
        <Routes>
            <Route path = "/auth" element = { <AuthPage /> } />
            <Route path = "*" element = { <AuthPage /> } />
        </Routes>
    )
}