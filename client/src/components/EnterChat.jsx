import {useRef, useEffect, useContext } from 'react';
import {NameContext} from "../context/NameContext";
import {useNavigate} from 'react-router-dom';

function EnterChat() {
  const nameInputRef = useRef();
  const { setName } = useContext(NameContext);
  const navigate = useNavigate();

  useEffect(() => {
    nameInputRef.current.focus(); // input focus
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(nameInputRef.current.value);
    localStorage.setItem('name', nameInputRef.current.value);
    navigate('/chat');
  }

  return (
    <div className='card shadow'>
    <div className='card-body'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username' className='form-label'>
          Your name:
        </label>
        <div className='d-flex gap-2'>
          <input 
            type='text' 
            name='username' 
            id='username' 
            className='form-control' 
            ref={nameInputRef}
            />
          <button type='submit' className='btn btn-primary'>
            SUBMIT
          </button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default EnterChat