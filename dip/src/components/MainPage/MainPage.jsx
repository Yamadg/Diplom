import React, {useRef, useState} from 'react';

import { slide as Menu } from 'react-burger-menu';

import Nav from "./Nav/Nav";
import MySlider from "./MySlider/MySlider";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

import styles from "./MainPage.module.scss";

import advantages from "../../assets/check-line.svg";
import building from "../../assets/fon1.jpg";

const MainPage = () => {
  // const myRef = useRef();
  //
  // const handleClick = () => {
  //   if (myRef.current) {
  //     const element = myRef.current.getBoundingClientRect();
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const y = element.top + scrollTop;
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   }
  // }

  return (
    <div className={styles.mainPage}>
      <section className={styles.mainPage__wrapper}>
        <Nav/>
        <div className={styles.mainPage__aboutUs}>
          <div className={styles.mainPage__aboutUs__order}>
            <h2 className={styles.mainPage__aboutUs__order__title}>
              ПРОЕКТИРОВАНИЕ ЛЮБОЙ СЛОЖНОСТИ
            </h2>
            <h2 className={styles.mainPage__aboutUs__order__title}>
              БЫСТРЫЙ НАДЕЖНЫЙ
            </h2>
            <div className={styles.mainPage__aboutUs__order__subTitle}>
              От проектировщиков,знающих своё дело
            </div>
            <button type="submit"
               // onClick={handleClick}
               className={styles.mainPage__aboutUs__order__button}
            >
              Оставить заявку
            </button>
          </div>
          <img src={building} alt="Фото" className={styles.mainPage__aboutUs__img}/>
        </div>
        <div className={styles.mainPage__advantages}>
          <h1 className={styles.mainPage__advantages__title}>
            Наши преимущества
          </h1>
          <img src={advantages} alt="Фото"/>
        </div>
        <MySlider/>
        <Form />
        {/*<Footer ref={myRef}/>*/}
      </section>
    </div>
  );
};

export default MainPage;