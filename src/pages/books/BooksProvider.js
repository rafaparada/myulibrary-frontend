import { createContext } from "react";
import useBooks from "./useBooks";
const BooksContext = createContext();
const BooksProvider = ({children}) =>{
    return(
        <BooksContext.Provider value={useBooks()}>
            {children}
        </BooksContext.Provider>
    );
}
export{BooksContext}
export default BooksProvider;
