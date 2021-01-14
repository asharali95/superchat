import React,{useState, useRef} from 'react'
import { firestore , auth ,serverTimeStamp } from '../../Firebase/firebase'
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from '../ChatMessage/ChatMessage';
import Signout from './../Signout/Signout';

const ChatPage = () => {

    const dummy = useRef()
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query,{idField: 'id'});
    const [formValue, setFormValue] = useState("");

    var sendMessage = async(e) =>{
        e.preventDefault();
        const {uid} = auth.currentUser;
        await messageRef.add({
            text: formValue,
            createdAt: serverTimeStamp(),
            uid
        });
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div>
            <h1 className="centerheading">This is CHATROOM <span> <Signout/> </span> </h1>
            
            {messages && messages.map((message) =><ChatMessage key={message.id} message={message}/>)}
            <div ref={dummy}></div>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) =>setFormValue(e.target.value)} type="text" placeholder="Enter your message"/>
                <button type="submit">send</button>
            </form>
         </div>

    )
}

export default ChatPage
