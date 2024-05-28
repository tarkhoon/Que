import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function EventSourcing (user) {
    console.log(user.user)
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');


    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = async () => {
        const eventSource = new EventSource(`http://192.168.0.110:4000/connect/${user.user}`)
        eventSource.onmessage = function (event) {
            const message = JSON.parse(event.data);
            setMessages(prev => [message, ...prev]);
        }
    }

    const sendMessage = async () => {
        await axios.post(`http://192.168.0.110:4000/new-messages/bybozavrik@gmail.com`, {
            message: value,
            id: Date.now()
        })
    }

    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Отправить</button>
                </div>
                <div className="messages">
                    {messages.map(mess =>
                        <div className="message" key={mess.id}>
                            {mess.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

