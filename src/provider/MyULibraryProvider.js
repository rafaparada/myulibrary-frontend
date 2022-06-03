import { createContext,useState } from "react";
const MyULibraryContext = createContext();
const initialUserInfo = {iduser:'',firstname:'',lastname:'',user:'',email:'',role:'',token:'',login:false};
const MyULibraryProvider = ({children}) =>{
    const userInfo = JSON.parse(localStorage.getItem('user'))||initialUserInfo;
    const [loggedUser,setLoggedUser] = useState(userInfo);
    const data = {loggedUser,setLoggedUser};
    return(
        <MyULibraryContext.Provider value={data}>
            {children}
        </MyULibraryContext.Provider>
    ); 
}

export {MyULibraryProvider};
export default MyULibraryContext;