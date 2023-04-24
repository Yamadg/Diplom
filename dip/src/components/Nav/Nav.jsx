import React from 'react';
import styles from "./Nav.module.scss"
import imgLogo from '../../assets/logo1.svg'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles.nav}>
        <img src={imgLogo} className={styles.logo} alt={imgLogo}/>
            <div className={styles.nav__menu}>
                <span className={styles.nav__menu__text}><Link to={'/main-page'}>главная</Link></span>
                <span className={styles.nav__menu__text}><Link to={'/project'}>наши проекты</Link></span>
                <span className={styles.nav__menu__text}><Link to={'/about'}>о нас</Link></span>
            </div>
        </nav>


    );
};

export default Nav;