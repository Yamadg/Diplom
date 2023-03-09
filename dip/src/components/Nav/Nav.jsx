import React from 'react';
import styles from "./Nav.module.scss"
import imgLogo from '../../assets/logo1.svg'

const Nav = () => {
    return (
        <nav className={styles.nav}>
        <img src={imgLogo} className={styles.logo} alt={imgLogo}/>
            <div className={styles.nav__menu}>
                <span className={styles.nav__menu__text}>о нас</span>
                <span className={styles.nav__menu__text}>о нас</span>
                <span className={styles.nav__menu__text}>о нас</span>
            </div>
        </nav>


    );
};

export default Nav;