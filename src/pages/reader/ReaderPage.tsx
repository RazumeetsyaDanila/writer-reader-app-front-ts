import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import classes from './readerPage.module.scss'

const ReaderPage: React.FC = () => {
    const { messages, loading, error } = useTypedSelector(state => state.messages)

    const { fetchMessages } = useActions()

    useEffect(() => {
        fetchMessages()
    }, [])

    if (loading) {
        return <h1 className={classes.loading}>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={classes.container}>
            <h1>Сообщения</h1>
            <table className={classes.rwd_table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Автор</th>
                        <th>Текст</th>
                        <th>Дата</th>
                    </tr>
                    {messages.map(m => <tr key={m.message_id}>
                        <td data-th="ID">{m.message_id}</td>
                        <td data-th="Автор">{m.login}</td>
                        <td data-th="Текст">{m.message_text}</td>
                        <td data-th="Дата">{m.message_date.substring(0, 10)}</td>
                        {/* <td><button>кнопка</button></td> */}
                    </tr>
                    )}
                </thead>
            </table>
        </div>
    );
};

export default ReaderPage;