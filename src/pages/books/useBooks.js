import MyULibraryContext from "../../provider/MyULibraryProvider";
import { useState,useEffect,useContext } from "react";
const useBooks = () =>{
    const [books,setBooks] = useState([]);
    const [isLoading,setIsloading] = useState(false);
    const [infoAlert,setInfoALert]=useState({show:false,type:'',msg:''});
    const [showModalAddBook,setShowModalAddBook] = useState(false);
    const [bookForm,setBookForm] = useState({title:'',urgente:false});
    const [editOn,setEditOn] = useState(false);
    const {loggedUser:{idusuario,token}}=useContext(MyULibraryContext);
    const handleBtnAddBook = () =>{
        setBookForm({title:'',urgente:false});
        setEditOn(false);
        setShowModalAddBook(true);
    }

    const onChangeForm = (e) =>{
        const newBook = {...bookForm};
        newBook[e.target.name] =   e.target.value;
        setBookForm({...newBook});
    }
    return {
        books,
        handleBtnAddBook,
        isLoading,
        infoAlert,
        showModalAddBook,
        bookForm,
        editOn,
        setShowModalAddBook,
        onChangeForm
    }
}

export default useBooks;
