import {FaBook}  from 'react-icons/fa';
import { useContext } from 'react';
import { BooksContext } from './BooksProvider';
import '../../styles/estilos.css';
const Books = () =>{
    const {handleBtnAddBook,isLoading,infoAlert} = useContext(BooksContext);
    return(
        <div>
            <div className="containergridRec mb-4 rounded">
                <div className="iconcontainer rounded-circle">
                    <FaBook className="miIcon" />
                </div>
                <div className="itemscontainer"><h5 className="h5title">Books</h5></div>
                <div><button type="button" className="btn btn-link btnaddbook" onClick={()=>handleBtnAddBook()}>New Book</button></div>
            </div>
        </div>
  );
}

export default Books;