import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../consts';
import classes from './authPage.module.scss'

const AuthPage: React.FC = () => {
    
    const isLogin = window.location.pathname === routes.LOGIN_ROUTE

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <div className={classes.title}>{isLogin ? 'Авторизация' : 'Регистрация'}</div>
                <div className={classes.input_container + ' ' + classes.ic1}>
                    <input id="firstname" className={classes.input} type="text" placeholder=" " />
                    <div className={classes.cut}></div>
                    <label htmlFor="firstname" className={classes.placeholder}>Логин</label>
                </div>
                <div className={classes.input_container + ' ' + classes.ic2}>
                    <input id="lastname" className={classes.input} type="text" placeholder=" " />
                    <div className={classes.cut}></div>
                    <label htmlFor="lastname" className={classes.placeholder}>Пароль</label>
                </div>
                {isLogin ?
                    <div>
                        <button className={classes.submit}>Войти</button>
                        <div className={classes.elseSubmit}>
                            <p>Нет аккаунта?</p>
                            <Link className={classes.elseLnk} to={routes.REGISTRATION_ROUTE}>Зарегистрироваться</Link>
                        </div>
                    </div>
                    :
                    <div>
                    <button className={classes.submit}>Зарегистрироваться</button>
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