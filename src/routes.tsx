import React from 'react';
import {routes} from './consts'
import AdminPage from './pages/admin/AdminPage'
import WriterPage from './pages/writer/WriterPage'
import ReaderPage from './pages/reader/ReaderPage'
import AuthPage from './pages/auth/AuthPage'

interface IRoutes{
    path: string,
    Component: React.FC
}

export const adminRoutes: IRoutes[] = [
    {
        path: routes.ADMIN_ROUTE,
        Component: AdminPage 
    }
]

export const writerRoutes: IRoutes[] = [
    {
        path: routes.WRITER_ROUTE,
        Component: WriterPage 
    }
]

export const readerRoutes: IRoutes[] = [
    {
        path: routes.READER_ROUTE,
        Component: ReaderPage
    }
]

export const publicRoutes: IRoutes[] = [
    {
        path: routes.LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: routes.REGISTRATION_ROUTE,
        Component: AuthPage
    }
]