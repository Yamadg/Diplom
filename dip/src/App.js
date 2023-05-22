import {BrowserRouter, Route, Routes} from "react-router-dom";

import Nav from "./components/MainPage/Nav/Nav";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/MainPage/Footer/Footer";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* подстановочный путь */}
                <Route path={"main-page"} element={<MainPage/>}/>
                <Route path={"project"} element={<Nav/>} />
                <Route path={"about"} element={<Footer/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;