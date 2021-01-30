/* ==========================================================================
** Chat component with
** 28/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
//  Imports
// --------------------------------------
    import React, {useState,useEffect} from 'react';
    import io from "socket.io-client";
    import ScrollToBottom from 'react-scroll-to-bottom';
    import queryString from 'query-string';
    import InfoBar from '../infoBar/InfoBar';
    import Input from '../input/Input';
    import ChatMessage from './message/ChatMessage';
    import UsersInfo from '../usersInfo/UsersInfo';
    import './styles.css';

    let socket;
  

// --------------------------------------
// Create Component
// --------------------------------------
    const ChatRoom = ({location})=> {

        const [name, setName] = useState('');
        const [room, setRoom] = useState('');
        const [users, setUsers] = useState([]);
        const [messages, setMessages] = useState([]);
        const [message, setMessage] = useState('');
        // const ENDPOINT = 'http://localhost:5000';
        const ENDPOINT = 'https://chat-server-2021-30-01.herokuapp.com';


        // ?--------------------------------------
        // ? Join to a Room Effect
        // ?--------------------------------------
        useEffect(()=> {
            const {name, room} = queryString.parse(location.search);
            socket = io(ENDPOINT, {transports: ['websocket', 'polling', 'flashsocket']});
    
            setName(name);
            setRoom(room);
            socket.emit('join', {name, room}, (error)=> {
                
                if(error) {
                    alert(error);
                }
            });

            // Componeent dismounts
            return () => {
                socket.emit('disconnect');
                socket.off();
            }
        },[ENDPOINT, location.search]);


        // ?--------------------------------------
        // ? Send Message Effect
        // ?--------------------------------------
        useEffect(() => {
            socket.on('message', (message) => {
                setMessages(messages=>[...messages, message]);
            })

            socket.on("roomData", ({ users }) => {
                setUsers(users);
            });

        },[]);
        
       
        

        // ?--------------------------------------
        // ? Send Messages and emit event
        // ?--------------------------------------
        const sendMessage = (event) => {
            event.preventDefault();
        
            if(message) {
              socket.emit('sendMessage', message, () => setMessage(''));
            }
          }

        console.log( messages, message)

        return (
            <div className = "chatContainer">
                <div className="container">
                    <InfoBar room = {room}/>
                    <ScrollToBottom className="messages">
                        {messages && messages.map((message, index) => <ChatMessage key = {index} message= {message} name = {name} /> )}
                    </ScrollToBottom>
                    <Input 
                        message = {message}
                        setMessage = {setMessage}
                        sendMessage = {sendMessage}/>
                </div>
                <UsersInfo users= {users}/>
            </div>
            
        )
    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default ChatRoom;