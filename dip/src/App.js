import './App.css';
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Form from "./components/Form/Form";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageOne from "./components/Routes/PageOne";
import Footer from "./components/Footer/Footer";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* подстановочный путь */}
                <Route path="main-page" element={<PageOne/>} />
                <Route path="project" element={<Nav/>} />
                <Route path="about" element={<Footer/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
