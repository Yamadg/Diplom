import Nav from "../MainPage/Nav/Nav";
import Footer from "../MainPage/Footer/Footer";
import './Wrapper.module.scss'

export default function Wrapper({ children, className = '' }) {
    
    return (
        <main className={`${className} global-wrapper`}>
            <Nav />
            <div className="container wrapper-container">{children}</div>
            <Footer />
        </main>
    )
}