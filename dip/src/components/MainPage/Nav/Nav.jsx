import React, { useState } from "react";

import { slide as Menu } from "react-burger-menu";

import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";

import imgLogo from "../../../assets/logo1.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.nav}>
      <img src={imgLogo} className={styles.logo} alt={imgLogo} />
      <ul className={styles.nav__menu}>
        <li>
          <Link to={"/"} className={styles.nav__menu__text}>
            Главная
          </Link>
        </li>
        <li>
          <Link to={"/project"} className={styles.nav__menu__text}>
            Наши проекты
          </Link>
        </li>
        <li>
          <Link to={"/about"} className={styles.nav__menu__text}>
            О нас
          </Link>
        </li>
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
              <Link to={"/project"}>Наши проекты</Link>
            </li>
            <li>
              <Link to={"/about"}>О нас</Link>
            </li>
          </ul>
        </Menu>
      </div>
    </header>
  );
};

export default Nav;
