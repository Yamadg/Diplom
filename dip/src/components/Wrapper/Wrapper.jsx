import Nav from "../MainPage/Nav/Nav";
import Footer from "../MainPage/Footer/Footer";

export default function Wrapper({ children, className }) {
    const classNames = `container ${className}`;
    return (
        <main className={classNames}>
            <Nav />
            {children}
            <Footer />
        </main>
    )
}