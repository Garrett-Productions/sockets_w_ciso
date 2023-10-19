import { createContext, useState } from "react";

const NameContext = createContext({
  name:"",
  setName: () => {},
});



function NameContextProvider(children){

  const [name, setName] = useState('');
  return <NameContext.Provider value={{name, setName}}>
    {children}
  </NameContext.Provider>
}

export {NameContext};
export default NameContextProvider