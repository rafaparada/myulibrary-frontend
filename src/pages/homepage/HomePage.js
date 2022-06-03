import { useContext } from "react";
import MyULibraryContext from "../../provider/MyULibraryProvider";
import BooksMainPage from "../books/BooksMainPage";
const HomePage = () => {
    const {loggedUser:{iduser,token,role}}=useContext(MyULibraryContext);
    return (
        
            (role === "librarian") ? <BooksMainPage/>:<BooksMainPage/>
        
    )
}

export default HomePage
