import './App.css';

import styles from './SecondPageModule.scss'
import Nav from "../MainPage/Nav/Nav";


function OurProjects() {
    return (
        <main>
            <Nav/>
            <div className={styles.section__fact}>
                <img/>
                <div>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </main>
    );
}

export default OurProjects;
