import React from 'react'
import { auth } from './../../Firebase/firebase';

const ChatMessage = (props) => {
    const {text, uid} = props.message;
    /* we need to know if the message is sender or recieving one */
    const messageClass = uid ===auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
