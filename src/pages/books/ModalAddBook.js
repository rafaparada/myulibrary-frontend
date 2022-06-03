import { useContext } from "react";
import { BooksContext } from "./BooksProvider";
import { Modal } from "react-bootstrap";

const ModalAddBook = () =>{
    const {
        showModalAddBook,
        addBook,
        setShowModalAddBook,
        bookForm,
        onChangeForm,
        editOn,
    } = useContext(BooksContext);
    return(
        <Modal show={showModalAddBook} onHide={()=>setShowModalAddBook(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{editOn ? 'EDIT BOOK':'NEW BOOK'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control text-uppercase" placeholder="Book's title" name="title" id="title" onChange={(e)=>onChangeForm(e)} value={bookForm.title}/>
                    <label htmlFor="recado">Title</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control text-uppercase" placeholder="Book's author" name="author" id="author" onChange={(e)=>onChangeForm(e)} value={bookForm.author}/>
                    <label htmlFor="author">Author</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control text-uppercase" placeholder="Book's publishedyear" name="publishedyear" id="publishedyear" onChange={(e)=>onChangeForm(e)} value={bookForm.publishedyear}/>
                    <label htmlFor="publishedyear">Published year</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" className="form-control text-uppercase" placeholder="Book's genre" name="genre" id="genre" onChange={(e)=>onChangeForm(e)} value={bookForm.genre}/>
                    <label htmlFor="genre">Genre</label>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={()=>addBook()}>
                    Save
                </button>
                <button className="btn btn-primary"  onClick={()=>setShowModalAddBook(false)}>
                    Cancel
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAddBook;
