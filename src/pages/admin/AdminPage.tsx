import React, { useEffect, useState } from 'react';
import classes from './adminPage.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Link } from 'react-router-dom';
import { routes } from '../../consts';
import deleteUser from '../../img/del-btn.png'
import { admin_registration, delete_user } from '../../http/adminAPI';
import DeleteUserModal from '../../components/UI/modals/deleteUserModal/DeleteUserModal';

const AdminPage: React.FC = () => {
    const { page, users, limit, loading, error } = useTypedSelector(state => state.users)
    const currentUser = useTypedSelector(state => state.user.login)
    const { fetchUsers, unsetUser } = useActions()

    const [deleteUserModal, setDeleteUserModal] = useState(false)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('READER')

    useEffect(() => {
        fetchUsers(page, limit)
    }, [])

    if (loading) {
        return <h1 className={classes.loading}>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const userDelete = async (lgn: string) => {
        // await delete_user(lgn).then(data => alert(data.message))
        try {
            await delete_user(lgn)
            fetchUsers(page, limit)
        } catch (e: any) {
            alert(e.response.data.message)
        }

    }

    const test = () => {
        setDeleteUserModal(true)
    }

    const click = async () => {
        try {
            await admin_registration(login, password, role)
            fetchUsers(page, limit)
            setLogin('')
            setPassword('')
            setDeleteUserModal(false)
            // alert("Новый пользователь успешно зарегистрирован!")
        } catch (e: any) {
            alert(e.response.data.message)
        }
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
                    {users.map(u => <tr key={u.login}>
                        <td data-th="Логин">{u.login}</td>
                        <td data-th="Роль">{u.role}</td>
                        <td data-th="Удалить">
                            {
                                u.login !== 'admin' && u.login !== 'reader' && u.login !== 'writer' && u.login !== currentUser &&
                                <img src={deleteUser} alt="" className={classes.deleteImg} onClick={userDelete.bind(this, u.login)} />
                            }</td>
                    </tr>
                    )}
                </thead>
            </table>
            <button className={classes.user_add_btn} onClick={test}>Добавить пользователя</button>
            <Link className={classes.lnk} to={routes.LOGIN_ROUTE} onClick={unsetUser}>Выйти</Link>
            

            <DeleteUserModal visible={deleteUserModal} setVisible={setDeleteUserModal}>
            <div className={classes.delete_modal_fieldset}>
                <p className={classes.delete_modal_funcLabel}>Добавление нового пользователя</p>
                <div className={classes.delete_modal_input_container + ' ' + classes.ic1}>
                    <input id="login" className={classes.delete_modal_input} type="text" placeholder=" " value={login} onChange={e => setLogin(e.target.value)}/>
                    <div className={classes.delete_modal_input_cut}></div>
                    <label htmlFor="login" className={classes.delete_modal_input_placeholder}>Логин</label>
                </div>
                <div className={classes.delete_modal_input_container + ' ' + classes.ic2}>
                    <input id="password" className={classes.delete_modal_input} type="text" placeholder=" " value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className={classes.delete_modal_input_cut}></div>
                    <label htmlFor="password" className={classes.delete_modal_input_placeholder}>Пароль</label>
                </div>
                <div>
                    <select name="role" className={classes.delete_modal_slct} onChange={e => setRole(e.target.value)} value={role}>
                        <option value="READER">Читатель</option>
                        <option value="WRITER">Писатель</option>
                        <option value="ADMIN">Админ</option>
                    </select>
                </div>

                <button className={classes.delete_modal_btn} onClick={click}>Зарегистрировать</button>
            </div>
                
            </DeleteUserModal>
        </div>
    );
};

export default AdminPage;