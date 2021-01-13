import React from 'react'
import { firestore } from '../../Firebase/firebase'
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from '../ChatMessage/ChatMessage';

const ChatPage = () => {
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query,{idField: 'id'});
    return (
        <div>
            {messages && messages.map((message) =><ChatMessage key={message.id} message={message}/>)}
        </div>
    )
}

export default ChatPage
