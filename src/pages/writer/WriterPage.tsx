import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/UI/modals/Modal';
import { routes } from '../../consts';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { messages_delete, message_create } from '../../http/writerAPI';
import classes from './writerPage.module.scss';
import deleteMessageImg from '../../img/del-btn.png'
import EditableText from '../../components/UI/inputs/editableText/EditableText';

const WriterPage: React.FC = () => {
    const currentUserLogin = useTypedSelector(state => state.user.login)
    const currentUserId = useTypedSelector(state => state.user.id)

    const [messageModal, setMessageModal] = useState(false)
    const [message, setMessage] = useState('')

    const { messages, loading, error } = useTypedSelector(state => state.messages)

    useEffect(() => {
        fetchUserMessages(currentUserId)
    }, [])

    const { fetchUserMessages, unsetUser } = useActions()

    const logOut = () => {
        unsetUser()
    }

    const messageAdd = async () => {
        try {
            await message_create(message, currentUserId)
            setMessage('')
            // alert("Сообщение отправлено!")
            fetchUserMessages(currentUserId)
            setMessageModal(false)
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }

    const deleteMessage = async (message_id: any) => {
        try {
            await messages_delete(message_id)
            fetchUserMessages(currentUserId)
            setMessageModal(false)
            // alert("Сообщение id:" + message_id + " удалено!")
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }

    if (loading) {
        return <h1 className={classes.loading}>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className={classes.container}>
            {/* <h1 className={classes.login}>Пользователь - {currentUserLogin}</h1> */}
            <h1>Мои сообщения ({currentUserLogin})</h1>
            <table className={classes.rwd_table}>
                <thead>
                    <tr>
                        <th>Текст</th>
                        <th>Дата</th>
                        <th>Удалить</th>
                    </tr>
                    {messages.map(m => <tr key={m.message_id}>
                        <td data-th="Текст"><EditableText text={m.message_text} message_id={m.message_id} /></td>
                        <td data-th="Дата">{m.message_date.substring(0, 10)}</td>
                        <td ><img src={deleteMessageImg} alt="" className={classes.deleteImg} onClick={deleteMessage.bind(this, m.message_id)} /> <br /></td>
                    </tr>
                    )}
                </thead>
            </table>
            <button className={classes.message_add_btn} onClick={() => setMessageModal(true)}>Добавить сообщение</button>
            <Link className={classes.lnk} to={routes.LOGIN_ROUTE} onClick={unsetUser}>Выйти</Link>


            <Modal visible={messageModal} setVisible={setMessageModal}>
                <div className={classes.message_add_modal_fieldset}>
                    <p className={classes.message_add_modal_funcLabel}>Добавление нового сообщения</p>
                    <textarea className={classes.message_add_modal_input} placeholder='Введите сообщение...' value={message} onChange={e => setMessage(e.target.value)} /><br />
                    <button className={classes.message_add_btn_modal} onClick={messageAdd} >Добавить</button>
                </div>
            </Modal>
        </div>
    );
};

export default WriterPage;