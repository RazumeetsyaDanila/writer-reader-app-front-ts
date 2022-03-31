import React, {useEffect} from 'react';
import classes from './adminPage.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchUsers, setUsersPage } from '../../store/actionCreators/usersActionCreator';
import { useActions } from '../../hooks/useActions';
import { Link } from 'react-router-dom';
import { routes } from '../../consts';
import deleteUser from '../../img/del-btn.png'

const AdminPage: React.FC = () => {
    const {page, users, limit, loading, error} =  useTypedSelector (state => state.users)
    const {fetchUsers, unsetUser} = useActions()

    useEffect(() => {
        fetchUsers(page, limit)
    }, [])

    if (loading) {
        return <h1 className={classes.loading}>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const logOut = () => {
        unsetUser()
    }

    return (
        <div className={classes.container}>
            <h1>Пользователи</h1>
            
            <table className={classes.rwd_table}>
                <thead>
                    <tr>
                        <th>Логин</th>
                        <th>Роль</th>
                        <th>Удалить</th>
                    </tr>
                    {users.map(u =><tr key={u.login}>
                            <td data-th="Логин">{u.login}</td>
                            <td data-th="Роль">{u.role}</td>
                            <td data-th="Удалить"><img src={deleteUser} alt="" className={classes.deleteImg} /></td>
                        </tr>
                    )}
                </thead>
            </table>
            <Link className={classes.lnk} to={routes.LOGIN_ROUTE} onClick={unsetUser}>Выйти</Link>
        </div>
    );
};

export default AdminPage;