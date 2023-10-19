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

export {NameContext};
export default NameContextProvider