import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { correct_routes, REACT_APP_URL, routes } from '../consts';
import { readerRoutes, writerRoutes, adminRoutes, publicRoutes } from './../routes';

const AppRouter: React.FC = () => {

    //Временные данные о пользователе
    let user = {
        isAuth: true,
        role: 'ADMIN'
    }

    // костыль для проверки корректности текущего url, чтобы при некорректном перенаправлялось на страницу логина
    let checkPath: boolean = false
    let current_path: string = window.location.href.replace(REACT_APP_URL, '')
    if (correct_routes.indexOf(current_path) !== -1) checkPath = true

    return (
        <Routes>
            {/* {user.isAuth && user.role === 'READER' && readerRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )} */}
            {readerRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

            {user.isAuth && user.role === 'WRITER' && writerRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

            {user.isAuth && user.role === 'ADMIN' && adminRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

            {publicRoutes.map(({path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            
            {!checkPath && <Route path="*" element={<Navigate to={routes.LOGIN_ROUTE} />} />}
        </Routes>
    );
};

export default AppRouter;