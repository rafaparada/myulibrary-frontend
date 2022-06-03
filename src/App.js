import {MyULibraryProvider} from "./provider/MyULibraryProvider";
import Routes from "./routes/Routes";
function App() {
    return (
        <MyULibraryProvider>
            <div className="margintop">
                <Routes/>
            </div>
        </MyULibraryProvider>
    );
}

export default App;
