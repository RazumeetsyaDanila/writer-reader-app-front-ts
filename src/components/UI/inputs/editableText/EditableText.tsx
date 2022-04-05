import React, { useState } from 'react';
import { messages_update } from '../../../../http/writerAPI';
import classes from './editableText.module.scss'

const EditableText: React.FC<any> = ({ text, message_id}) => {
    const [message, setMessage] = useState(text)
    const [edit, setEdit] = useState(false)

    const updateMessage = async () => {
        try {
            await messages_update(message_id, message)
            setEdit(false)
            // alert("Сообщение id:" + message_id + " изменено!")
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }


    return (
        <div className={classes.container} onClick={event => event.stopPropagation()}>
            {edit ?
                <div>
                    <input className={classes.input} id="text" type="text" value={message} onChange={e => setMessage(e.target.value)} />
                    <button className={classes.btn} onClick={updateMessage}>ОК</button>
                </div>

                :
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{width: '130px'}}>{message}</p>
                    <button className={classes.btn} onClick={() => setEdit(true)}>ИЗМ</button>
                </div>

            }


        </div>
    );
};

export default EditableText;