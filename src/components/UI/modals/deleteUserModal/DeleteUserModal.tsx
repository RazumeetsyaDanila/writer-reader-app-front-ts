import classes from './deleteUserModal.module.scss'
import React from 'react';

const DeleteUserModal: React.FC<any> = ({children, visible, setVisible}) => {
    const rootClasses = [classes.modal]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default DeleteUserModal;