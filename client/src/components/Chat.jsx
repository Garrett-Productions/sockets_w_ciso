import {useState, useEffect, useContext} from 'react';
import { NameContext } from '../context/NameContext';
import io from 'socket.io-client';


function Chat(){
  const {name} = useContext(NameContext)
  const [socket] = useState(io(':8000'))

  return <div>{{name}}</div>
}
export default Chat;