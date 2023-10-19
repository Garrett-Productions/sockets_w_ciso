import {useState, useEffect, useContext} from 'react';
import { NameContext } from '../context/NameContext';
import io from 'socket.io-client';
import ChatForm from './ChatForm'
import ChatCard from './ChatCard'


function Chat(){
  const {name} = useContext(NameContext)
  const [socket] = useState(io(':8000'))
  const [messages, setMessages] =useState([])

  useEffect(()=> {
    socket.on('chat-message', (message) => {
    console.log(message);
    setMessages((prevMessages) => [...prevMessages, message])
  });

  return () => socket.off('chat-message'); // clean up function, so our socket turns off
  }, [socket]);

  return <div>
    <ChatCard />
    <ChatForm />
    </div>
}
export default Chat;