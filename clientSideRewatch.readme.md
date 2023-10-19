Client Side 

Initial setup

* MKDIR client - cd client - npm create vite@latest . - npm i && npm run dev - npm i bootstrap - delete unneccesary files - bring 2 imports into main.jsx for bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';

We cleaned up App.jsx and deleted app.css and index.css

function App(){
    rerurn <div>App</div>
}
export default App;