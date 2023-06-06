import {BrowserRouter, Route, Routes} from "react-router-dom";

import Nav from "./components/MainPage/Nav/Nav";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/MainPage/Footer/Footer";
import OurCommand from "./components/OurProjects/OurCommand";

import './App.css';
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* подстановочный путь */}
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"command"} element={<OurCommand/>} />
                <Route path={"about"} element={<AboutUs/>} />
                <Route path={"login"} element={<Login />} />
                <Route path={"admin"} element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;