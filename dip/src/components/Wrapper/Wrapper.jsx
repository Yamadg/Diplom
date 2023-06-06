import Nav from "../MainPage/Nav/Nav";
import Footer from "../MainPage/Footer/Footer";
import './Wrapper.module.scss'

export default function Wrapper({ children, className = '' }) {
    
    return (
        <main className={className}>
            <Nav />
            <div className="container">{children}</div>
            <Footer />
        </main>
    )
}