import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../consts';
import { loginf, registration } from '../../http/userAPI';
import classes from './authPage.module.scss';
import { UserActionTypes } from '../../types/userTypes';
import { useActions } from '../../hooks/useActions';

const AuthPage: React.FC = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const isLogin = window.location.pathname === routes.LOGIN_ROUTE
    const { setUser } = useActions()

    const defaultRole = 'READER'

    const auth = async () => {
        try {
            let data: any
            if (isLogin) {
                data = await loginf(login, password)
            }
            else {
                try{
                    data = await registration(login, password, defaultRole)
                    alert('Регистрация прошла успешно!')
                    navigate(routes.LOGIN_ROUTE)
                }catch (e: any){
                    alert(e.response.data.message)
                }
            }
            setUser(data.login, data.role, data.user_id)
            if (data.role === 'READER') navigate(routes.READER_ROUTE)
            if (data.role === 'WRITER') navigate(routes.WRITER_ROUTE)
            if (data.role === 'ADMIN') navigate(routes.ADMIN_ROUTE)
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }


    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <div className={classes.title}>{isLogin ? 'Авторизация' : 'Регистрация'}</div>
                <div className={classes.input_container + ' ' + classes.ic1}>
                    <input id="login" className={classes.input} type="text" placeholder=" " value={login} onChange={e => setLogin(e.target.value)} />
                    <div className={classes.cut}></div>
                    <label htmlFor="login" className={classes.placeholder}>Логин</label>
                </div>
                <div className={classes.input_container + ' ' + classes.ic2}>
                    <input id="password" className={classes.input} type="text" placeholder=" " value={password} onChange={e => setPassword(e.target.value)} />
                    <div className={classes.cut}></div>
                    <label htmlFor="password" className={classes.placeholder}>Пароль</label>
                </div>
                {isLogin ?
                    <div>
                        <button className={classes.submit} onClick={auth}>Войти</button>
                        <div className={classes.elseSubmit}>
                            <p>Нет аккаунта?</p>
                            <Link className={classes.elseLnk} to={routes.REGISTRATION_ROUTE}>Зарегистрироваться</Link>
                        </div>
                    </div>
                    :
                    <div>
                        <button className={classes.submit} onClick={auth}>Зарегистрироваться</button>
                        <div className={classes.elseSubmit}>
                            <p>Есть аккаунт?</p>
                            <Link className={classes.elseLnk} to={routes.LOGIN_ROUTE}>Войти</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default AuthPage;

function dispatch(arg0: { type: UserActionTypes; payload: { login: string; role: any; }; }) {
    throw new Error('Function not implemented.');
}
