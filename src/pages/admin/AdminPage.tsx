import React, {useEffect} from 'react';
import classes from './adminPage.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchUsers, setUsersPage } from '../../store/actionCreators/usersActionCreator';
import { useActions } from '../../hooks/useActions';

const AdminPage: React.FC = () => {


    let data = [
        {
            movie_title: 'Star Wars',
            genre: 'Adventure, Sci-fi',
            year: '1977',
            gross: '$460,935,665',
            id: '1'
        },
        {
            movie_title: 'Howard The Duck',
            genre: 'Comedy',
            year: '1986',
            gross: '$16,295,774',
            id: '2'
        },
        {
            movie_title: 'American Graffiti',
            genre: 'Comedy, Drama',
            year: '1973',
            gross: '$115,000,000',
            id: '3'
        },
        {
            movie_title: 'Star Wars',
            genre: 'Adventure, Sci-fi',
            year: '1977',
            gross: '$460,935,665',
            id: '4'
        },
        {
            movie_title: 'Howard The Duck',
            genre: 'Comedy',
            year: '1986',
            gross: '$16,295,774',
            id: '5'
        },
        {
            movie_title: 'American Graffiti',
            genre: 'Comedy, Drama',
            year: '1973',
            gross: '$115,000,000',
            id: '6'
        },
        
    ]

    const {page, users, limit, loading, error} =  useTypedSelector (state => state.users)
    const {fetchUsers, setUsersPage} = useActions()

    useEffect(() => {
        fetchUsers(page, limit)
    }, [])

    if (loading) {
        return <h1 className={classes.loading}>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
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
                            <td data-th="Удалить"><button>X</button></td>
                        </tr>
                    )}
                </thead>
            </table>
        </div>
    );
};

export default AdminPage;