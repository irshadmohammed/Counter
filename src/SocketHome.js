import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

const port = 3001;
const socket = io(`http://localhost:${port}`);

function SocketHome() {

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [newMessage, setNewMessage] = useState("");
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');
    const [chatIsVisible, setChatIsVisible] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log(isConnected);
        socket.on('connect', () => {
            setIsConnected(true)
        })
        socket.on('disconnect', () => {
            setIsConnected(false)
        });
        return () => {
            socket.off('connect');
            socket.off('disconnect');
        }
    }, [isConnected]);

    useEffect(() => {
        socket.on('receive_msg', ({ user, message }) => {
            const msg = `${user} send: ${message}`
            setMessages(prevState => [msg, ...prevState])
        });
    }, [socket])

    const handleEnterChatRoom = () => {
        if (user !== "" && room !== "") {
            setChatIsVisible(true);
            socket.emit('join_room', { user, room });
        }
    }

    const handleSendMessage = () => {
        const newMsgData = {
            room: room,
            user: user,
            messages: newMessage
        }

        socket.emit("send_msg", newMsgData)
        const msg = `${user} send: ${newMessage}`
        setMessages(prevState => [msg, ...prevState]);
        setNewMessage("")
    }

    return (
        <div>
            {!chatIsVisible ? (
                <>
                    <input
                        type='text'
                        placeholder='user'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='room'
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                    />
                    <button
                        onClick={() => handleEnterChatRoom()}>
                        Enter
                    </button>
                </>
            ) : (
                <>
                    <h5>Room: {room} | user: {user}</h5>
                    <div>
                        {messages.map(el => <div>{el}</div>)}
                    </div>
                    <input
                        type='text'
                        placeholder='message'
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        onClick={() => handleSendMessage()}>
                        Send Message
                    </button>
                </>
            )}
            {isConnected === true ? (
                <p>Logged In</p>
            ) : (
                <p>Logged Out</p>
            )}
            <button
                onClick={() => setIsConnected(false)}>
                Logout
            </button>
        </div>
    )
}

export default SocketHome