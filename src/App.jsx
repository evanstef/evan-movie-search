import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PopularPage from "./pages/PopularPage";

 export default function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/popular" element={<PopularPage />}/>
            </Routes>
        </Router>
    )
 }