import React from 'react'
import {useRef, useContext} from 'react';
import { NameContext } from '../context/NameContext';
import io from 'socket.io-client';

function ChatForm() {
  const messageInputRef = useRef();
  const socket = io('http://localhost:8000');
  const {name} = useContext(NameContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    socket.emit('chat-message', {
      name,
      text: messageInputRef.current.value,
    });
    messageInputRef.current.value = '';
  }

  return (
      <form onSubmit={handleSubmit}>
        <div className='d-flex gap-2'>
          <input type='text' 
            name='user-message' id='user-message' 
            className='form-control' ref={messageInputRef}
            />
          <button type='submit' className='btn btn-primary'>
            SUBMIT
          </button>
      </div>
      </form>
  )
}

export default ChatForm