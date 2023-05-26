import {BrowserRouter, Route, Routes} from "react-router-dom";

import Nav from "./components/MainPage/Nav/Nav";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/MainPage/Footer/Footer";
import OurProjects from "./components/OurProjects/OurProjects";

import './App.css';
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* подстановочный путь */}
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"project"} element={<OurProjects/>} />
                <Route path={"about"} element={<Footer/>} />
                <Route path={"login"} element={<Login />} />
                <Route path={"admin"} element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;