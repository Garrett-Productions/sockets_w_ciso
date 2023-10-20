in chat.jsx 

import io from 'socket.io-client
import {useconetxt, useEffect, usestate}

function chat(){
    const {name} = useContext(NameContext)
    const {socket} =useState(is('8000'))
    const [messages, setMessages] = useState([]);

    useEffect(()=> {
        socket.on('chat-message'), (message)=> {
            console.log(message); // to ensure we grabbed it
            setMessages((prevMessages) => [...prevMessages, message]);
            });
    }, [socket]);

    return <div>{name}</div>;
}


Notes
* client > npm i socket.io-client // differnet than the install on the server, 2 diff socket installs

* deconstruct our useContext(NameContext)
* create state using thr socket
* state for messages
const {socket} =useState(is('8000')) // this is the backbone of our backend, this gets our socket server to create the handshake between client and server
* as soon as this component loads, in useEffect, whenever socket changes we want the useEffect to run, put that in dependency array
* in useEffect what do we want to listen for?
    event, that you passed into the server to the socket.on function... ('chat-message')
    now we listen to it on the client side, same way.
    when we set state, we use a calback fcuntion that takes in a parameter, prevMessages, and weith the spread operator, appending the new message (message) which is 'chat-message' to the last index in our array!
