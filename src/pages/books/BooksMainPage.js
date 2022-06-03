import BooksProvider from "./BooksProvider";
import Books from "./Books";
const BooksMainPage = () => {
    return (
        <BooksProvider>
            <Books/>
        </BooksProvider>
    )
}

export default BooksMainPage;