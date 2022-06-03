import MyULibraryContext from "../../provider/MyULibraryProvider";
import { useState,useEffect,useContext } from "react";
const useBooks = () =>{
const [books,setBooks] = useState([]);
    return {books}
}

export default useBooks;
