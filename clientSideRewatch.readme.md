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
        import { useRef } from 'react;
        create a var from useRef, like we do from useNavigate
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
function EnterChat(){
    return (
    <div>

    </div>
    )
}
// insert form with bootstrap
export default EnterChat;

----------------
* CSS Attributes used:
    card & shadow, card-body
    d-flex justify-content-center align-items-center min-vh-100

* We create a form