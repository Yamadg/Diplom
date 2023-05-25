import {BrowserRouter, Route, Routes} from "react-router-dom";

import Nav from "./components/MainPage/Nav/Nav";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/MainPage/Footer/Footer";
import OurProjects from "./components/OurProjects/OurProjects";

import './App.css';
import Login from "./components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* подстановочный путь */}
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"project"} element={<OurProjects/>} />
                <Route path={"about"} element={<Footer/>} />
                <Route path={"login"} element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;