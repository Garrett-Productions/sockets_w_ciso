in chat.jsx 

import io from 'socket.io-client
import {useconetxt, useEffect, usestate}

function chat(){
    const {name} = useContext(NameContext)
    const {socket} =useState(is('8000'))
    const [messages, setMessages] = useState([]);

    useEffect(()=> {

    }, [socket])

}


Notes
* client > npm i socket.io-client // differnet than the install on the server, 2 diff socket installs

* deconstruct our useContext(NameContext)
* create state using thr socket
* state for messages
const {socket} =useState(is('8000')) // this is the backbone of our backend, this gets our socket server to create the handshake between client and server
* as soon as this component loads, in useEffect, whenever socket changes we want the useEffect to run, put that in dpeendency array

