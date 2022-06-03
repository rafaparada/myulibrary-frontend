import BooksProvider from "./BooksProvider";
import Books from "./Books";
import ModalAddBook from "./ModalAddBook";
const BooksMainPage = () => {
    return (
        <BooksProvider>
            <Books/>
            <ModalAddBook/>
        </BooksProvider>
    )
}

export default BooksMainPage;