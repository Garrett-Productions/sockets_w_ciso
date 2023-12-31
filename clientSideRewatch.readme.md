Client Side 

Initial setup

* MKDIR client - cd client - npm create vite@latest . - npm i && npm run dev - npm i bootstrap - delete unneccesary files - bring 2 imports into main.jsx for bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';

We cleaned up App.jsx and deleted app.css and index.css

Side Notes-overalls-big scale {
    *Create components (EnterChat.jsx)
    * dark mode - index.html on line 2 data-bs-theme="dark"
    * CSS folder goes into [App > public folder], make sure you put the link of css file in index.html
    * useRef is for when useState seems like overkill, and is used when the component mounts for focusing an input
        We have to import {useRef} from 'react', then create a variable from it, then attach our variable of useRef to an html elmement with the attribute of ref = name of created variable 
        useRef ties with useEffect to focus. Ex) useEffect(()=> {nameInputRef.current.focus();}, []);
    * Emmet Abbreviation for wrapping divs
}

Steps - micro 
* form component for user to enter their name so they can display it
    with every chat message



----------------
function App(){
    * wrap components in CSS chatBox
    return (
    <div>
    <EnterChat />
    </div>
    )
}
export default App;
-----------------

-----------------
import { useRef } from 'react'
function EnterChat(){
    const nameInputRef = useRef();

    useEffect(()=> {
        nameInputRef.current.focus();
    }, []);

    return (
    <div>
    <form> <input type="text", name="username", id="username", className="form-control", ref={nameInputRef}> // gonna focus this point
    </div>
    )
}
// insert form with bootstrap
export default EnterChat;

----------------
* CSS Attributes used:
    card & shadow, card-body
    d-flex justify-content-center align-items-center min-vh-100
    d-flex gap-2

??stopped at 12 minutes to focus
--------------------------------------------------------

Created Context folder in src with NameContext.jsx  where we are using context to capture a name across inputs

NameContext.jsx
import { createContext, useEffect, useState } from "react";

const NameContext = createContext({
  name:"",
  setName: () => {},
});

function NameContextProvider({children}){
  const [name, setName] = useState('');

  useEffect(()=> {
    if (localStorage.getItem('name')) {
      setName(localStorage.getItem('name'));
    }
  }, [name]);


  return (
    <NameContext.Provider value={{name, setName}}>
      {children}
  </NameContext.Provider>
  );
}

* We use Context to have content available app wide
* we do this by setting a var = to  const namedContext = createContext({ name: "", setName: ()=> {}})
* the .provider allows context to share what info you pass into to it, aka our nameContext function thats equal to our createContext object
* we also must create a state variables
***** must wrap your entire app in main.jsx in your fucntion with context provider, in our case, <NameContextProvider>
*** Now we have access to our context across app, like lifted state in a way, so we can now capture the inputted name from the form on EnterChat.jsx in context in our handle submit function! 
* export content

-----In EnterChat.jsx----
* also import the useContext from 'react' as well and and {NameContext}! from "../context/NameContext"
const {setName} = useContext(nameContext) 
now finally in our handleSubmit function, we use that setName with the ref.. setName(nameInputRef.current.value)

-- Bring in react-router-dom, and create 2 routes in app.jsx

Create Chat.jsx
- we created our app.jsx routes and components and we imported react-router-dom into app.jsx
 Chat.jsx
 import {useContext, useState, useEffect} from 'react';
 import {NameContext} from "../context/NameContext

 function Chat(){
    const { name } = useContext(NameContext);
    return <div>Hey</div>;
 }
 export default Chat;

 NOW WE HAVE APP.JS AND 2 COMPONENTS, WE'VE used useRef, useContext along with useState, useEffect, we were introduced how to pass that context around with .provider and state, and rendering app wide with useContext

 Now Time for Sockets in a separate readme