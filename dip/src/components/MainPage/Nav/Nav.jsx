import React, { useEffect, useState } from "react";

import { slide as Menu } from "react-burger-menu";

import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";

import imgLogo from "../../../assets/logo1.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setAuth(true)
    };
  }, [])

  return (
    <header className={`${styles.nav} container`}>
      <Link to={'/'}><img src={imgLogo} className={styles.logo} alt={imgLogo} /></Link>
      <ul className={styles.nav__menu}>
        <li>
          <Link to={"/"} className={styles.nav__menu__text}>
            Главная
          </Link>
        </li>
        <li>
          <Link to={"/command"} className={styles.nav__menu__text}>
            Наша команда
          </Link>
        </li>
        <li>
          <Link to={"/about"} className={styles.nav__menu__text}>
            О нас
          </Link>
        </li>
        {auth && 
              <li>
                <Link className={styles.nav__menu__text} to={'/admin'}>Заявки</Link>
              </li>
            }
      </ul>
      <div className={styles.burgerMenu}>
        <button
          type="button"
          className={styles.burgerMenu__toggle}
          onClick={handleMenuToggle}
        >
          <div className={styles.burgerMenu__toggle__item} />
          <div className={styles.burgerMenu__toggle__item} />
          <div className={styles.burgerMenu__toggle__item} />
        </button>
        <Menu
          isOpen={isMenuOpen}
          right
          disableAutoFocus
          customBurgerIcon={false}
          noOverlay
        >
          <ul className={styles.nav__menu}>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <Link to={"/command"}>Наша команда</Link>
            </li>
            <li>
              <Link to={"/about"}>О нас</Link>
            </li>
            {auth && 
              <li>
                <Link to={'/admin'}>Заявки</Link>
              </li>
            }
          </ul>
        </Menu>
      </div>
    </header>
  );
};

export default Nav;
