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
            return () => socket.off('chat-message');

        }, [socket]);

    return <div>{name}</div>;
}
export default Chat;

Notes
* client > npm i socket.io-client // differnet than the install on the server, 2 diff socket installs
* deconstruct our useContext(NameContext)
* create state using thr socket
* state for messages
    const {socket} =useState(is('8000')) // this is the backbone of our backend, this gets our socket server to create the handshake between client and server
* as soon as this component loads, in useEffect, whenever socket changes we want the useEffect to run, put that in dependency array
* in useEffect what do we want to listen for?
    - event, that you passed into the server to the socket.on function... ('chat-message')
    - now we listen to it on the client side, same way.
    - when we set state, we use a calback function that takes in a parameter, prevMessages, and weith the     spread operator, appending the new message (message) which is 'chat-message' to the last index in our array!
* Now we want to return a clean up function, web socket protocol stays open, so when this component is unmounted, we want to close the socket, literally remove the listener from the sockets array of listener
    - in the return turn off the socket, no memeory leckage, clean up function!
        socket.off

    - At this point we have app.jsx decked out, we have two components, enterchat and Chat and we have our context component to capture our name var's in useContext through useRef() to share across app.
    - We have now learned how to unmount our socket, socket.off('chat-message') in a clean up fucntion within our callBack in chat.jsx.
    - We also passed our socket variable into our dependency array to update every time the socket receives a new user

-------------We just installed, included socket on both ends, server.js and chat.jsx--------------------

Now we need a component to display our chat messages and a form for our user to enter our chat messages
- ChatCard and chatForm
* ChatCards goal is to display our messages via mapping over them and inserting them into bootstraps card-body

We created our chatCard component which deconstructs a var called messages. 
ChatCard is imported within our return statement in Chat.jsx, where it gets {messages, setMessages} passed in as props.
ChatForm is also imported in the return statement in Chat.jsx
-------------------------------------------------------
ChatCard.jsx 
fucntion ChatCard(){
    return (
        {messages.length > 0 && messages.map((message) =>(<p>{message.text}))}
    )
}
export default ChatCard;
***Most inportantly  we import { v4 as uuidv4 } from 'uuid'; and installed npm i uuid on the server side so that we can give each message a unique id 
---------------------------------------------------
Meanwhile back in server.js above.... WE UPDATED IT WITH SOCKET.OFF STUFF AND EMIT()


LASTLY..
we create our chatform.jsx component

stopped at 40 min. 22 min left 
--------------------------------
io.emit emits an event to all connected clients
socket.broadcast.emit emits an event to all clients other than this particular one, referenced by the socket variable
socket.emit emits an event directly to this specific client
--------------------------------